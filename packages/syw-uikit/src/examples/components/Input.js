import React, { Fragment } from "react";
import { Input, InputNumber, Select, Button } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const InputGroup = Input.Group;
const { Option } = Select;

const Inputs = () => (
  <Fragment>
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
              ant Input
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
                <Input disabled value="something is disabled" />
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Input } from "@simpleryo/syw-uikit";
<Input placeholder="Please type something..." />
<Input placeholder="disabled basic input" disabled />`}
          </Snippet>
        </div>

        <div className="bs-docs-section">
          <h6 className="page-header">Error style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Input placeholder="请输入验证码..." className="has-error" />
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Input } from "@simpleryo/syw-uikit";
<Input placeholder="请输入验证码..." className="has-error"/>`}
          </Snippet>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Form group</i>
          </h5>
        </div>

        <div className="bs-docs-section">
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">电子邮件</label>
                  <Input placeholder="默认尺寸样式" />
                  <p className="small form-group__message">
                    请输入邮箱地址方便我们与你取得联系
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">电子邮件</label>
                  <Input placeholder="默认尺寸样式" disabled />
                  <p className="small form-group__message">
                    请输入邮箱地址方便我们与你取得联系
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Input } from "@simpleryo/syw-uikit";
<div className="form-group">
  <label className="form-group__title">电子邮件</label>
  <Input size="small" placeholder="小尺寸样式" />
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
            {`import { Input } from "@simpleryo/syw-uikit";
<div className="form-group has-error">
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
            {`import { Input } from "@simpleryo/syw-uikit";
<div className="form-group has-warning">
  <label className="form-group__title">电子邮件</label>
  <Input placeholder="默认尺寸样式" />
  <p className="small form-group__message">此处信息不能为空，请填写</p>
</div>`}
          </Snippet>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Input with Affix/ Suffix Icon</i>
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

        <div className="bs-docs-section">
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">
                    Input with Affix Icon
                  </label>
                  <Input
                    prefix={<i className="icon-mobile" />}
                    placeholder="Please fill a number"
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
            {`import { Input } from "@simpleryo/syw-uikit";
<Input prefix={<i className="icon-mobile" />} placeholder="Please fill an email" />
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
                    prefix={<i className="icon-mobile" />}
                    placeholder="Please fill a number"
                    className="has-error"
                  />
                </div>
              </div>
            </div>
          </div>
          <Snippet language="html">
            {`import { Input } from "@simpleryo/syw-uikit";
<Input prefix={<i className="icon-post" />} placeholder="Please fill an email" className="has-error"/>`}
          </Snippet>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Input with Affix/ Suffix Add-on</i>
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
        <div className="bs-docs-section">
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Input addonBefore="RMB" addonAfter=".00" placeholder="金额" />
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
            {`import { Input } from "@simpleryo/syw-uikit";
<Input addonBefore="RMB" addonAfter=".00" placeholder="金额" />
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
            {`import { Input } from "@simpleryo/syw-uikit";
<Input addonBefore="RMB" addonAfter=".00" placeholder="金额" className="has-error" />`}
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
              <div className="row input-group input-input">
                <div className="col-xs-4">
                  <Input defaultValue="0571" />
                </div>
                <div className="col-xs-8">
                  <Input defaultValue="26888888" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="row input-group select-select">
                <div className="col-xs-4">
                  <Select placeholder="城市" style={{ width: "100%" }}>
                    <Select.Option value="上海">上海</Select.Option>
                    <Select.Option value="北京">北京</Select.Option>
                  </Select>
                </div>
                <div className="col-xs-8">
                  <Select placeholder="选择地区" style={{ width: "100%" }}>
                    <Select.Option value="徐汇区">徐汇区</Select.Option>
                    <Select.Option value="静安区">静安区</Select.Option>
                  </Select>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="form-group">
                <label className="form-group__title">联系方式</label>
                <div className="row input-group select-input">
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
              </div>
            </div>

            <div className="col-xs-12 col-sm-12">
              <div className="form-group">
                <label className="form-group__title">并联方式</label>
                <InputGroup compact>
                  <Select style={{ width: "33.333%" }}>
                    <Option value="Option1-1">Option1-1</Option>
                    <Option value="Option1-2">Option1-2</Option>
                  </Select>
                  <Select style={{ width: "33.333%" }}>
                    <Option value="Option2-1">Option2-1</Option>
                    <Option value="Option2-2">Option2-2</Option>
                  </Select>
                  <Select style={{ width: "33.333%" }}>
                    <Option value="Option3-1">Option3-1</Option>
                    <Option value="Option23-2">Option3-2</Option>
                  </Select>
                </InputGroup>
                <p className="small form-group__message">
                  收取到的验证码30秒有效
                </p>
              </div>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Input, Select } from "@simpleryo/syw-uikit";
<div className="row input-group input-input">
  <div className="col-xs-4">
    <Input defaultValue="0571" />
  </div>
  <div className="col-xs-8">
    <Input defaultValue="26888888" />
  </div>
</div>

<!-- Input Group contains Select + Select -->
<div className="row input-group select-select">
  <div className="col-xs-4">
    <Select placeholder="城市" style={{ width: '100%' }}>
      <Select.Option value="上海">上海</Select.Option>
      <Select.Option value="北京">北京</Select.Option>
    </Select>
  </div>
  <div className="col-xs-8">
    <Select placeholder="选择地区" style={{ width: '100%' }}>
      <Select.Option value="徐汇区">徐汇区</Select.Option>
      <Select.Option value="静安区">静安区</Select.Option>
    </Select>
  </div>
</div>

<!-- Input Group contains Select + Input with label and message -->
<div className="form-group">
  <label className="form-group__title">联系方式</label>
  <div className="row input-group select-input">
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
</div>
`}
        </Snippet>

        <div className="bs-docs-section">
          <h6 className="page-header">Error style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group has-error">
                  <label className="form-group__title">联系方式</label>
                  <div className="row input-group select-input">
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
                </div>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Input, Select } from "@simpleryo/syw-uikit";
