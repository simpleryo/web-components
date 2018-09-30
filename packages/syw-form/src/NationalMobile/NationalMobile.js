import React, { Component } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import { Input, Select } from "@simpleryo/syw-uikit";
import { getBreakRuleMessage, validateField } from "../validators";
import FieldTheme from "../Field/FieldTheme";

class NationalMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationCodeValue: undefined,
      mobileValue: undefined,
      error: undefined,
      errorMessage: undefined
    };
  }

  handleNationChange = value => {
    const { nationCode, mobile, onChange = R.F } = this.props;
    let error = validateField(nationCode.rules, value);
    let errorMessage;
    if (R.isNil(error)) {
      error = validateField(mobile.rules, this.state.mobileValue);
      errorMessage = getBreakRuleMessage(mobile.rules, error);
      onChange(mobile.name, this.state.mobileValue, error);
      onChange(nationCode.name, value, null);
    } else {
      errorMessage = getBreakRuleMessage(nationCode.rules, error);
      onChange(nationCode.name, value, error);
    }

    this.setState({
      nationCodeValue: value,
      error,
      errorMessage
    });
  };

  handleMobileChange = event => {
    const { mobile, nationCode, onChange = R.F } = this.props;
    const value = R.path(["target", "value"], event);
    let error = validateField(mobile.rules, value);
    let errorMessage;
    if (R.isNil(error)) {
      error = validateField(nationCode.rules, this.state.nationCodeValue);
      errorMessage = getBreakRuleMessage(nationCode.rules, error);
      onChange(nationCode.name, this.state.nationCodeValue, error);
      onChange(mobile.name, value, null);
    } else {
      errorMessage = getBreakRuleMessage(mobile.rules, error);
      onChange(mobile.name, value, error);
    }

    this.setState({
      mobileValue: value,
      error,
      errorMessage
    });
  };

  render() {
    const {
      className,
      label,
      description,
      hint,
      disabled = false,
      nationCode,
      mobile
    } = this.props;
    const { nationCodeValue, mobileValue, error, errorMessage } = this.state;

    return (
      <FieldTheme
        className={className}
        label={label}
        description={description}
        hint={hint}
        error={error}
        errorMessage={errorMessage}
      >
        <div className="row input-group select-input">
          <div id={nationCode.name} className="col-xs-5 col-sm-4">
            <Select
              name={nationCode.name}
              value={nationCodeValue}
              placeholder={nationCode.placeholder}
              style={{ width: "100%" }}
              onChange={this.handleNationChange}
              getPopupContainer={nationCode.getPopupContainer}
              disabled={disabled}
            >
              {R.map(
                option => (
                  <Select.Option key={option.value} value={option.value}>
                    <div className="country-option">
                      <i className={`flag-icon flag-icon-${option.flag}`} />
                      <span>{option.label}</span>
                    </div>
                  </Select.Option>
                ),
                nationCode.countries
              )}
            </Select>
          </div>
          <div className="col-xs-7 col-sm-8">
            <Input
              id={mobile.name}
              name={mobile.name}
              value={mobileValue}
              placeholder={mobile.placeholder}
              onChange={this.handleMobileChange}
              disabled={disabled}
            />
          </div>
        </div>
      </FieldTheme>
    );
  }
}

NationalMobile.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.node,
  hint: PropTypes.node,
  nationCode: PropTypes.object.isRequired,
  mobile: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default NationalMobile;
