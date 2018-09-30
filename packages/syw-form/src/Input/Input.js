import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input } from "@simpleryo/syw-uikit";
import R from "ramda";
import { validateField } from "../validators";
import { FIELD_ACTION } from "../Field/type";
import * as RuleTypes from "../validators/rules";

class InputField extends PureComponent {
  handleChange = event => {
    const { name, rules, onChange = R.F, ...rest } = this.props;
    const prevValue = rest.value;
    const value = R.path(["target", "value"], event);
    let trimedVal = value;
    // Remove unicode characters when copying from ios
    if (
      R.is(Array, rules) &&
      R.find(
        rule =>
          R.path(["conditions", "reg"], rule) === RuleTypes.REG_EXP_TYPE_PHONE,
        rules
      )
    ) {
      trimedVal = value.replace(/[^\x00-\x7F]/g, ""); // eslint-disable-line no-control-regex
    }
    const error = validateField(rules, trimedVal);
    onChange(name, trimedVal, error);

    this.updateStateByAction(prevValue, trimedVal);
  };

  handleBlur = event => {
    const { onBlur = R.F, rules } = this.props;
    onBlur(event);
    let trimedVal = R.path(["target", "value"], event);
    if (
      R.is(Array, rules) &&
      R.find(
        rule =>
          R.path(["conditions", "reg"], rule) === RuleTypes.REG_EXP_TYPE_PHONE,
        rules
      )
    ) {
      trimedVal = trimedVal.replace(/[^\d]/g, "");
    }
    event.target.value = trimedVal; // eslint-disable-line no-param-reassign
    this.handleChange(event);
  };

  handlePressEnter = event => {
    const { onPressEnter } = this.props;
    this.handleChange(event);
    if (typeof onPressEnter === "function") {
      onPressEnter(event);
    }
  };

  updateStateByAction = (prevValue, nextValue) => {
    const { actions, onActions } = this.props;
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    if (R.not(R.isEmpty(load))) {
      onActions(
        R.mergeDeepRight(load, {
          autoFillFields: { prevValue, nextValue }
        })
      );
    }
  };

  render() {
    const {
      name,
      value,
      type = "text",
      placeholder = "",
      disabled = false
    } = this.props;

    const InputComponent = type === "textarea" ? Input.TextArea : Input;
    return (
      <InputComponent
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onPressEnter={this.handlePressEnter}
        disabled={disabled}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  rules: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onPressEnter: PropTypes.func,
  disabled: PropTypes.bool,
  actions: PropTypes.object,
  onActions: PropTypes.func
};

export default InputField;
