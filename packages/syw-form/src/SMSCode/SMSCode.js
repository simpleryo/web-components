import React, { Component } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import { Button, Input, CountDown } from "@simpleryo/syw-uikit";
import { validateField } from "../validators";

class SMSCode extends Component {
  handleChange = event => {
    const { name, rules, onChange = R.F } = this.props;
    const value = R.path(["target", "value"], event);
    const error = validateField(rules, value);
    onChange(name, value, error);
  };

  render() {
    const { name, value, placeholder, disabled, button } = this.props;
    const isDisabled = disabled || button.isCountingDown;
    const smsCode = value || this.props.value;
    return (
      <div className="input-cta">
        <Input
          name={name}
          type="text"
          value={smsCode}
          placeholder={placeholder}
          onChange={this.handleChange}
        />

        <span className="input-cta-btn">
          <Button
            type="primary"
            size="small"
            disabled={isDisabled}
            loading={button.isLoading}
            onClick={button.onRequest}
          >
            {R.not(button.isCountingDown) &&
              (button.isLoading ? button.loadingText : button.text)}

            {button.isCountingDown && (
              <CountDown counter={60} onFinish={button.onCountDownFinish} />
            )}
          </Button>
        </span>
      </div>
    );
  }
}

SMSCode.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  button: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SMSCode;
