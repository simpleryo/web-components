import React, { Component, Fragment } from "react";
import { Input, Tooltip } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const text = (
  <span>
    元之情任酸厂品，西代斯四多斗造，人T就变学。
    起建研情十林当问目路，方复的层叫级常但它每，界完束惹米江习识。
    所华太育拉形口要型，题斯正于五资包局，度正R给资事W。
    科机酸量厂石求回亲要快，收每飞复行题立或划思，元治W攻兵更县一快。
  </span>
);

class TooltipDemo extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Tooltip 文字提示</h4>
            <p>按钮用于开始一个即时操作。</p>
            <h5>何时使用</h5>
            <p className="full-width margin-bottom-20">
              详细API请查询{" "}
              <a
                className="link link__highlight"
                rel="noopener noreferrer"
                href="https://ant.design/components/tooltip-cn/"
                target="_blank"
              >
                Antd Tooltip
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Trigger Events</i>
              </h5>
            </div>

            <div className="bs-example">
              <div className="row">
                <div className="col-xs-6">
                  <Tooltip placement="bottomRight" trigger="click" title={text}>
                    <i className="btn-popover icon-info" />
                  </Tooltip>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Tooltip } from '@simpleryo/syw-uikit';
<Tooltip placement="bottomRight" trigger="click" title={text} >
  <i className="btn-popover icon-info" />
</Tooltip>
`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Example of working with form group</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group-with-btn">
                    <label className="form-group__title">短信验证码</label>
                    <div className="input-group">
                      <Input placeholder="请输入验证码" />
                      <div className="input-group-btn">
                        <Tooltip
                          placement="bottomRight"
                          trigger="click"
                          title={text}
                        >
                          <i className="btn-popover icon-info" />
                        </Tooltip>
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
              {`import { Input, Tooltip } from '@simpleryo/syw-uikit';
<div className="form-group-with-btn">
  <label className="form-group__title">短信验证码</label>
  <div className="input-group">
    <Input placeholder="请输入验证码" />
    <div className="input-group-btn">
      <Tooltip placement="bottomRight" trigger="click" title={text} >
        <i className="btn-popover icon-info" />
      </Tooltip>
    </div>
  </div>
  <p className="small form-group__message">收取到的验证码30秒有效</p>
</div>
`}
            </Snippet>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TooltipDemo;
