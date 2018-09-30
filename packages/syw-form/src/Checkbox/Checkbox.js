import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@simpleryo/syw-uikit";
import R from "ramda";
import classNames from "classnames";
import { validateField } from "../validators";
import { getFieldOptions } from "../utils/fieldOptions";
import { FIELD_ACTION } from "../Field/type";

const DIVIDED_MARK = "||";

class CheckboxField extends Component {
  handleChange = checkedList => {
    let checkValues = [];
    let uncheckValues = [];
    const {
      name,
      rules,
      actions,
      divideMark = DIVIDED_MARK,
      onChange = R.F,
      onActions = R.F,
      ...rest
    } = this.props;
    const prevValue = rest.value;
    const prevCheckedList = rest.value ? R.split(divideMark, rest.value) : [];

    if (checkedList.length > prevCheckedList.length) {
      // find check items
      checkValues = R.difference(checkedList, prevCheckedList);
    } else {
      // find uncheck items
      uncheckValues = R.difference(prevCheckedList, checkedList);
    }

    const value =
      checkedList.length > 1
        ? R.join(divideMark, checkedList)
        : checkedList[0] || "";

    const error = validateField(rules, value);
    onChange(name, value, error);

    // Execute the actions if there's
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    const check = R.pathOr({}, [FIELD_ACTION.CHECK], actions);
    const uncheck = R.pathOr({}, [FIELD_ACTION.UNCHECK], actions);
    let actionsConfig;

    if (check && R.not(R.isEmpty(checkValues))) {
      actionsConfig = R.mergeDeepRight(load, check[checkValues[0]] || {});
    } else if (uncheck && R.not(R.isEmpty(uncheckValues))) {
      actionsConfig = R.mergeDeepRight(load, uncheck[uncheckValues[0]] || {});
    }

    if (R.not(R.isEmpty(actionsConfig))) {
      onActions(
        R.mergeDeepRight(actionsConfig, {
          autoFillFields: { prevValue, nextValue: value }
        })
      );
    }
  };

  render() {
    const {
      value,
      isVertical,
      options = [],
      optionGroupName,
      divideMark = DIVIDED_MARK
    } = this.props;

    let newOptions = [...options];
    if (R.isEmpty(options) && optionGroupName) {
      newOptions = R.compose(R.pathOr([], ["options"]), getFieldOptions)(
        optionGroupName
      );
    }
    return (
      <Checkbox.Group
        className={classNames({ "vertical-list": isVertical })}
        options={newOptions}
        onChange={this.handleChange}
        value={value ? R.split(divideMark, value) : []}
      />
    );
  }
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  rules: PropTypes.array,
  disabled: PropTypes.bool,
  divideMark: PropTypes.string,
  isVertical: PropTypes.bool,
  options: PropTypes.array,
  optionGroupName: PropTypes.string,
  actions: PropTypes.object,
  onChange: PropTypes.func,
  onActions: PropTypes.func
};

export default CheckboxField;
