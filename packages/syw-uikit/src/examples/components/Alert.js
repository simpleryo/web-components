import React from "react";
import { Snippet } from "./Snippet";
import { Alert } from "../../js/syw-uikit";

const Alerts = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Alert 警告提示</h4>
        <p>警告提示，展现需要关注的信息。</p>
        <h5>何时使用</h5>
        <ul>
          <li>当某个页面需要向用户显示警告的信息时。</li>
          <li>
            非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
          </li>
        </ul>
        <p className="full-width margin-bottom-20">
          详细API请查询{" "}
          <a
            className="link link__highlight"
            href="https://ant.design/components/alert-cn/"
            target="_blank"
          >
            Ant Alert
          </a>
        </p>
        <hr />
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Alert with Message</i>
          </h5>
        </div>

        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Alert message="成功信息" type="success" showIcon />
              <Alert
                className="margin-top-20"
                message="面利化和在速通较及列，广一改实使色面行，和劳G吴均男屈据。 任据结话问识处了电参，维的必代豆辆此赚。"
                type="info"
                showIcon
              />
              <Alert
                className="margin-top-20"
                message="警告信息"
                type="warning"
                showIcon
              />
              <Alert
                className="margin-top-20"
                message="错误信息"
                type="error"
                showIcon
              />
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Alert } from "@simpleryo/syw-uikit";
<Alert message="成功信息" type="success" showIcon />
<Alert message="信息内容" type="info" showIcon />
<Alert message="警告信息" type="warning" showIcon />
<Alert message="错误信息" type="error" showIcon />
`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Alert with both Message and Description</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Alert
                message="成功信息"
                description="这是成功信息的一段描述"
                type="success"
                showIcon
              />
              <Alert
                className="margin-top-20"
                message="信息内容"
                description="这是信息内容的一段描述，这是信息内容的一段描述。"
                type="info"
                showIcon
              />
              <Alert
                className="margin-top-20"
                message="警告信息"
                description="这是警告信息的一段描述， 这是警告信息的一段描述，这是警告信息的一段描述。这是警告信息的一段描述， 这是警告信息的一段描述，这是警告信息的一段描述。"
                type="warning"
                showIcon
              />
              <Alert
                className="margin-top-20"
                message="错误信息"
                description="这是错误信息的一段描述"
                type="error"
                showIcon
              />
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Alert } from "@simpleryo/syw-uikit";
<Alert message="成功信息" description="这是成功信息的一段描述" type="success" showIcon />
<Alert message="信息内容" description="这是信息内容的一段描述" type="info" showIcon />
<Alert message="警告信息" description="这是警告信息的一段描述" type="warning" showIcon />
<Alert message="错误信息" description="这是错误信息的一段描述" type="error" showIcon />
`}
        </Snippet>
      </div>
    </div>
  </Layout>
);

export default Alerts;
