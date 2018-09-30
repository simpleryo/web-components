import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Input,
  InputNumber,
  Checkbox,
  Radio,
  Select,
  Button
} from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false }
];
const optionsWithLongP = [
  {
    label:
      "种过建入委据并商济由，委使感基观按才解边东全，回体该果派伴所军层吩。 照至包合结间号北及完始，边出回识当详件业那。",
    value: "optionOne"
  },
  {
    label:
      "心什北期类将在再建是九后克动安，王着意见处且毛陕葡作中询认。 她联里道联想土什，好声段及适被众，文9露医节还。",
    value: "optionTow"
  },
  {
    label:
      "米日大么广里高快基马从装，极直进无么集才济发原往上目，时受5化不鹰体孝状应角。",
    value: "optionThree",
    disabled: false
  }
];
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      checkedList: ["Apple"],
      indeterminate: true,
      checkAll: false
    };
  }

  handleCheckboxGroupChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
  };

  handleCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  handleFileChange = event => {
    const name = event.target.value.split("\\").pop();
    this.setState({ file: name });
  };

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Form Elements</h4>
            <p className="full-width margin-bottom-20">
              标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。详细API请查询{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/form-cn/"
                target="_blank"
                rel="noreferrer noopener"
              >
                ant form APIs
              </a>
            </p>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Input</i>
              </h5>
              <p>
                详细API请查询{" "}
                <a
                  className="link link__highlight"
                  href="https://ant.design/components/input-cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ant Input APIs
                </a>
              </p>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Basic Input</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Input placeholder="请输入验证码..." />
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <Input disabled placeholder="disabled basic input" />
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Input placeholder="Please type something..." />
<Input placeholder="disabled basic input" disabled />`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Input
                      placeholder="请输入验证码..."
                      className="has-error"
                    />
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {'<Input placeholder="请输入验证码..." className="has-error"/>'}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Form group & two Sizes of Input</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">电子邮件</label>
                      <Input size="small" placeholder="小尺寸样式" />
                      <p className="small form-group__message">
                        请输入邮箱地址方便我们与你取得联系
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">电子邮件</label>
                      <Input placeholder="默认尺寸样式" />
                      <p className="small form-group__message">
                        请输入邮箱地址方便我们与你取得联系
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<div className="form-group">
  <label className="form-group__title">电子邮件</label>
  <Input size="small" placeholder="小尺寸样式" />
  <p className="small form-group__message">请输入邮箱地址方便我们与你取得联系</p>
</div>
<div className="form-group">
  <label className="form-group__title">电子邮件</label>
  <Input placeholder="默认尺寸样式" />
  <p className="small form-group__message">请输入邮箱地址方便我们与你取得联系</p>
</div>`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group has-error">
                      <label className="form-group__title">电子邮件</label>
                      <Input placeholder="默认尺寸样式" />
                      <p className="small form-group__message">
                        请输入邮箱地址方便我们与你取得联系
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<div className="form-group has-error">
  <label className="form-group__title">电子邮件</label>
  <Input size="small" placeholder="小尺寸样式" />
  <p className="small form-group__message">请输入邮箱地址方便我们与你取得联系</p>
</div>`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Warning style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group has-warning">
                      <label className="form-group__title">电子邮件</label>
                      <Input placeholder="默认尺寸样式" />
                      <p className="small form-group__message">
                        此处信息不能为空，请填写
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<div className="form-group has-warning">
  <label className="form-group__title">电子邮件</label>
  <Input placeholder="默认尺寸样式" />
  <p className="small form-group__message">此处信息不能为空，请填写</p>
</div>`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Input with Affix/ Suffix Icon</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">
                        Input with Affix Icon
                      </label>
                      <Input
                        prefix={<i className="icon-post" />}
                        placeholder="Please fill an email"
                      />
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">
                        Input with Suffix Icon
                      </label>
                      <Input
                        suffix={<i className="icon-calendar" />}
                        placeholder="Please fill a date"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Input prefix={<i className="icon-post" />} placeholder="Please fill an email" />
<Input suffix={<i className="icon-calendar" />} placeholder="Please fill a date" />
`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">
                        Input with Affix Icon
                      </label>
                      <Input
                        prefix={<i className="icon-post" />}
                        placeholder="Please fill an email"
                        className="has-error"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {
                  '<Input prefix={<i className="icon-post" />} placeholder="Please fill an email" className="has-error"/>'
                }
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Input with Affix/ Suffix Add-on</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Input
                      addonBefore="RMB"
                      addonAfter=".00"
                      placeholder="金额"
                    />
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <Input
                      addonAfter={<i className="icon-locator" />}
                      placeholder="your location"
                    />
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Input addonBefore="RMB" addonAfter=".00" placeholder="金额" />
<Input addonAfter={<i className="icon-locator" />} placeholder="your location" />
`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Input
                      addonBefore="RMB"
                      addonAfter=".00"
                      placeholder="金额"
                      className="has-error"
                    />
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {
                  '<Input addonBefore="RMB" addonAfter=".00" placeholder="金额" className="has-error" />'
                }
              </Snippet>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Input Groups</i>
              </h5>
              <p>
                <a
                  className="link link__highlight"
                  href="https://ant.design/components/input-cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  More Input APIs
                </a>
              </p>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <Input.Group size="Basic">
                    <div className="row">
                      <div className="col-xs-4">
                        <Input defaultValue="0571" />
                      </div>
                      <div className="col-xs-8">
                        <Input defaultValue="26888888" />
                      </div>
                    </div>
                  </Input.Group>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <Input.Group size="Basic">
                    <div className="row">
                      <div className="col-xs-4">
                        <Select placeholder="城市" style={{ width: "100%" }}>
                          <Select.Option value="上海">上海</Select.Option>
                          <Select.Option value="北京">北京</Select.Option>
                        </Select>
                      </div>
                      <div className="col-xs-8">
                        <Select
                          placeholder="选择地区"
                          style={{ width: "100%" }}
                        >
                          <Select.Option value="徐汇区">徐汇区</Select.Option>
                          <Select.Option value="静安区">静安区</Select.Option>
                        </Select>
                      </div>
                    </div>
                  </Input.Group>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label className="form-group__title">联系方式</label>
                    <Input.Group size="Basic">
                      <div className="row">
                        <div className="col-xs-4">
                          <Select placeholder="区号" style={{ width: "100%" }}>
                            <Select.Option value="021">021</Select.Option>
                            <Select.Option value="022">022</Select.Option>
                          </Select>
                        </div>
                        <div className="col-xs-8">
                          <Input placeholder="请输入号码" />
                        </div>
                      </div>
                    </Input.Group>
                    <p className="small form-group__message">
                      收取到的验证码30秒有效
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`<!-- Input Group contains Input -->
<Input.Group size="Basic">
  <div className="row">
    <div className="col-xs-4">
      <Input defaultValue="0571" />
    </div>
    <div className="col-xs-8">
      <Input defaultValue="26888888" />
    </div>
  </div>
</Input.Group>

<!-- Input Group contains Select -->
<Input.Group size="Basic">
  <div className="row">
    <div className="col-xs-4">
      <Select placeholder="Select a city" style={{ width: '100%' }}>
        <Select.Option value="上海">上海</Select.Option>
        <Select.Option value="北京">北京</Select.Option>
      </Select>
    </div>
    <div className="col-xs-8">
      <Select placeholder="Select a region" style={{ width: '100%' }}>
        <Select.Option value="徐汇区">徐汇区</Select.Option>
        <Select.Option value="静安区">静安区</Select.Option>
      </Select>
    </div>
  </div>
</Input.Group>

<!-- Input Group with label and message -->
<Input.Group size="Basic">
  <label className="form-group__title">联系方式</label>
  <div className="row">
    <div className="col-xs-4">
      <Select placeholder="区号" style={{ width: '100%' }}>
        <Select.Option value="021">021</Select.Option>
        <Select.Option value="022">022</Select.Option>
      </Select>
    </div>
    <div className="col-xs-8">
      <Input placeholder="请输入号码" />
    </div>
  </div>
  <p className="small form-group__message">收取到的验证码30秒有效</p>
</Input.Group>
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Input.Group size="Basic" className="has-error">
                      <label className="form-group__title">联系方式</label>
                      <div className="row">
                        <div className="col-xs-4">
                          <Select placeholder="区号" style={{ width: "100%" }}>
                            <Select.Option value="021">021</Select.Option>
                            <Select.Option value="022">022</Select.Option>
                          </Select>
                        </div>
                        <div className="col-xs-8">
                          <Input placeholder="请输入号码" />
                        </div>
                      </div>
                      <p className="small form-group__message">
                        收取到的验证码30秒有效
                      </p>
                    </Input.Group>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Input.Group size="Basic" className="has-error">
  ...
</Input.Group>`}
              </Snippet>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Textarea</i>
              </h5>
              <p>
                <a
                  className="link link__highlight"
                  href="https://ant.design/components/input-cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  More Input APIs
                </a>
              </p>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <Input.TextArea placeholder="Auto height" autosize />
                </div>
                <div className="col-xs-12 col-sm-4">
                  <Input.TextArea
                    placeholder="The height with minimum and maximum number of rows"
                    autosize={{ minRows: 2, maxRows: 6 }}
                  />
                </div>
                <div className="col-xs-12 col-sm-4">
                  <Input.TextArea rows={4} placeholder="Fixed height" />
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`<Input.TextArea placeholder="Auto height" autosize />
<Input.TextArea placeholder="The height with minimum and maximum number of rows" autosize={{ minRows: 2, maxRows: 6 }} />
<Input.TextArea rows={4} placeholder="Fixed height" />
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Input.TextArea
                      rows={4}
                      placeholder="Fixed height"
                      className="has-error"
                    />
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {
                  '<Input.TextArea rows={4} placeholder="Fixed height" className="has-error" />'
                }
              </Snippet>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Input Number</i>
              </h5>
              <p>
                <a
                  className="link link__highlight"
                  href="https://ant.design/components/input-number-cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  More Input APIs
                </a>
              </p>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label className="form-group__title">
                      Small Basic Input Number
                    </label>
                    <InputNumber
                      size="small"
                      min={1}
                      max={10}
                      defaultValue={3}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label className="form-group__title">
                      Normal Disabled Input Number
                    </label>
                    <InputNumber min={1} max={10} disabled defaultValue={3} />
                  </div>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`<InputNumber size="small" min={1} max={10} defaultValue={3} />
