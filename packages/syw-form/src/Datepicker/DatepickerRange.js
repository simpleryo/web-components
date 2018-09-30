import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import moment from "moment";
import { DatePickerRange } from "@simpleryo/syw-uikit";
import { validateField } from "../validators";
import { RULE_DATE_RANGE } from "../validators/rules";
import { FIELD_ACTION } from "../Field/type";

const DEFAULT_SEPARATOR = "~";
const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

class DatepickerRangeField extends PureComponent {
  constructor(props) {
    super(props);
    const { value, separator = DEFAULT_SEPARATOR } = props;
    const [startDate, endDate] = value ? R.split(separator, value) : [];

    this.state = {
      startDate,
      endDate
    };
  }

  handleChangeStart = date => {
    const { dateFormat = DEFAULT_DATE_FORMAT } = this.props;
    const startDate = R.isNil(date) ? date : date.format(dateFormat);
    this.setState({ startDate });
    this.updateDateRange([startDate, this.state.endDate]);
  };

  handleChangeEnd = date => {
    const { dateFormat = DEFAULT_DATE_FORMAT } = this.props;
    const endDate = R.isNil(date) ? date : date.format(dateFormat);
    this.setState({ endDate });
    this.updateDateRange([this.state.startDate, endDate]);
  };

  updateDateRange = dateRangeList => {
    const {
      name,
      value: prevValue,
      separator = DEFAULT_SEPARATOR,
      rules,
      onChange = R.F
    } = this.props;
    const joinedVal = R.join(separator, dateRangeList);
    const value = joinedVal !== separator ? joinedVal : "";
    const error = R.reduce(
      (acc, cur) => acc || validateField(rules, cur),
      null,
      dateRangeList
    );

    onChange(name, value, error);
    this.updateStateByAction(prevValue, value);
  };

  updateStateByAction = (prevValue, nextValue) => {
    const { actions, onActions = R.F } = this.props;
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    if (R.not(R.isEmpty(load))) {
      onActions(
        R.mergeDeepRight(load, { autoFillFields: { prevValue, nextValue } })
      );
    }
  };

  convertStringToList = (str = "") => {
    const { separator = "~" } = this.props;
    return str.indexOf(separator) > -1
      ? R.split(separator, str)
      : [str, undefined];
  };

  render() {
    const {
      rules,
      label = "",
      placeholder = "",
      locale = "en",
      dateFormat = DEFAULT_DATE_FORMAT
    } = this.props;

    const dateRangeRule = R.find(rule => rule.name === RULE_DATE_RANGE, rules);
    const dateFrom = R.path(["conditions", "dateFrom"], dateRangeRule);
    const dateTo = R.path(["conditions", "dateTo"], dateRangeRule);

    const minDate = R.isNil(dateFrom) ? null : moment().add(dateFrom, "day");
    const maxDate = R.isNil(dateTo) ? null : moment().add(dateTo, "day");

    const placeholderList = this.convertStringToList(placeholder);
    const labelList = this.convertStringToList(label);
    const { startDate, endDate } = this.state;

    return (
      <DatePickerRange
        startSettings={{
          dateFormat,
          locale,
          startDate: startDate ? moment(startDate, dateFormat) : null,
          minDate,
          maxDate,
          onChange: this.handleChangeStart,
          placeholderText: placeholderList[0],
          label: labelList[0]
        }}
        endSettings={{
          dateFormat,
          locale,
          endDate: endDate ? moment(endDate, dateFormat) : null,
          maxDate,
          onChange: this.handleChangeEnd,
          placeholderText: placeholderList[1],
          label: labelList[1]
        }}
      />
    );
  }
}

DatepickerRangeField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  actions: PropTypes.object,
  locale: PropTypes.string,
  separator: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  onActions: PropTypes.func
};

export default DatepickerRangeField;
