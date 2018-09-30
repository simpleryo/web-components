import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Snippet } from "./Snippet";
import {
  Tabs,
  Input,
  Button,
  CircleIcon,
  ResponsiveVerticalTab
} from "../../js/syw-uikit";

const TabTitle = type => {
  const obj = {};
  switch (type) {
    case "airplane":
      obj.icon = "icon-airplane";
      obj.title = "机票订购";
      break;
    case "hotel":
      obj.icon = "icon-hotel";
      obj.title = "酒店预定";
      break;
    case "carRental":
      obj.icon = "icon-locator";
      obj.title = "旅游租车";
      break;
    default:
      break;
  }
  return (
    <div>
      <CircleIcon size={96} icon={obj.icon} customClass="white bg--dark-grey" />
      <h6>{obj.title}</h6>
    </div>
  );
};

const TabContent = ({ type }) => {
  switch (type) {
    case "form-add-member":
      return (
        <div className="clearfix">
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
      );

    case "form":
      return (
        <div>
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
      );
    default:
      return (
        <div className="row">
          <div className="col-xs-12">
            <p>步骤 {type} 的详细内容</p>
          </div>
        </div>
      );
  }
};

export default class TabsDemo extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        title: "新成员 1",
        content: <TabContent type="form-add-member" />,
        key: "1",
        closable: false
      },
      { title: "新成员 2", content: "步骤的详细内容 2", key: "2" },
      { title: "新成员 3", content: "步骤的详细内容 3", key: "3" }
    ];
    this.state = {
      isHide: true,
      activeTab: "-1",
      activeKey: panes[0].key,
      panes
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${(this.newTabIndex += 1)}`;
    panes.push({ title: "新成员", content: "步骤的详细内容", key: activeKey });
    this.setState({ panes, activeKey });
  };
  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  };

  handleChange = key => {
    this.setState({
      activeTab: key,
      isHide: false
    });
  };

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h3 className="margin-bottom-20">Tabs</h3>
            <p>
              详细API请查询{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/tabs-cn/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Antd Tabs
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12" id="defaultTab">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Default</i>
              </h5>
            </div>

            <div className="bs-example">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="步骤 1" key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 2" key="2">
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 3" key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </Tabs>
            </div>

            <Snippet language="javascript">
              {`import { Tabs } from '@simpleryo/syw-uikit';
const TabPane = Tabs.TabPane;
<Tabs defaultActiveKey="1">
  <TabPane tab="步骤 1" key="1">...</TabPane>
  ...
</Tabs>
`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Vertical style</i>
              </h5>
            </div>

            <div className="bs-example">
              <Tabs tabPosition="left" defaultActiveKey="1">
                <Tabs.TabPane tab="步骤 1" key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 2" key="2">
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 3" key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </Tabs>
            </div>

            <Snippet language="javascript">
              {`import { Tabs } from '@simpleryo/syw-uikit';
const TabPane = Tabs.TabPane;
<Tabs tabPosition="left" defaultActiveKey="1">
  <TabPane tab="步骤 1" key="1">...</TabPane>
  ...
</Tabs>
`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Responsive Vertical style</i>
              </h5>
            </div>

            <div className="bs-example">
              <ResponsiveVerticalTab defaultActiveKey="1">
                <Tabs.TabPane tab="步骤 1" key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 2" key="2">
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 3" key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </ResponsiveVerticalTab>
            </div>

            <Snippet language="javascript">
              {`import { Tabs, ResponsiveVerticalTab } from '@simpleryo/syw-uikit';
const TabPane = Tabs.TabPane;
<ResponsiveVerticalTab defaultActiveKey="1">
    <TabPane tab="步骤 1" key="1">...</TabPane>
    ...
</ResponsiveVerticalTab>
`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Default hide</i>
              </h5>
            </div>

            <div className="bs-example">
              <Tabs
                className={classNames({
                  "tabs-border-hide": this.state.isHide
                })}
                activeKey={this.state.activeTab}
                onChange={this.handleChange}
              >
                <Tabs.TabPane tab={TabTitle("airplane")} key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={TabTitle("hotel")} key="2">
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={TabTitle("carRental")} key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </Tabs>
            </div>

            <Snippet language="javascript">
              {`import { Tabs } from "@simpleryo/syw-uikit";
import classnames from "classnames";
const TabPane = Tabs.TabPane;
<Tabs className={classNames({ "tabs-border-hide": this.state.isHide })} activeKey={this.state.activeTab} onChange={this.handleChange}>
  <TabPane tab="步骤 1" key="1">...</TabPane>
  ...
</Tabs>`}
            </Snippet>
          </div>

          <div className="col-xs-12" id="cardTab">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Card style</i>
              </h5>
            </div>

            <div className="bs-example bg--light-grey">
              <Tabs type="card" defaultActiveKey="1">
                <Tabs.TabPane tab="步骤 1" key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 2" key="2" disabled>
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 3" key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </Tabs>
            </div>

            <Snippet language="javascript">
              {`import { Tabs } from "@simpleryo/syw-uikit";
const TabPane = Tabs.TabPane;
<Tabs type="card">
  <TabPane tab="步骤 1" key="1">...</TabPane>
  ...
</Tabs>
`}
            </Snippet>
          </div>

          <div className="col-xs-12" id="cardTab">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Light grey colour & style of size small</i>
              </h5>
            </div>

            <div className="bs-example">
              <Tabs
                className="ant-tabs-card--grey ant-tabs-card--small"
                type="card"
                defaultActiveKey="1"
              >
                <Tabs.TabPane tab="步骤 1" key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 2" key="2">
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 3" key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </Tabs>
            </div>

            <Snippet language="html">
              {`import { Tabs } from "@simpleryo/syw-uikit";
const TabPane = Tabs.TabPane;
<Tabs
  className="ant-tabs-card--grey ant-tabs-card--small"
  type="card"
  defaultActiveKey="1"
>
  <TabPane tab="步骤 1" key="1">...</TabPane>
  ...
</Tabs>`}
            </Snippet>
          </div>

          <div className="col-xs-12" id="cardTab">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Add & delete style</i>
              </h5>
            </div>

            <div className="bs-example">
              <div>
                <Tabs
                  className="ant-tabs-card--grey ant-tabs-card--small"
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}
                  hideAdd
                  tabBarExtraContent={
                    <Button size="small" className="fit" onClick={this.add}>
                      + 新增
                    </Button>
                  }
                >
                  {this.state.panes.map(pane => (
                    <Tabs.TabPane
                      tab={pane.title}
                      key={pane.key}
                      closable={pane.closable}
                    >
                      {pane.content}
                    </Tabs.TabPane>
                  ))}
                </Tabs>
              </div>
            </div>

            <Snippet language="html">
              {`import { Tabs } from "@simpleryo/syw-uikit";
const TabPane = Tabs.TabPane;
<Tabs
  className="ant-tabs-card--grey ant-tabs-card--small"
  hideAdd
  onChange={this.onChange}
  activeKey={this.state.activeKey}
  type="editable-card"
  onEdit={this.onEdit}
>
 <TabPane tab={pane.title} key={pane.key}>...</TabPane>
 ...
</Tabs>
`}
            </Snippet>
          </div>

          <div className="col-xs-12" id="cardTab">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Align left style</i>
              </h5>
            </div>

            <div className="bs-example">
              <Tabs
                className="ant-tabs-card--grey ant-tabs-card--small ant-tabs__align-left"
                type="card"
                defaultActiveKey="1"
              >
                <Tabs.TabPane tab="步骤 1" key="1">
                  <TabContent type="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 2" key="2">
                  <TabContent type="form" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="步骤 3" key="3">
                  <TabContent type="3" />
                </Tabs.TabPane>
              </Tabs>
            </div>

            <Snippet language="html">
              {`import { Tabs } from "@simpleryo/syw-uikit";
const TabPane = Tabs.TabPane;
<Tabs
  className="ant-tabs-card--grey ant-tabs-card--small ant-tabs__align-left"
  type="card"
  defaultActiveKey="1"
>
  <TabPane tab="步骤 1" key="1">...</TabPane>
  ...
</Tabs>`}
            </Snippet>
          </div>
        </div>
      </Layout>
    );
  }
}

TabsDemo.propTypes = {
  layout: PropTypes.node
};
