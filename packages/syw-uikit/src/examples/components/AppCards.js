import React, { Component } from "react";
import { Snippet } from "./Snippet";
import { AppCard } from "../../js/syw-uikit";

const hint = (
  <div>
    <i className="icon-timer" />所需时间约3分钟
  </div>
);

export default class AppCards extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.currentTarget);
  }

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <h4 className="margin-bottom-20">Application Cards</h4>
        <hr />

        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Cards in Different Status</i>
          </h5>
        </div>

        <div className="bs-example padding-bottom-0">
          <div className="row bg--light-grey padding-top-20 padding-bottom-20">
            <div className="col-xs-12 text-center">
              <AppCard
                triangleBgColour="light-grey"
                icon="icon-user"
                title="主申请人个人信息"
                hint={hint}
                onClick={this.handleClick}
              />
              <AppCard
                triangleBgColour="light-grey"
                icon="icon-health"
                title={<span>联系方式</span>}
                hint={hint}
                onClick={this.handleClick}
              />
              <AppCard
                triangleBgColour="light-grey"
                status="completed"
                icon="icon-suitcase"
                title="工作信息"
                hint="已完成，没有错误。"
                onClick={this.handleClick}
              />
              <AppCard
                triangleBgColour="light-grey"
                status="error"
                icon="icon-balance-scale"
                title="品行"
                hint="未完成，请检查并更正"
                onClick={this.handleClick}
              />
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { AppCard } from "@simpleryo/syw-uikit";
const hint = (<div><i className="icon-timer" />所需时间约3分钟</div>);
<AppCard
  triangleBgColour="light-grey"
  icon="icon-health"
  title={<span>联系方式</span>}
  hint={hint}
  onClick={this.handleClick}
/>
<AppCard
  triangleBgColour="light-grey"
  status="completed"
  icon="icon-suitcase"
  title="工作信息"
  hint="已完成，没有错误。"
  onClick={this.handleClick}
/>
<AppCard
  triangleBgColour="light-grey"
  status="error"
  icon="icon-balance-scale"
  title="品行"
  hint="未完成，请检查并更正"
  onClick={this.handleClick}
/>`}
        </Snippet>
      </Layout>
    );
  }
}
