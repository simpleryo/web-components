import React, { Component } from "react";
import { Checkbox } from "../../js/syw-uikit";
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
            <h4 className="margin-bottom-20">Checkbox</h4>
            <p className="full-width margin-bottom-20">
              详细API请查询{" "}
              <a
                className="link link__highlight"
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
                      className="check-all"
                      indeterminate={this.state.indeterminate}
                      onChange={this.handleCheckAllChange}
                      checked={this.state.checkAll}
                    >
                      Check all
                    </Checkbox>
                    <Checkbox.Group
                      options={plainOptions}
                      value={this.state.checkedList}
                      onChange={this.handleCheckboxGroupChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`import { Checkbox } from "@simpleryo/syw-uikit";
<!-- Basic Checkbox -->
<Checkbox>Checkbox</Checkbox>

<!-- Disabled Checkbox -->
<Checkbox defaultChecked disabled>disabled</Checkbox>

<!-- Check All -->
<div className="form-group">
  <label className="form-group__title">Check All</label>
  <Checkbox
    className="check-all"
    indeterminate={this.state.indeterminate}
    onChange={this.handleCheckAllChange}
    checked={this.state.checkAll}
  >
    Check all
  </Checkbox>
  <Checkbox.Group options={plainOptions} value={this.state.checkedList} onChange={this.handleCheckboxGroupChange} />
</div>
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Checkbox Group</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">
                        Checkbox Group
                      </label>
                      <Checkbox.Group
                        options={plainOptions}
                        defaultValue={["Apple"]}
                      />
                      <br />
                      <Checkbox.Group
                        options={options}
                        defaultValue={["Pear"]}
                      />
                      <br />
                      <Checkbox.Group
                        options={optionsWithDisabled}
                        disabled
                        defaultValue={["Apple"]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`import { Checkbox } from "@simpleryo/syw-uikit";
<!-- Checkbox Group -->
<Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
<Checkbox.Group options={options} defaultValue={['Pear']} />
<Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} />`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Checkbox Group</h6>
              <div className="bs-example">
                <div className="row">
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
                {`import { Checkbox } from "@simpleryo/syw-uikit";
<!-- Checkbox Group - vertical list style-->
<div className="form-group">
  <label className="form-group__title">Checkbox Group - vertical style</label>
  <Checkbox.Group options={optionsWithLongP} className="vertical-list"/>
</div>`}
              </Snippet>
            </div>

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
                        此处请勾选正确信息
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`import { Checkbox } from "@simpleryo/syw-uikit";
<Checkbox className="has-error" >Checkbox</Checkbox>

<!-- Group error style -->
<div className="form-group has-error">
  <label className="form-group__title">电子邮件</label>
  <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
  <p className="small form-group__message">此处请勾选正确信息</p>
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
                {`import { Checkbox } from "@simpleryo/syw-uikit";
<div className="form-group has-warning">
  <label className="form-group__title">电子邮件</label>
  <Checkbox>Checkbox</Checkbox>
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
                      <Checkbox.Group
                        options={plainOptions}
                        defaultValue={["Apple"]}
                      />
                      <p className="small form-group__message">
                        广张断快与制山飞支形，分织还因界具建边式立。
                      </p>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <label className="form-group__title">纵向样式</label>
                      <Checkbox.Group
                        options={plainOptions}
                        className="vertical-list"
                      />
                      <p className="small form-group__message">
                        广张断快与制山飞支形，分织还因界具建边式立。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Snippet language="html">
                {`import { Checkbox } from "@simpleryo/syw-uikit";
<!-- 横向样式 -->
<div className="form-group">
  <label className="form-group__title">横向样式</label>
  <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
  <p className="small form-group__message">广张断快与制山飞支形，分织还因界具建边式立。</p>
</div>

<!-- 纵向样式 -->
<div className="form-group">
  <label className="form-group__title">纵向样式</label>
  <Checkbox.Group options={plainOptions} className="vertical-list"/>
  <p className="small form-group__message">广张断快与制山飞支形，分织还因界具建边式立。</p>
</div>
`}
              </Snippet>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
