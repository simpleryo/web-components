import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import R from "ramda";
import FieldTheme from "../Field/FieldTheme";
import * as RuleTypes from "../validators/rules";
import { FIELD_TYPE } from "../Field/type";
import { FIELD_GROUP_ITEM_TYPE } from "../FieldGroup/type";
import { REDUCER_NAME } from "../reducers";
import * as actionCreators from "../actions";

let PASSWORD_FIELD_NAME;
let MATCHED_FIELD_NAME;
const RULES = {};

class MatchingPasswordFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordError: "",
      matchedPasswordError: "",
      isEqual: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (R.not(PASSWORD_FIELD_NAME) || R.not(MATCHED_FIELD_NAME)) {
      return null;
    }

    const { errors = {}, values = {} } = props;
    const pwd = R.path([PASSWORD_FIELD_NAME], values);
    const matchedPwd = R.path([MATCHED_FIELD_NAME], values);

    return {
      ...state,
      passwordError: R.path([PASSWORD_FIELD_NAME], errors),
      matchedPasswordError: R.path([MATCHED_FIELD_NAME], errors),
      isEqual: pwd && matchedPwd && pwd === matchedPwd
    };
  }

  componentDidUpdate() {
    const { formName, dispatchUpdateField, values, errors } = this.props;
    const pwdHasComparisonError =
      R.path([PASSWORD_FIELD_NAME], errors) ===
      RuleTypes.RULE_COMPARATION_EQUALS;
    const matchedPwdHasComparisonErr =
      R.path([MATCHED_FIELD_NAME], errors) ===
      RuleTypes.RULE_COMPARATION_EQUALS;

    if (this.state.isEqual === true) {
      if (pwdHasComparisonError) {
        const pwd = R.path([PASSWORD_FIELD_NAME], values);
        dispatchUpdateField(
          { name: PASSWORD_FIELD_NAME, value: pwd, error: null },
          formName
        );
      }
      if (matchedPwdHasComparisonErr) {
        const matchedPwd = R.path([MATCHED_FIELD_NAME], values);
        dispatchUpdateField(
          { name: MATCHED_FIELD_NAME, value: matchedPwd, error: null },
          formName
        );
      }
    }
  }

  render() {
    let passwordField = null;
    let matchedPasswordField = null;
    const themeErrors = [];
    const themeRules = [];

    const {
      formName,
      children,
      themeParams: { labels, descriptions, hints }
    } = this.props;

    React.Children.map(children, child => {
      switch (child.props.type) {
        case FIELD_GROUP_ITEM_TYPE.PASSWORD:
          PASSWORD_FIELD_NAME = child.props.name;
          RULES[PASSWORD_FIELD_NAME] = [...child.props.rules];
          passwordField = React.cloneElement(child, {
            formName,
            type: FIELD_TYPE.INPUT_TEXT,
            htmlType: "password"
          });
          break;
        case FIELD_GROUP_ITEM_TYPE.MATCHED_PASSWORD:
          MATCHED_FIELD_NAME = child.props.name;
          RULES[MATCHED_FIELD_NAME] = [...child.props.rules];
          matchedPasswordField = React.cloneElement(child, {
            formName,
            type: FIELD_TYPE.INPUT_TEXT,
            htmlType: "password"
          });
          break;
        default:
      }
    });

    if (this.state.passwordError === RuleTypes.RULE_COMPARATION_EQUALS) {
      themeErrors[1] = this.state.passwordError;
      themeRules[1] = RULES[PASSWORD_FIELD_NAME];
    } else {
      themeErrors[0] = this.state.passwordError;
      themeRules[0] = RULES[PASSWORD_FIELD_NAME];
    }

    if (this.state.matchedPasswordError && R.not(this.state.isEqual)) {
      themeErrors[1] = this.state.matchedPasswordError;
      themeRules[1] = RULES[MATCHED_FIELD_NAME];
    }

    return (
      <Fragment>
        <FieldTheme
          className="matchingPassword__original"
          label={labels[0]}
          description={descriptions[0]}
          hint={hints[0]}
          error={themeErrors[0]}
          rules={themeRules[0]}
        >
          {passwordField}
        </FieldTheme>

        <FieldTheme
          className="matchingPassword__matched"
          label={labels[1]}
          description={descriptions[1]}
          hint={hints[1]}
          error={themeErrors[1]}
          rules={themeRules[1]}
        >
          {matchedPasswordField}
        </FieldTheme>
      </Fragment>
    );
  }
}

MatchingPasswordFieldGroup.propTypes = {
  formName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  themeParams: PropTypes.shape({
    labels: PropTypes.array,
    descriptions: PropTypes.array,
    hints: PropTypes.array
  }),
  values: PropTypes.object,
  errors: PropTypes.object,
  dispatchUpdateField: PropTypes.func.isRequired
};

const mapStateToProps = ({ [REDUCER_NAME]: form }, { formName }) => ({
  values: R.path([formName, "values"], form),
  errors: R.path([formName, "errors"], form)
});

const mapDispatchToProps = {
  dispatchUpdateField: actionCreators.updateField
};

export default connect(mapStateToProps, mapDispatchToProps)(
  MatchingPasswordFieldGroup
);
