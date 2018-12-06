import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import moment from "moment";
import { DatePicker } from "@simpleryo/syw-uikit";
import { validateField } from "../validators";
import { RULE_DATE_RANGE } from "../validators/rules";
import { FIELD_ACTION } from "../Field/type";

class DatepickerField extends PureComponent {
  handleChange = date => {
    const { name, rules, dateFormat, onChange = R.F, ...rest } = this.props;
    const prevValue = rest.value;
    const value = R.isNil(date) ? date : date.format(dateFormat);
    const error = validateField(rules, value);
    onChange(name, value, error);

    this.updateStateByAction(prevValue, value);
  };

  updateStateByAction = (prevValue, nextValue) => {
    const { actions, onActions = R.F } = this.props;
    let actionsToTrigger = {};
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    const selectActions = R.pathOr([], [FIELD_ACTION.SELECT], actions);
    R.map(({ activeGroups, conditions, inactiveGroups }) => {
      const yearFrom = R.pathOr(-100, ["yearFrom"], conditions);
      const yearTo = R.pathOr(100, ["yearTo"], conditions);
      const isInScope = moment(nextValue).isBetween(
        moment().add(yearFrom, "year"),
        moment().add(yearTo, "year"),
        "day"
      );
      if (isInScope && activeGroups) {
        actionsToTrigger = R.mergeDeepRight(actionsToTrigger, {
          activeGroups
        });
      }
      if (isInScope && inactiveGroups) {
        actionsToTrigger = R.mergeDeepRight(actionsToTrigger, {
          inactiveGroups
        });
      }
    }, selectActions);

    if (R.not(R.isEmpty(load))) {
      actionsToTrigger = R.mergeDeepRight(
        actionsToTrigger,
        R.mergeDeepRight(load, { autoFillFields: { prevValue, nextValue } })
      );
    }
    if (R.not(R.isEmpty(actionsToTrigger))) {
      onActions(actionsToTrigger);
    }
  };

  render() {
    const {
      value,
      rules,
      placeholder = "",
      locale = "en",
      dateFormat = "YYYY-MM-DD"
    } = this.props;

    const dateRangeRule = R.find(rule => rule.name === RULE_DATE_RANGE, rules);
    const minDate = R.path(["conditions", "dateFrom"], dateRangeRule);
    const maxDate = R.path(["conditions", "dateTo"], dateRangeRule);

    return (
      <DatePicker
        dateFormat={dateFormat}
        locale={locale}
        onChange={this.handleChange}
        placeholderText={placeholder}
        selected={value ? moment(value, dateFormat) : null}
        minDate={R.isNil(minDate) ? null : moment().add(minDate, "day")}
        maxDate={R.isNil(maxDate) ? null : moment().add(maxDate, "day")}
      />
    );
  }
}

DatepickerField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  locale: PropTypes.string,
  dateFormat: PropTypes.string,
  actions: PropTypes.object,
  onChange: PropTypes.func,
  onActions: PropTypes.func
};

export default DatepickerField;
