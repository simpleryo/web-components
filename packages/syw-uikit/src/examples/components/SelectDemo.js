import React, { Component } from "react";
import { Snippet } from "./Snippet";
import { Select } from "../../js/syw-uikit";
import { drop } from "ramda";

export default class SelectDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  handleChange = value => {
    this.setState({ tags: value.length > 1 ? drop(1, value) : value });
  };

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h3 className="margin-bottom-20">Select</h3>
            <p className="full-width margin-bottom-20">
              详细API请查询{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/select-cn/"
                target="_blank"
              >
                ant form APIs
              </a>
            </p>
            <hr />

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p>Basic Select with Default Value</p>
                  <Select defaultValue="Rose">
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="rose">Rose</Select.Option>
                    <Select.Option value="disabled" disabled>
                      Disabled
                    </Select.Option>
                  </Select>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Select } from "@simpleryo/syw-uikit";
<!-- Basic Select -->
<Select defaultValue="Rose">
  <Select.Option value="jack">Jack</Select.Option>
  <Select.Option value="rose">Rose</Select.Option>
  <Select.Option value="disabled" disabled>Disabled</Select.Option>
</Select>
`}
            </Snippet>

            <div className="bs-docs-section">
              <h6 className="page-header">Select with search function</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Select
                      className="uppercase"
                      showSearch
                      placeholder="Select a person"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="tom">Tom</Select.Option>
                    </Select>
                  </div>
                </div>
              </div>
              <Snippet language="html">
                {`import { Select } from "@simpleryo/syw-uikit";
<!-- Select with Search -->
const handleFilter =(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
<Select
  showSearch
  placeholder="Select a person"
  optionFilterProp="children"
  filterOption={handleFilter}
>
  <Select.Option value="jack">Jack</Select.Option>
  <Select.Option value="lucy">Lucy</Select.Option>
  <Select.Option value="tom">Tom</Select.Option>
</Select>
`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Error style</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Select
                      size="default"
                      placeholder="Select a person"
                      className="has-error"
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="rose">Rose</Select.Option>
                    </Select>
                  </div>
                </div>
              </div>
              <Snippet language="html">
                {`import { Select } from "@simpleryo/syw-uikit";
<Select size="default" placeholder="Select a person" className="has-error" >
  <Select.Option value="jack">Jack</Select.Option>
  <Select.Option value="rose">Rose</Select.Option>
</Select>`}
              </Snippet>
            </div>

            <div className="bs-docs-section">
              <h6 className="page-header">Tags Mode - 1 tag limit</h6>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <Select
                      mode="tags"
                      placeholder="请选择与主申请人的关系"
                      onChange={this.handleChange}
                      value={this.state.tags}
                    >
                      <Select.Option value="friend">朋友</Select.Option>
                      <Select.Option value="familyMember">
                        家庭成员
                      </Select.Option>
                    </Select>
                  </div>
                </div>
              </div>
              <Snippet language="html">
                {`import { Select } from "@simpleryo/syw-uikit";
<Select
  mode="tags"
  placeholder="请选择与主申请人的关系"
  onChange={this.handleChange}
  value={this.state.tags}
>
  <Select.Option value="friend">朋友</Select.Option>
  <Select.Option value="familyMember">家庭成员</Select.Option>
</Select>`}
              </Snippet>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
