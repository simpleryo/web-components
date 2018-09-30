import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "@simpleryo/react-datepicker";
import { isMobile } from "@simpleryo/syw-utils";
import moment from "moment";
import "moment/locale/zh-cn";
import { Input } from "../syw-uikit";

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.defaultSettings = {
      customInput: <Input />,
      dateFormat: "DD-MM-YYYY",
      isClearable: true,
      peekNextMonth: true,
      showMonthDropdown: true,
      showYearDropdown: true,
      readOnly: true,
      locale: "en"
    };
  }

  handleInputDateChange = event => {
    const {
      target: { value }
    } = event;
    const dateFormat = this.props.dateFormat || this.defaultSettings.dateFormat;
    const formattedValue = value ? moment(value, dateFormat) : undefined;
    this.props.onChange(formattedValue);
  };

  render() {
    const { selected, ...restProps } = this.props;
    const dateFormat = restProps.dateFormat || this.defaultSettings.dateFormat;
    const customProps = {
      ...this.defaultSettings,
      ...restProps,
      selected
    };

    if (isMobile()) {
      return (
        <input
          type="date"
          className="ant-input"
          value={selected ? selected.format(dateFormat) : undefined}
          onChange={this.handleInputDateChange}
          min={
            customProps.minDate ? customProps.minDate.format(dateFormat) : null
          }
          max={
            customProps.maxDate ? customProps.maxDate.format(dateFormat) : null
          }
        />
      );
    }

    return <ReactDatePicker {...customProps} />;
  }
}

DatePicker.propTypes = {
  dateFormat: PropTypes.string,
  locale: PropTypes.string,
  placeholderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  minDate: PropTypes.any,
  maxDate: PropTypes.any
};
