import React, { Component, Fragment } from "react";
import { map } from "ramda";
import { Snippet } from "./Snippet";
import { Button, Collapse } from "../../js/syw-uikit";

const panels = [
  {
    id: "1",
    header: (
      <div className="row">
        <div className="col-md-3">
          <h6>资产证明</h6>
        </div>
        <div className="col-md-8">
          <p>请提供银行流水银行卡对账单（必须提供）</p>
        </div>
      </div>
    ),
    content: (
      <div>
        <p>
          持换发护照者，请提供所有旧护照原件。护照上至少留有2页空白签证页，不含备注页。护照上须有中文签名。
        </p>
        <ul>
          <li>
            对账单原件盖银行公章，显示申请人姓名，如无持卡人姓名，提供卡片的正反面复印件
          </li>
          <li>
            签发日期要在递交前1个月以内，最好是1周左右；一般要有超过10条流水记录，1至2张纸为佳
          </li>
          <li>
            账单涵盖至少6个月的流水记录，即第一条及最后一条跨度要在6个月以上
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "2",
    header: (
      <div className="row">
        <div className="col-md-3">
          <h6>护照</h6>
        </div>
        <div className="col-md-8">
          <p>请提交有效期在6个月以上的因私护照原件</p>
        </div>
      </div>
    ),
    content: (
      <p>
        持换发护照者，请提供所有旧护照原件。护照上至少留有2页空白签证页，不含备注页。护照上须有中文签名。
      </p>
    )
  },
  {
    id: "3",
    header: (
      <div className="row">
        <div className="col-md-3">
          <h6>护照彩色复印件</h6>
        </div>
        <div className="col-md-8">
          <p>请提交2张护照个人资料页彩色复印件</p>
        </div>
      </div>
    ),
    content: (
      <p>
        护照首页、签字页、签证页及出入境章页面的彩色复印件,护照首页需2张彩色复印件。请注意，新西兰所有复印件需要彩色。
      </p>
    )
  }
];

export default class CollapseDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanels: []
    };
  }

  toggleShowAll = () => {
    if (this.state.activePanels.length === panels.length) {
      this.setState({ activePanels: [] });
    } else {
      this.setState({ activePanels: ["1", "2", "3"] });
    }
  };

  handleChange = keys => {
    this.setState({ activePanels: [...keys] });
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Collapse</h4>
            <p className="full-width margin-bottom-20">
              More Details in
              <a
                className="link link__highlight"
                rel="noopener noreferrer"
                href="https://ant.design/components/collapse-cn/"
                target="_blank"
              >
                Ant Collapse
              </a>
            </p>
            <hr />
          </div>
        </div>

        <div>
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>Collapse Simple</i>
            </h5>
          </div>

          <div className="bs-example">
            <div className="margin-bottom-25 text-right">
              <Button size="small" onClick={this.toggleShowAll}>
                {this.state.activePanels.length === panels.length
                  ? "Hide All"
                  : "Show All"}
              </Button>
            </div>

            <Collapse
              bordered={false}
              activeKey={this.state.activePanels}
              onChange={this.handleChange}
            >
              {map(
                panel => (
                  <Collapse.Panel header={panel.header} key={panel.id}>
                    {panel.content}
                  </Collapse.Panel>
                ),
                panels
              )}
            </Collapse>
          </div>

          <Snippet language="html">
            {`import { Collapse, Button } from "@simpleryo/syw-uikit";
<Collapse bordered={false} activeKey={this.state.activePanels} onChange={this.handleChange}>
  {map(
    panel => (
      <Collapse.Panel header={panel.header} key={panel.id}>
        {panel.content}
      </Collapse.Panel>
    ),
    panels
  )}
</Collapse>`}
          </Snippet>
        </div>
      </Fragment>
    );
  }
}