<div className="form-group has-error">
  <label className="form-group__title">联系方式</label>
  <div className="row input-group select-input">
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
</div>`}
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
                <InputNumber size="small" min={1} max={10} defaultValue={3} />
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
          {`import { InputNumber } from "@simpleryo/syw-uikit";
<InputNumber size="small" min={1} max={10} defaultValue={3} />
<InputNumber min={1} max={10} disabled defaultValue={3} />`}
        </Snippet>

        <div className="bs-docs-section">
          <h6 className="page-header">Error style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group has-error">
                  <label className="form-group__title">
                    Input Number has Error in form-group
                  </label>
                  <InputNumber min={1} max={10} defaultValue={3} />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <label className="form-group__title">
                  Individual Input Number has Error
                </label>
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
            {`import { InputNumber } from "@simpleryo/syw-uikit";
<div className="form-group has-error">
  <label className="form-group__title">
    Input Number has Error in form-group
  </label>
  <InputNumber min={1} max={10} defaultValue={3} />
</div>

<InputNumber min={1} max={10} defaultValue={3} className="has-error" />`}
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
          {`import { Input } from "@simpleryo/syw-uikit";
<Input.TextArea placeholder="Auto height" autosize />
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
            {`import { Input } from "@simpleryo/syw-uikit";
<Input.TextArea rows={4} placeholder="Fixed height" className="has-error" />`}
          </Snippet>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Input with cta button</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="form-group-with-btn">
                <label className="form-group__title">短信验证码</label>
                <div className="input-cta">
                  <Input placeholder="请输入验证码" />
                  <span className="input-cta-btn">
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
                <div className="input-cta">
                  <Input placeholder="输入邮箱来获取最新资讯" />
                  <span className="input-cta-btn input-cta-btn--no-gap">
                    <Button type="primary" size="small">
                      订阅
                    </Button>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="form-group-with-btn">
                <label className="form-group__title">并联无间隙例子</label>
                <div className="input-cta">
                  <InputGroup compact>
                    <Select style={{ width: "33.3339%" }}>
                      <Option value="Option1-1">Option1-1</Option>
                      <Option value="Option1-2">Option1-2</Option>
                    </Select>
                    <Select style={{ width: "33.3339%" }}>
                      <Option value="Option2-1">Option2-1</Option>
                      <Option value="Option2-2">Option2-2</Option>
                    </Select>
                    <Select style={{ width: "33.3339%" }}>
                      <Option value="Option3-1">Option3-1</Option>
                      <Option value="Option23-2">Option3-2</Option>
                    </Select>
                  </InputGroup>
                  <span className="input-cta-btn input-cta-btn--no-gap">
                    <Button type="primary" size="small">
                      查看
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { Input, Button } from "@simpleryo/syw-uikit";
<!-- 基本样式 -->
<div className="form-group-with-btn">
  <label className="form-group__title">短信验证码</label>
  <div className="input-cta">
    <Input placeholder="请输入验证码" />
    <span className="input-cta-btn">
      <Button type="primary" size="small">获取校验码</Button>
    </span>
  </div>
  <p className="small form-group__message">收取到的验证码30秒有效</p>
