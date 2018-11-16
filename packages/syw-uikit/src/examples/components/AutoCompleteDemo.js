import React, { Component } from "react";
import { map } from "ramda";
import { Snippet } from "./Snippet";
import { AutoComplete, Input } from "../../js/syw-uikit";

export default class AutoCompleteDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      dataSource: []
    };
  }
  handleSearch = value => {
    let result;
    if (!value || value.indexOf("@") >= 0) {
      result = [];
    } else {
      result = ["gmail.com", "163.com", "qq.com"].map(
        domain => `${value}@${domain}`
      );
    }
    this.setState({ result });
  };

  handleAnotherSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value]
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h4 className="margin-bottom-20">AutoComplete自动完成</h4>
          <p>输入框自动完成功能。</p>
          <h5>何时使用</h5>
          <ul>
            <li>需要自动完成时。</li>
          </ul>
          <p className="full-width margin-bottom-20">
            详细API请查询{" "}
            <a
              className="link link__highlight"
              rel="noopener noreferrer"
              href="https://ant.design/components/auto-complete-cn/"
              target="_blank"
            >
              Ant AutoComplete
            </a>
          </p>
          <hr />
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Basic AutoComplete</i>
            </h5>
          </div>

          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12">
                <AutoComplete
                  dataSource={this.state.dataSource}
                  onSearch={this.handleSearch}
                >
                  {map(
                    email => (
                      <AutoComplete.Option key={email}>
                        {email}
                      </AutoComplete.Option>
                    ),
                    this.state.result
                  )}
                </AutoComplete>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { AutoComplete } from "@simpleryo/syw-uikit";
<AutoComplete
  onSearch={this.handleSearch}
  placeholder="input here"
>
  {map(
    email => (
      <AutoComplete.Option key={email}>
        {email}
      </AutoComplete.Option>
    ),
    this.state.result
  )}
</AutoComplete>
`}
          </Snippet>
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>AutoComplete with Search Icon</i>
            </h5>
          </div>

          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12">
                <AutoComplete
                  dataSource={this.state.dataSource}
                  onSearch={this.handleAnotherSearch}
                  placeholder="please fill something here"
                >
                  <Input suffix={<i className="icon-search" />} />
                </AutoComplete>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { AutoComplete, Input } from "@simpleryo/syw-uikit";
<AutoComplete
  dataSource={this.state.dataSource}
  onSearch={this.handleAnotherSearch}
  placeholder="please fill something here"
>
  <Input suffix={<i className="icon-search" />} />
</AutoComplete>
`}
          </Snippet>
        </div>
      </div>
    );
  }
}
