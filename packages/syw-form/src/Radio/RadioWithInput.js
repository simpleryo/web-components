import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Radio, Input } from "@simpleryo/syw-uikit";
import R from "ramda";
import classNames from "classnames";
import { validateField } from "../validators";
import { getFieldOptions } from "../utils/fieldOptions";
import { FIELD_ACTION } from "../Field/type";

class RadioWithInputField extends PureComponent {
  handleChange = event => {
    const targetValue = R.path(["target", "value"], event);
    const targetName = R.path(["target", "name"], event);

    const { name, rules, onChange = R.F, ...rest } = this.props;
    const prevValue = rest.value;

    const error = validateField(rules, targetValue.trim());

    if (targetName === "otherInfo") {
      onChange(name, targetValue, error);
    } else {
      onChange(
        name,
        targetValue === "other" ? "" : targetValue,
        targetValue === "other" ? "" : error,
        { radioValue: targetValue }
      );
    }

    this.updateStateByAction(prevValue, targetValue);
  };

  updateStateByAction = (prevValue, nextValue) => {
    const { actions, onActions } = this.props;
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    const tick = R.pathOr({}, [FIELD_ACTION.TICK], actions);
    let actionConfig;

    if (R.isEmpty(load) && R.isEmpty(tick)) {
      return;
    }

    if (R.has(nextValue, tick)) {
      actionConfig = R.mergeDeepRight(load, tick[nextValue] || {});
    } else {
      actionConfig = R.mergeDeepRight(load, tick.other || {});
    }

    if (R.not(R.isEmpty(actionConfig))) {
      onActions(
        R.mergeDeepRight(actionConfig, {
          autoFillFields: { prevValue, nextValue }
        })
      );
    }
  };

  render() {
    let nextRadioValue;
    const {
      value,
      radioValue,
      options = [],
      optionGroupName,
      isVertical,
      otherOptionLabel = "Other",
      otherInputPlaceholder
    } = this.props;

    let newOptions = [...options];
    if (R.isEmpty(options) && optionGroupName) {
      newOptions = R.compose(R.pathOr([], ["options"]), getFieldOptions)(
        optionGroupName
      );
    }

    nextRadioValue = radioValue || value;
    if (nextRadioValue) {
      nextRadioValue = R.compose(
        R.pathOr("other", ["value"]),
        R.find(option => option.value === nextRadioValue)
      )(newOptions);
    }

    return (
      <Fragment>
        <Radio.Group
          className={classNames({ "vertical-list": isVertical })}
          onChange={this.handleChange}
          value={nextRadioValue}
        >
          {R.map(
            option => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ),
            newOptions
          )}
          <Radio value="other">{otherOptionLabel}</Radio>
        </Radio.Group>
        {nextRadioValue === "other" && (
          <div className="margin-top-20">
            <Input.TextArea
              rows={4}
              name="otherInfo"
              value={value}
              placeholder={otherInputPlaceholder}
              onChange={this.handleChange}
              onBlur={this.handleChange}
              onPressEnter={this.handleChange}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

RadioWithInputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  radioValue: PropTypes.string,
  rules: PropTypes.array,
  options: PropTypes.array,
  optionGroupName: PropTypes.string,
  otherOptionLabel: PropTypes.string,
  otherInputPlaceholder: PropTypes.string,
  isVertical: PropTypes.bool,
  actions: PropTypes.object,
  onChange: PropTypes.func,
  onActions: PropTypes.func
};

export default RadioWithInputField;
