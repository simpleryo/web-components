import React, { Fragment } from "react";
import { CircleIcon, IconCard } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const IconCards = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h3>Icon cards</h3>
        <hr />
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>icon card</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-4">
              <IconCard icon="icon-user" title="我是标题h6" />
            </div>
            <div className="col-xs-4">
              <IconCard icon="icon-id-card" title="我是标题h6" />
            </div>
            <div className="col-xs-4">
              <IconCard icon="icon-archive" title="我是标题h6" />
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { IconCard } from "../../js/syw-uikit";
<IconCard
  iconName="icon-id-card"
  title="我是标题h6"
  description="这是描述的段落"
/>`}
        </Snippet>
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Responsive icon card (responsive on mobile)</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <IconCard icon="icon-user" responsive="true" title="我是标题h6" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <IconCard
                icon="icon-write"
                responsive="true"
                title="我是标题h6"
                description="这是描述的段落"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <IconCard
                icon="icon-health"
                responsive="true"
                title="我是标题h6"
                description="这是描述的段落"
              />
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { IconCard } from "../../js/syw-uikit";
<IconCard
  icon="icon-health"
  responsive="true"
  title="我是标题h6"
  description="这是描述的段落"
/>`}
        </Snippet>
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Vertical style icon card</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <IconCard
                icon={<i className="icon-truck-right" />}
                vertical="true"
                title="中国领事馆合作伙伴"
                description="与中国领事馆直接合作，出签更高效"
              />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <IconCard
                icon={<i className="icon-secure" />}
                vertical="true"
                title="资料加密安全管理"
                description="采用高级加密标准，保护签证资料安全"
              />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <IconCard
                icon={<i className="icon-laptop" />}
                vertical="true"
                title="无需线下排队等待"
                description="拥有中国领事馆直通渠道，快速便捷"
              />
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { IconCard } from "../../js/syw-uikit";
<IconCard
  iconSize="48"
  icon="icon-health"
  vertical="true"
  title="无需线下排队等待"
  description="拥有中国领事馆直通渠道，快速便捷"
/>`}
        </Snippet>
      </div>

      <div className="margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Icon card with status</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3">
              <div className="icon-card">
                <CircleIcon
                  type="number"
                  size={36}
                  customClass="white bg--dark-grey"
                >
                  <span>1</span>
                </CircleIcon>
                <h6>标题h6</h6>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="icon-card">
                <CircleIcon
                  type="status"
                  status="active"
                  customClass="white bg--dark-grey"
                >
                  <span>2</span>
                </CircleIcon>
                <h6>一样标题h6</h6>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="icon-card">
                <CircleIcon
                  type="status"
                  status="completed"
                  customClass="white bg--dark-grey"
                >
                  <span>3</span>
                </CircleIcon>
                <h6>还是标题h6</h6>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="icon-card">
                <CircleIcon
                  type="status"
                  status="error"
                  customClass="white bg--dark-grey"
                >
                  <span>4</span>
                </CircleIcon>
                <h6>同样标题h6</h6>
              </div>
            </div>
          </div>
        </div>
        <Snippet language="html">
          {`import { CircleIcon } from "@simpleryo/syw-uikit";
<div className="icon-card">
  <CircleIcon type="number" size={36} customClass="white bg--dark-grey"><span>1</span></CircleIcon>
  <h6>标题h6</h6>
</div>
<div className="icon-card">
  <CircleIcon type="status" status="active" customClass="white bg--dark-grey">
    <span>2</span>
  </CircleIcon>
  <h6>一样标题h6</h6>
</div>
<div className="icon-card">
  <CircleIcon type="status" status="completed" customClass="white bg--dark-grey"><span>3</span></CircleIcon>
  <h6>还是标题h6</h6>
</div>
<div className="icon-card">
  <CircleIcon type="status" status="error" customClass="white bg--dark-grey"><span>4</span></CircleIcon>
  <h6>同样标题h6</h6>
</div>`}
        </Snippet>
      </div>
    </div>
  </Fragment>
);

export default IconCards;
