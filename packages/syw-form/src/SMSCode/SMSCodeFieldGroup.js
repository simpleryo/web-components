import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import R from "ramda";
import { REDUCER_NAME } from "../reducers";
import { FIELD_GROUP_ITEM_TYPE } from "../FieldGroup/type";
import { FIELD_TYPE } from "../Field/type";
import * as actionCreators from "../actions";
import FieldTheme from "../Field/FieldTheme";

let NATION_FIELD_NAME;
let MOBILE_FIELD_NAME;
let CODE_FIELD_NAME;
const RULES = {};

class SMSCodeFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationError: "",
      mobileError: "",
      codeError: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      R.not(NATION_FIELD_NAME) ||
      R.not(MOBILE_FIELD_NAME) ||
      R.not(CODE_FIELD_NAME)
    ) {
      return null;
    }

    const { errors = {} } = props;
    return {
      ...state,
      nationError: R.path([NATION_FIELD_NAME], errors),
      mobileError: R.path([MOBILE_FIELD_NAME], errors),
      codeError: R.path([CODE_FIELD_NAME], errors)
    };
  }

  handleCountDownFinish = () => {
    const { formName, dispatchFinishSMSCodeCountDown } = this.props;
    dispatchFinishSMSCodeCountDown({
      fieldName: CODE_FIELD_NAME,
      formName
    });
  };

  fieldsNameIsUpdated = () =>
    NATION_FIELD_NAME && MOBILE_FIELD_NAME && CODE_FIELD_NAME;

  checkSMSCodeIsDisabled = () => {
    const { values = {}, errors = {} } = this.props;
    if (R.not(this.fieldsNameIsUpdated()) || R.isEmpty(values)) {
      return true;
    }
    const nation = R.path([NATION_FIELD_NAME], values);
    const mobile = R.path([MOBILE_FIELD_NAME], values);
    return (
      R.not(nation) ||
      R.not(mobile) ||
      errors[NATION_FIELD_NAME] ||
      errors[MOBILE_FIELD_NAME]
    );
  };

  checkSMSCodeStatus = type => {
    const { fields = {} } = this.props;
    if (R.not(this.fieldsNameIsUpdated()) || R.isEmpty(fields)) {
      return false;
    }

    const status = R.path([CODE_FIELD_NAME, type], fields);
    return status === true;
  };

  render() {
    let nationField = null;
    let mobileField = null;
    let codeField = null;
    const themeErrors = [];
    const themeRules = [];

    const {
      formName,
      children,
      themeParams: { labels, descriptions, hints }
    } = this.props;

    React.Children.map(children, child => {
      switch (child.props.type) {
        case FIELD_GROUP_ITEM_TYPE.NATION:
          NATION_FIELD_NAME = child.props.name;
          RULES[NATION_FIELD_NAME] = [...child.props.rules];
          nationField = React.cloneElement(child, {
            formName,
            type: FIELD_TYPE.SELECT
          });
          break;
        case FIELD_GROUP_ITEM_TYPE.MOBILE:
          MOBILE_FIELD_NAME = child.props.name;
          RULES[MOBILE_FIELD_NAME] = [...child.props.rules];
          mobileField = React.cloneElement(child, {
            formName,
            type: FIELD_TYPE.INPUT_TEXT
          });
          break;
        case FIELD_GROUP_ITEM_TYPE.CODE:
          CODE_FIELD_NAME = child.props.name;
          RULES[CODE_FIELD_NAME] = [...child.props.rules];
          codeField = React.cloneElement(child, {
            formName,
            type: FIELD_TYPE.SMS_CODE,
            disabled: this.checkSMSCodeIsDisabled(),
            button: {
              ...child.props.button,
              isLoading: this.checkSMSCodeStatus("isLoading"),
              isCountingDown: this.checkSMSCodeStatus("isCountingDown"),
              onCountDownFinish: this.handleCountDownFinish
            }
          });
          break;
        default:
      }
    });

    if (this.state.nationError) {
      themeErrors[0] = this.state.nationError;
      themeRules[0] = RULES[NATION_FIELD_NAME];
    }

    if (this.state.mobileError) {
      themeErrors[0] = this.state.mobileError;
      themeRules[0] = RULES[MOBILE_FIELD_NAME];
    }

    if (this.state.codeError) {
      themeErrors[1] = this.state.codeError;
      themeRules[1] = RULES[CODE_FIELD_NAME];
    }

    return (
      <Fragment>
        <FieldTheme
          label={labels[0]}
          description={descriptions[0]}
          hint={hints[0]}
          error={themeErrors[0]}
          rules={themeRules[0]}
        >
          <div className="row input-group select-input">
            <div className="col-xs-5 col-sm-4">{nationField}</div>
            <div className="col-xs-7 col-sm-8">{mobileField}</div>
          </div>
        </FieldTheme>
        <FieldTheme
          className="form-group-with-btn"
          label={labels[1]}
          description={descriptions[1]}
          hint={hints[1]}
          error={themeErrors[1]}
          rules={themeRules[1]}
        >
          {codeField}
        </FieldTheme>
      </Fragment>
    );
  }
}

SMSCodeFieldGroup.propTypes = {
  formName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  themeParams: PropTypes.shape({
    labels: PropTypes.array,
    descriptions: PropTypes.array,
    hints: PropTypes.array
  }),
  values: PropTypes.object,
  errors: PropTypes.object,
  fields: PropTypes.object,
  dispatchFinishSMSCodeCountDown: PropTypes.func.isRequired
};

const mapStateToProps = ({ [REDUCER_NAME]: form }, { formName }) => ({
  values: R.path([formName, "values"], form),
  errors: R.path([formName, "errors"], form),
  fields: R.path([formName, "fields"], form)
});

const mapDispatchToProps = {
  dispatchFinishSMSCodeCountDown: actionCreators.finishSMSCodeCountDown
};

export default connect(mapStateToProps, mapDispatchToProps)(SMSCodeFieldGroup);