<InputNumber min={1} max={10} disabled defaultValue={3} />`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={3}
                      className="has-error"
                    />
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {
                  '<InputNumber min={1} max={10} defaultValue={3} className="has-error" />'
                }
              </Snippet>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Checkbox</i>
              </h5>
              <p>
                <a
                  className="link link__highlight"
                  href="https://ant.design/components/checkbox-cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  More Input APIs
                </a>
              </p>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label className="form-group__title">Basic Checkbox</label>
                    <Checkbox>Checkbox</Checkbox>
                    <Checkbox defaultChecked disabled>
                      disabled
                    </Checkbox>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label className="form-group__title">Check All</label>
                    <Checkbox
                      indeterminate={this.state.indeterminate}
                      onChange={this.handleCheckAllChange}
                      checked={this.state.checkAll}
                    >
                      Check all
                    </Checkbox>
                    <br />
                    <Checkbox.Group
                      options={plainOptions}
                      value={this.state.checkedList}
                      onChange={this.handleCheckboxGroupChange}
                    />
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="form-group">
                    <label className="form-group__title">Checkbox Group</label>
                    <Checkbox.Group
                      options={plainOptions}
                      defaultValue={["Apple"]}
                    />
                    <br />
                    <Checkbox.Group options={options} defaultValue={["Pear"]} />
                    <br />
                    <Checkbox.Group
                      options={optionsWithDisabled}
                      disabled
                      defaultValue={["Apple"]}
                    />
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="form-group">
                    <label className="form-group__title">
                      Checkbox Group - vertical style
                    </label>
                    <Checkbox.Group
                      options={optionsWithLongP}
                      className="vertical-list"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`<!-- Basic Checkbox -->
