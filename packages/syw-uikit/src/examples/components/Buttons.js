import React, { Component, Fragment } from "react";
import { Button } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  startLoading = () => this.setState({ loading: true });

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Buttons 按钮</h4>
            <p>按钮用于开始一个即时操作。</p>
            <h5>何时使用</h5>
            <p className="full-width margin-bottom-20">
              标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。详细API请查询{" "}
              <a
                className="link link__highlight"
                rel="noopener noreferrer"
                href="https://ant.design/components/button-cn/"
                target="_blank"
              >
                Ant design
              </a>
            </p>
            <hr />
          </div>
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Style</i>
            </h5>
          </div>

          <div className="bs-example">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 margin-top-20">
                <Button type="primary">主要按键</Button>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 margin-top-20">
                <Button
                  type="primary"
                  href="http://www.google.com"
                  target="_blank"
                >
                  链接按键
                </Button>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 margin-top-20">
                <Button>默认按键</Button>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 margin-top-20">
                <Button disabled>禁用状态</Button>
              </div>
            </div>
            <div className="row" />
          </div>

          <Snippet language="html">
            {`import { Button } from '@simpleryo/syw-uikit';
<Button type="primary">主要按键</Button>
<Button type="primary" href="http://www.google.com" target="_blank">链接按键</Button>
<Button>默认按键</Button>
<Button disabled>禁用状态</Button>`}
          </Snippet>
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Small size</i>
            </h5>
          </div>
          <div className="bs-example">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button type="primary" size="small">
                  主要按键
                </Button>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button
                  type="primary"
                  size="small"
                  href="http://www.google.com"
                  target="_blank"
                >
                  链接按键
                </Button>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button size="small">默认按键</Button>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button size="small" className="fit">
                  + 增加
                </Button>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button size="small" disabled>
                  禁用状态
                </Button>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Button } from '@simpleryo/syw-uikit';
<Button type="primary" size="small">主要按键</Button>
<Button type="primary" size="small" href="http://www.google.com" target="_blank">链接按键</Button>
<Button size="small">默认按键</Button>
<Button size="small" disabled>禁用状态</Button>`}
          </Snippet>
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Loading Button</i>
            </h5>
          </div>
          <div className="bs-example">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button type="primary" loading>
                  加载中
                </Button>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button size="small" loading>
                  加载中
                </Button>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-20">
                <Button
                  type="primary"
                  size="small"
                  loading={this.state.loading}
                  onClick={this.startLoading}
                >
                  加载按键
                </Button>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`import { Button } from '@simpleryo/syw-uikit
<Button type="primary" loading>加载中</Button>
<Button size="small" loading>加载中</Button>
<Button type="primary" size="small" loading={this.state.loading} onClick={this.startLoading}>
  加载按键
</Button>
`}
          </Snippet>
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Close button</i>
            </h5>
          </div>
          <div className="bs-example">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12 margin-bottom-20">
                <a className="close-btn">
                  <i className="icon-close" />
                </a>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 margin-bottom-20">
                <a className="close-btn close-btn--big">
                  <i className="icon-close" />
                </a>
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`<a className="close-btn"><i className="icon-close" /></a>
<a className="close-btn close-btn--big"><i className="icon-close" /></a>`}
          </Snippet>
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Back to top button</i>
            </h5>
          </div>
          <div className="bs-example">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12 margin-bottom-20">
                <div className="btn-back-top text-center">
                  <a className="btn-back-top__half-circle" href="#">
                    <i className="icon-arrow-up" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Snippet language="html">
            {`<div className="btn-back-top text-center">
  <a className="btn-back-top__half-circle" href="#">
    <i className="icon-arrow-up" />
  </a>
</div>`}
          </Snippet>
        </div>
      </Fragment>
    );
  }
}
