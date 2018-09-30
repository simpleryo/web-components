import React, { Component } from "react";
import PropTypes from "prop-types";
import { FIELD_GROUP_TYPE } from "./type";
import SMSCodeFieldGroup from "../SMSCode/SMSCodeFieldGroup";
import MatchingPasswordFieldGroup from "../MatchingPassword/MatchingPasswordFieldGroup";

class FieldGroup extends Component {
  render() {
    let FieldGroupComponent;
    const {
      formName,
      type,
      children,
      className,
      labels = [],
      descriptions = [],
      hints = []
    } = this.props;
    const groupThemeParams = {
      labels,
      descriptions,
      hints
    };
    switch (type) {
      case FIELD_GROUP_TYPE.SMS_CODE:
        FieldGroupComponent = SMSCodeFieldGroup;
        break;
      case FIELD_GROUP_TYPE.MATCHING_PASSWORD:
        FieldGroupComponent = MatchingPasswordFieldGroup;
        break;
      default:
    }
    if (FieldGroupComponent) {
      return (
        <div className={className}>
          <FieldGroupComponent
            formName={formName}
            themeParams={groupThemeParams}
          >
            {children}
          </FieldGroupComponent>
        </div>
      );
    }
    return null;
  }
}

FieldGroup.propTypes = {
  formName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  labels: PropTypes.array,
  descriptions: PropTypes.array,
  hints: PropTypes.array,
  children: PropTypes.any.isRequired
};

export default FieldGroup;
