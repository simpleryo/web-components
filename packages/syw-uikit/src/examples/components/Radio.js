import React, { Fragment } from "react";
import { Radio } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const Radios = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Radio button</h4>
        <p className="full-width margin-bottom-20">
          详细API请查询{" "}
          <a
            className="link link__highlight"
            rel="noopener noreferrer"
            href="https://ant.design/components/checkbox-cn/"
            target="_blank"
          >
            More Input APIs
          </a>
        </p>
        <hr />
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="form-group">
                <label className="form-group__title">Basic style</label>
                <Radio>Radio</Radio>
                <Radio defaultChecked disabled>
                  Disabled
                </Radio>
              </div>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Radio } from "@simpleryo/syw-uikit";
<!-- Basic Radio -->
<Radio>Radio</Radio>
<Radio defaultChecked disabled>Disabled</Radio>
`}
        </Snippet>

        <div className="bs-docs-section">
          <h6 className="page-header">Button style</h6>

          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">Small</label>
                  <Radio.Group defaultValue="a" size="small">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">Default</label>
                  <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Radio } from "@simpleryo/syw-uikit";
<!-- Radio Button -->
<Radio.Group defaultValue="a" size="default">
  <Radio.Button value="a">Hangzhou</Radio.Button>
  <Radio.Button value="b">Shanghai</Radio.Button>
  <Radio.Button value="c">Beijing</Radio.Button>
</Radio.Group>
`}
          </Snippet>
        </div>

        <div className="bs-docs-section">
          <h6 className="page-header">Radio Group - vertical style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
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
            </div>
          </div>
          <Snippet language="html">
            {`import { Radio } from "@simpleryo/syw-uikit";
<!-- Radio Group vertical style -->
<Radio.Group name="radiogroup" defaultValue={1} className="vertical-list">
  <Radio value={1}>A</Radio>
  <Radio value={2}>B</Radio>
  <Radio value={3}>C</Radio>
  <Radio value={4}>D</Radio>
</Radio.Group>
`}
          </Snippet>
        </div>

        <div className="bs-docs-section">
          <h6 className="page-header">Error style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Radio className="has-error">Radio</Radio>
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="form-group has-error">
                  <label className="form-group__title">电子邮件</label>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                  </Radio.Group>
                  <p className="small form-group__message">
                    此处信息不能为空，请填写
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Radio } from "@simpleryo/syw-uikit";
<div className="form-group has-error">
  <label className="form-group__title">请选择</label>
  <Radio.Group name="radiogroup">
    ...
  </Radio.Group>
  <p className="small form-group__message">此处信息不能为空，请填写</p>
</div>
`}
          </Snippet>
        </div>

        <div className="bs-docs-section">
          <h6 className="page-header">Warning style</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group has-warning">
                  <label className="form-group__title">请选择</label>
                  <Radio value={1}>A</Radio>
                  <p className="small form-group__message">
                    此处信息不能为空，请填写
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group has-warning">
                  <label className="form-group__title">请选择</label>
                  <Radio.Group name="radiogroup">
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                  </Radio.Group>
                  <p className="small form-group__message">
                    此处信息不能为空，请填写
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Snippet language="html">
            {`import { Radio } from "@simpleryo/syw-uikit";
<div className="form-group has-warning">
  <label className="form-group__title">请选择</label>
  <Radio.Group name="radiogroup">
    ...
  </Radio.Group>
  <p className="small form-group__message">此处信息不能为空，请填写</p>
</div>
`}
          </Snippet>
        </div>

        <div className="bs-docs-section">
          <h6 className="page-header">Working with form group</h6>
          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">横向样式</label>
                  <Radio.Group name="radiogroup">
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>Bdfg</Radio>
                    <Radio value={3}>Casd ds asdfff</Radio>
                    <Radio value={4}>Dd</Radio>
                    <Radio value={5}>Ehgj</Radio>
                    <Radio value={6}>Fff sesdf</Radio>
                  </Radio.Group>
                  <p className="small form-group__message">
                    广张断快与制山飞支形，分织还因界具建边式立。
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label className="form-group__title">纵向样式</label>
                  <Radio.Group
                    name="radiogroup"
                    defaultValue={1}
                    className="vertical-list"
                  >
                    <Radio value={1}>回体该果派伴所军层吩。</Radio>
                    <Radio value={2}>
                      照至包合结间号北及完始，边出回识当详件业那。
                    </Radio>
                    <Radio value={3}>种过建入委据并商济由。</Radio>
                  </Radio.Group>
                  <p className="small form-group__message">
                    广张断快与制山飞支形，分织还因界具建边式立。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Snippet language="html">
            {`import { Radio } from "@simpleryo/syw-uikit";
<!-- 横向样式 -->
<div className="form-group">
  <label className="form-group__title">横向样式</label>
  <Radio.Group name="radiogroup">
    ...
  </Radio.Group>
  <p className="small form-group__message">广张断快与制山飞支形，分织还因界具建边式立。</p>
</div>

<!-- 纵向样式 -->
<div className="form-group">
  <label className="form-group__title">横向样式</label>
  <Radio.Group name="radiogroup" className="vertical-list">
    ...
  </Radio.Group>
  <p className="small form-group__message">广张断快与制山飞支形，分织还因界具建边式立。</p>
</div>
`}
          </Snippet>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Radios;
