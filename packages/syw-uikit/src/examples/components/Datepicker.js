import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Snippet } from "./Snippet";
import { DatePicker, DatePickerRange } from "../../js/syw-uikit";

export default class DatepickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      startDate: moment(),
      endDate: moment().add(3, "days")
    };
  }
  handleChange = date => {
    this.setState({
      date
    });
  };
  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };
  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">DatePicker 日期选择框</h4>
            <p>
              DatePicker from{" "}
              <a
                className="link link__highlight"
                href="https://reactdatepicker.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                react-datepicker
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12" id="datepicker">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Date Picker</i>
              </h5>
              <p>demo format: DD/MM/YYYY</p>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
                    placeholderText="出行时间"
                  />
                </div>
              </div>
            </div>

            <Snippet language="javascript">
              {`import { DatePicker } from '@simpleryo/syw-uikit';
<DatePicker
  selected={this.state.date}
  onChange={this.handleChange}
  placeholderText="出行时间"
/>
`}
            </Snippet>
          </div>

          <div className="col-xs-12" id="datepicker">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Date Range</i>
              </h5>
              <p>demo format: DD/MM/YYYY</p>
            </div>

            <div className="bs-example">
              <div className="form-group has-error">
                <DatePickerRange
                  startSettings={{
                    // minDate: moment(),
                    startDate: this.state.startDate,
                    onChange: this.handleChangeStart,
                    placeholderText: "请选择出行时间",
                    label: "出行时间:"
                  }}
                  endSettings={{
                    endDate: this.state.endDate,
                    onChange: this.handleChangeEnd,
                    placeholderText: "请选择回程时间",
                    label: "回程时间:"
                  }}
                />
                <p className="small form-group__message">this is an error</p>
              </div>
            </div>

            <Snippet language="javascript">
              {`import { DatePicker } from '@simpleryo/syw-uikit';
<DatePicker
  type="dateRange"
  startSettings={{
    startDate: this.state.startDate,
    onChange: this.handleChangeStart,
    placeholderText: "请选择出行时间",
    label: "出行时间:"
  }}
  endSettings={{
    endDate: this.state.endDate,
    onChange: this.handleChangeEnd,
    placeholderText: "请选择回程时间",
    label: "回程时间:"
  }}
/>
`}
            </Snippet>
          </div>
        </div>
      </Layout>
    );
  }
}

DatepickerDemo.propTypes = {
  layout: PropTypes.any
};
