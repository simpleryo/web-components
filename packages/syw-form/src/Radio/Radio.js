import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Radio } from "@simpleryo/syw-uikit";
import R from "ramda";
import classNames from "classnames";
import { validateField } from "../validators";
import { getFieldOptions } from "../utils/fieldOptions";
import { FIELD_ACTION } from "../Field/type";

class RadioField extends PureComponent {
  handleChange = event => {
    const { name, rules, onChange = R.F, ...rest } = this.props;
    const prevValue = rest.value;
    const value = R.path(["target", "value"], event);
    const error = validateField(rules, value);
    onChange(name, value, error);

    this.updateStateByAction(prevValue, value);
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
    const { value, options = [], optionGroupName, isVertical } = this.props;
    let newOptions = [...options];
    if (R.isEmpty(options) && optionGroupName) {
      newOptions = R.compose(R.pathOr([], ["options"]), getFieldOptions)(
        optionGroupName
      );
    }
    return (
      <Radio.Group
        className={classNames({ "vertical-list": isVertical })}
        onChange={this.handleChange}
        value={value}
      >
        {R.map(
          option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ),
          newOptions
        )}
      </Radio.Group>
    );
  }
}

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  options: PropTypes.array,
  optionGroupName: PropTypes.string,
  isVertical: PropTypes.bool,
  actions: PropTypes.object,
  onActions: PropTypes.func
};

export default RadioField;
