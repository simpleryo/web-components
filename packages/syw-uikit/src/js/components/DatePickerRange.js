import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "@simpleryo/react-datepicker";
import { isMobile } from "@simpleryo/syw-utils";
import moment from "moment";
import "moment/locale/zh-cn";
import { Input } from "../syw-uikit";

export default class DatePickerRange extends Component {
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

  handleInputStartDateChange = event => {
    const {
      target: { value }
    } = event;
    const dateFormat =
      this.props.startSettings.dateFormat || this.defaultSettings.dateFormat;
    const formattedValue = value ? moment(value, dateFormat) : null;
    this.props.startSettings.onChange(formattedValue);
  };

  handleInputEndDateChange = event => {
    const {
      target: { value }
    } = event;
    const dateFormat =
      this.props.endSettings.dateFormat || this.defaultSettings.dateFormat;
    const formattedValue = value ? moment(value, dateFormat) : null;
    this.props.endSettings.onChange(formattedValue);
  };

  render() {
    const {
      startSettings: { label: startLabel, startDate, ...restStartSettings },
      endSettings: { label: endLabel, endDate, ...restEndSettings }
    } = this.props;
    const startProps = {
      ...this.defaultSettings,
      ...restStartSettings,
      selectsStart: true,
      selected: startDate,
      onSelect: () => {
        if (this.dateRangeEndCom) {
          // setTimeout here it need to wait for the minDate is set in endProps
          setTimeout(() => {
            // Currently no API provided for opening calendar, see
            // https://github.com/Hacker0x01/react-datepicker/issues/283
            this.dateRangeEndCom.setOpen(true);
          }, 0);
        }
      },
      startDate,
      endDate
    };
    const endProps = {
      ...this.defaultSettings,
      ...restEndSettings,
      ref: c => {
        this.dateRangeEndCom = c;
      },
      minDate: startDate,
      selectsEnd: true,
      selected: endDate,
      startDate,
      endDate
    };

    if (isMobile()) {
      return (
        <div className="row date-range">
          <div className="col-xs-12 col-sm-6 date-range__start">
            {startLabel && (
              <label className="form-group__title">{startLabel}</label>
            )}
            <input
              type="date"
              id="date-range-start-date"
              className="ant-input"
              value={
                startDate ? startDate.format(startProps.dateFormat) : undefined
              }
              min={
                startProps.minDate
                  ? startProps.minDate.format(startProps.dateFormat)
                  : null
              }
              max={
                startProps.maxDate
                  ? startProps.maxDate.format(startProps.dateFormat)
                  : null
              }
              onChange={this.handleInputStartDateChange}
            />
          </div>
          <div className="col-xs-12 col-sm-6 date-range__end">
            {endLabel && (
              <label className="form-group__title">{endLabel}</label>
            )}
            <input
              type="date"
              id="date-range-end-date"
              className="ant-input"
              value={endDate ? endDate.format(endProps.dateFormat) : undefined}
              max={
                endProps.maxDate
                  ? endProps.maxDate.format(endProps.dateFormat)
                  : null
              }
              onChange={this.handleInputEndDateChange}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="row date-range">
        <div className="col-xs-12 col-sm-6 date-range__start">
          <label className="form-group__title">{startLabel}</label>
          <ReactDatePicker {...startProps} />
        </div>
        <div className="col-xs-12 col-sm-6 date-range__end">
          <label className="form-group__title">{endLabel}</label>
          <ReactDatePicker {...endProps} />
        </div>
      </div>
    );
  }
}

DatePickerRange.propTypes = {
  startSettings: PropTypes.object,
  endSettings: PropTypes.object
};