<Checkbox>Checkbox</Checkbox>
<Checkbox defaultChecked disabled />

<!-- Checkbox Group -->
<Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
<Checkbox.Group options={options} defaultValue={['Pear']} />
<Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} />

<!-- Checkbox Group - vertical list style-->
<Checkbox.Group options={optionsWithLongP} className="vertical-list"/>

<!-- Check All -->
<Checkbox indeterminate={this.state.indeterminate} onChange={this.handleCheckAllChange} checked={this.state.checkAll}>Check all</Checkbox>
<Checkbox.Group options={plainOptions} value={this.state.checkedList} onChange={this.handleCheckboxGroupChange} />
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Checkbox className="has-error">Checkbox</Checkbox>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group has-error">
                      <label className="form-group__title">电子邮件</label>
                      <Checkbox.Group
                        options={plainOptions}
                        defaultValue={["Apple"]}
                      />
                      <p className="small form-group__message">
                        此处信息不能为空，请填写
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Checkbox className="has-error" >Checkbox</Checkbox>
<Checkbox.Group options={plainOptions} defaultValue={['Apple']} className="has-error" />`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Warning style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group has-warning">
                      <label className="form-group__title">电子邮件</label>
                      <Checkbox>Checkbox</Checkbox>
                      <p className="small form-group__message">
                        此处信息不能为空，请填写
                      </p>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group has-warning">
                      <label className="form-group__title">电子邮件</label>
                      <Checkbox.Group
                        options={plainOptions}
                        defaultValue={["Apple"]}
                      />
                      <p className="small form-group__message">
                        此处信息不能为空，请填写
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Checkbox className="has-error" >Checkbox</Checkbox>
<Checkbox.Group options={plainOptions} defaultValue={['Apple']} className="has-error" />`}
              </Snippet>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Radio</i>
              </h5>
              <p>
                <a
                  className="link link__highlight"
                  href="https://ant.design/components/checkbox-cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  More Input APIs
                </a>
              </p>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p>Basic Radio</p>
                  <Radio>Radio</Radio>
                  <Radio defaultChecked disabled>
                    Disabled
                  </Radio>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <p>Radio Group - vertical style</p>
                  <Radio.Group
                    name="radiogroup"
                    defaultValue={1}
                    className="vertical-list"
                  >
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>
                      种过建入委据并商济由，委使感基观按才解边东全，回体该果派伴所军层吩。
                      照至包合结间号北及完始，边出回识当详件业那。
                    </Radio>
                  </Radio.Group>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <span>Default: </span>
                  <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                  </Radio.Group>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <span>Small: </span>
                  <br />
                  <Radio.Group defaultValue="a" size="small">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`<!-- Basic Radio -->
<Radio>Radio</Radio>
<Radio defaultChecked disabled>Disabled</Radio>

<!-- Radio Group vertical style -->
<Radio.Group name="radiogroup" defaultValue={1} className="vertical-list">
  <Radio value={1}>A</Radio>
  <Radio value={2}>B</Radio>
  <Radio value={3}>C</Radio>
  <Radio value={4}>D</Radio>
</Radio.Group>

<!-- Radio Button -->
<Radio.Group defaultValue="a" size="default">
  <Radio.Button value="a">Hangzhou</Radio.Button>
  <Radio.Button value="b">Shanghai</Radio.Button>
  <Radio.Button value="c">Beijing</Radio.Button>
</Radio.Group>
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Radio className="has-error">Radio</Radio>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <Radio.Group
                      name="radiogroup"
                      defaultValue={1}
                      className="has-error"
                    >
                      <Radio value={1}>A</Radio>
                      <Radio value={2}>B</Radio>
                    </Radio.Group>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<Checkbox className="has-error" >Checkbox</Checkbox>
<Checkbox.Group options={plainOptions} defaultValue={['Apple']} className="has-error" />`}
              </Snippet>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Verify SMS Code</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group-with-btn">
                    <label className="form-group__title">短信验证码</label>
                    <div className="input-group">
                      <Input placeholder="请输入验证码" />
                      <span className="input-group-btn">
                        <Button type="primary" size="small">
                          获取校验码
                        </Button>
                      </span>
                    </div>
                    <p className="small form-group__message">
                      收取到的验证码30秒有效
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <div className="form-group-with-btn">
                    <label className="form-group__title">按键无间隙例子</label>
                    <div className="input-group">
                      <Input placeholder="输入邮箱来获取最新资讯" />
                      <span className="input-group-btn input-group-btn--no-gap">
                        <Button type="primary" size="small">
                          订阅
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`<!-- 基本样式 -->
<div className="form-group-with-btn">
  <label className="form-group__title">短信验证码</label>
  <div className="input-group">
    <Input placeholder="请输入验证码" />
    <span className="input-group-btn">
      <Button type="primary" size="small">获取校验码</Button>
    </span>
  </div>
  <p className="small form-group__message">收取到的验证码30秒有效</p>
</div>

<!-- 按钮无间隙例子 -->
<div className="form-group-with-btn">
  <label className="form-group__title">按钮无间隙例子</label>
  <div className="input-group">
    <Input placeholder="输入邮箱来获取最新资讯" />
    <span className="input-group-btn input-group-btn--no-gap">
      <Button type="primary" size="small">提交</Button>
    </span>
  </div>
</div>
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group-with-btn has-error">
                      <label className="form-group__title">短信验证码</label>
                      <div className="input-group">
                        <Input placeholder="请输入验证码" />
                        <span className="input-group-btn">
                          <Button type="primary" size="small">
                            获取校验码
                          </Button>
                        </span>
                      </div>
                      <p className="small form-group__message">
                        收取到的验证码30秒有效
                      </p>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group-with-btn has-error">
                      <label className="form-group__title">
                        按键无间隙例子
                      </label>
                      <div className="input-group">
                        <Input placeholder="输入邮箱来获取最新资讯" />
                        <span className="input-group-btn input-group-btn--no-gap">
                          <Button type="primary" size="small">
                            订阅
                          </Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`<div className="form-group-with-btn has-error">
......
</div>`}
              </Snippet>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Form.propTypes = {
  layout: PropTypes.any
};
