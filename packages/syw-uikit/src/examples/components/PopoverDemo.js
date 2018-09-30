import React, { Component } from "react";
import { Input, Popover } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const contentExample = (
  <p>
    二究名酸单设取老又老长造值并，飞些还只说入刷相D村否常。
    史定毛决已过传教流铁后规王本，府处才节很收3门芳奋路芦。
    选压近石多交严京，体中方观家定百，果I全个派空。
  </p>
);

const content = (
  <div>
    <ul className="list-unstyled">
      <li>
        <a href="/">我的主页</a>
      </li>
      <li>
        <a href="/">我的申请</a>
      </li>
      <li>
        <a href="/">个人设置</a>
      </li>
    </ul>
    <hr />
    <ul className="list-unstyled">
      <li>
        <a href="/">在线帮助</a>
      </li>
      <li>
        <a href="/">退出登录</a>
      </li>
    </ul>
  </div>
);

class PopoverDemo extends Component {
  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Popover 气泡卡片</h4>
            <p className="full-width margin-bottom-20">
              详细API请查询{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/popover-cn/"
                target="_blank"
              >
                Antd Popover
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Trigger by Click</i>
              </h5>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group-with-btn">
                    <label className="form-group__title">短信验证码</label>
                    <div className="input-cta">
                      <Input placeholder="请输入验证码" />
                      <div className="input-cta-btn">
                        <Popover
                          placement="bottomRight"
                          content={contentExample}
                          trigger="click"
                        >
                          <i className="btn-popover icon-info" />
                        </Popover>
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
              {`import { Popover } from '@simpleryo/syw-uikit';
const contentExample = (<p>二究名酸单设取老又老长造值并，飞些还只说入刷相D村否常。 史定毛决已过传教流铁后规王本，府处才节很收3门芳奋路芦。 选压近石多交严京，体中方观家定百，果I全个派空。</p>);
<Popover
  placement="bottomRight"
  content={contentExample}
  trigger="click">
  <i className="btn-popover icon-info" />
</Popover>
`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Dropdown Menu style</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-6">
                  <Popover
                    overlayClassName="dropdown-menu"
                    placement="bottomRight"
                    content={content}
                    trigger="click"
                  >
                    <i className="btn-popover icon-profile" />
                  </Popover>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`import { Popover } from '@simpleryo/syw-uikit';
const content = (
  <div>
    <ul className="list-unstyled">
      <li><a href="/">我的主页</a></li>
      <li><a href="/">我的申请</a></li>
      <li><a href="/">个人设置</a></li>
    </ul>
    <hr/>
    <ul className="list-unstyled">
      <li><a href="/">在线帮助</a></li>
      <li><a href="/">退出登录</a></li>
    </ul>
  </div>
);

<Popover
  overlayClassName="dropdown-menu"
  placement="bottomRight"
  content={content}
  trigger="click"
>
  <i className="btn-popover icon-profile" />
</Popover>
`}
            </Snippet>
          </div>
        </div>
      </Layout>
    );
  }
}

export default PopoverDemo;
