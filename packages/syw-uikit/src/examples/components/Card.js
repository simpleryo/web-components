import React from "react";
import PropTypes from "prop-types";
import { Card } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

import eventBanner from "../../assets/imgs/event-banner/event-banner.svg";

const gridStyle = {
  width: "33.333%",
  textAlign: "center"
};

const { Meta } = Card;

const Cards = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Card 卡片</h4>
        <p>通用卡片容器。</p>
        <h5>何时使用</h5>
        <p className="full-width margin-bottom-20">
          最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。<a
            className="link link__highlight"
            href="https://ant.design/components/card-cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant Card
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

      <div className="bs-example bg--light-grey">
        <div className="row">
          <div className="col-xs-12">
            <Card
              className="action-card"
              title="护照信息"
              noHovering
              bordered={false}
              extra={<a href="#">修改</a>}
            >
              <p>
                研面公四族群南，年素者约政那，这Z覆镰投。
                己收么转加被应格，号装干已导那，电际D新山结。
                写查七极报状难何商值，方六者以成地直越不间，天想J平之但然呆。
                还生族省非例合政将并，对化节低满装间，导行蠢坊层连针拉。
                金号则商表派着，军集L拉。 发江年规统队传争列提，北好他-林示芦。
                标且交根及关空林着离，消动济立每记西金采，传口露车松此困块。
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Card } from "@simpleryo/syw-uikit";
<Card
  className="action-card"
  title="护照信息"
  noHovering
  bordered={false}
  extra={<a href="#">修改</a>}
>
  ......
</Card>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Loading animation</i>
        </h5>
      </div>
      <div className="bs-example bg--light-grey">
        <div className="row">
          <div className="col-xs-12">
            <Card
              className="action-card"
              loading
              title="申请人信息"
              noHovering
              bordered={false}
              extra={<a href="#">修改</a>}
            >
              Whatever content
            </Card>
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Card } from "@simpleryo/syw-uikit";
<Card
  className="action-card"
  loading
  title="申请人信息"
  noHovering
  bordered={false}
  extra={<a href="#">修改</a>}
>
  ......
</Card>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Grid card</i>
        </h5>
      </div>
      <div className="bs-example bg--light-grey">
        <div className="row">
          <div className="col-xs-12">
            <Card
              className="action-card"
              title="申请人信息"
              noHovering
              bordered={false}
              extra={<a href="#">修改</a>}
            >
              <Card.Grid style={gridStyle}>内容</Card.Grid>
              <Card.Grid style={gridStyle}>内容</Card.Grid>
              <Card.Grid style={gridStyle}>内容</Card.Grid>
              <Card.Grid style={gridStyle}>内容</Card.Grid>
              <Card.Grid style={gridStyle}>内容</Card.Grid>
              <Card.Grid style={gridStyle}>内容</Card.Grid>
            </Card>
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Card } from "@simpleryo/syw-uikit";
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
<Card
  className="action-card"
  title="申请人信息"
  noHovering
  bordered={false}
  extra={<a href="#">修改</a>}
>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
  <Card.Grid style={gridStyle}>内容</Card.Grid>
</Card>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Event card</i>
        </h5>
      </div>
      <div className="bs-example bg--light-grey">
        <div className="row">
          <div className="col-xs-12">
            <Card
              hoverable
              className="event-card"
              /* cover={<img alt="example" src={eventBanner} />} */
              cover={
                <div className="text-center" style={{ background: "#C2E4F8" }}>
                  <img alt="example" src={eventBanner} />
                </div>
              }
            >
              <Meta
                title="免费制作小二寸证件照"
                description="活动时间：2018.10.13-2018.10.20"
              />
            </Card>
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Card } from "@simpleryo/syw-uikit";
const { Meta } = Card;
<Card
  hoverable
  className="event-card"
  cover={<img alt="example" src={eventBanner} />}
>
  <Meta
    title="免费制作小二寸证件照"
    description="活动时间：2018.10.13-2018.10.20"
  />
</Card>
`}
      </Snippet>
    </div>
  </Layout>
);

Cards.propTypes = {
  layout: PropTypes.any
};
export default Cards;