</div>

<!-- 按钮无间隙例子 -->
<div className="form-group-with-btn">
  <label className="form-group__title">按钮无间隙例子</label>
  <div className="input-cta">
    <Input placeholder="输入邮箱来获取最新资讯" />
    <span className="input-cta-btn input-cta-btn--no-gap">
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
                  <div className="input-cta">
                    <Input placeholder="请输入验证码" />
                    <span className="input-cta-btn">
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
                  <label className="form-group__title">按键无间隙例子</label>
                  <div className="input-cta">
                    <Input placeholder="输入邮箱来获取最新资讯" />
                    <span className="input-cta-btn input-cta-btn--no-gap">
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
            {`import { Input, Button } from "@simpleryo/syw-uikit";
<div className="form-group-with-btn has-error">
  <label className="form-group__title">短信验证码</label>
  <div className="input-cta">
    <Input placeholder="请输入验证码" />
    <span className="input-cta-btn">
      <Button type="primary" size="small">
        获取校验码
      </Button>
    </span>
  </div>
  <p className="small form-group__message">
    收取到的验证码30秒有效
  </p>
</div>`}
          </Snippet>
        </div>

        <div className="bs-docs-section">
          <h6 className="page-header">Large size style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Select
                  size="large"
                  placeholder="目的地"
                  dropdownClassName="ant-select-dropdown--large"
                >
                  <Option value="Option1-1">中国</Option>
                  <Option value="Option1-2">新西兰</Option>
                </Select>
              </div>

              <div className="col-xs-12 margin-top-20">
                <div className="form-group-with-btn visa-filter">
                  <div className="input-cta">
                    <InputGroup compact>
                      <Select
                        size="large"
                        placeholder="选择国家签证"
                        style={{ width: "33.3339%" }}
                        dropdownClassName="ant-select-dropdown--large"
                      >
                        <Option value="Option1-1">中国签证</Option>
                        <Option value="Option1-2">新西兰签证</Option>
                      </Select>
                      <Select
                        size="large"
                        placeholder="所在地"
                        style={{ width: "33.3339%" }}
                        dropdownClassName="ant-select-dropdown--large"
                      >
                        <Option value="Option2-1">新西兰</Option>
                        <Option value="Option2-2">新西兰境外</Option>
                      </Select>
                      <Select
                        size="large"
                        placeholder="签证类型"
                        style={{ width: "33.3339%" }}
                        dropdownClassName="ant-select-dropdown--large"
                      >
                        <Option value="Option3-1">中国公民旅游签证</Option>
                        <Option value="Option3-2">中国公民探亲签证</Option>
                        <Option value="Option3-3">中国公民游学签证</Option>
                      </Select>
                    </InputGroup>
                    <span className="input-cta-btn input-cta-btn--no-gap">
                      <Button type="primary" size="small">
                        查看
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`<Select
  size="large"
  placeholder="目的地"
  dropdownClassName="ant-select-dropdown--large"
>
  <Option value="Option1-1">中国</Option>
  <Option value="Option1-2">新西兰</Option>
</Select>

<!--联排样式-->
<div className="form-group-with-btn visa-filter">
  <div className="input-cta">
    <InputGroup compact>
      <Select
        size="large"
        placeholder="选择国家签证"
        style={{ width: "33.3339%" }}
        dropdownClassName="ant-select-dropdown--large"
      >
        <Option value="Option1-1">中国签证</Option>
        <Option value="Option1-2">新西兰签证</Option>
      </Select>
      <Select
        size="large"
        placeholder="所在地"
        style={{ width: "33.3339%" }}
        dropdownClassName="ant-select-dropdown--large"
      >
        <Option value="Option2-1">新西兰</Option>
        <Option value="Option2-2">新西兰境外</Option>
      </Select>
      <Select
        size="large"
        placeholder="签证类型"
        style={{ width: "33.3339%" }}
        dropdownClassName="ant-select-dropdown--large"
      >
        <Option value="Option3-1">中国公民旅游签证</Option>
        <Option value="Option3-2">中国公民探亲签证</Option>
        <Option value="Option3-3">中国公民游学签证</Option>
      </Select>
    </InputGroup>
    <span className="input-cta-btn input-cta-btn--no-gap">
      <Button type="primary" size="small">
        查看
      </Button>
    </span>
  </div>
</div>
`}
          </Snippet>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Inputs;
