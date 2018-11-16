import React, { Fragment } from "react";
import { Snippet } from "./Snippet";
import { Button, notification } from "../../js/syw-uikit";

const openNotification = () => {
  notification.open({
    message: "信息标题样式",
    description:
      "后济百广细响空联属张计，部立器之江医收伯财。 省这第更出安难，将海也关五该，角面据满。",
    duration: 0
  });
};
const openNotificationWithIcon = type => {
  notification[type]({
    message: "信息标题样式",
    description:
      "后济百广细响空联属张计，部立器之江医收伯财。 省这第更出安难，将海也关五该，角面据满。",
    duration: 0
  });
};

const Notification = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Notification 通知提醒框</h4>
        <p>
          全局展示通知提醒信息。详细API请查询&nbsp;
          <a
            className="link link__highlight"
            rel="noopener noreferrer"
            href="https://ant.design/components/notification-cn/"
            target="_blank"
          >
            Ant Notification
          </a>
        </p>
        <h5 className="margin-top-20">何时使用</h5>
        <p className="full-width">
          在系统四个角显示通知提醒信息。经常用于以下情况：
        </p>
        <ul>
          <li>较为复杂的通知内容。</li>
          <li>带有交互的通知，给出用户下一步的行动点。</li>
          <li>系统主动推送。</li>
        </ul>
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
            <Button type="primary" size="small" onClick={openNotification}>
              Open the notification box
            </Button>
          </div>
        </div>
        <div className="row" />
      </div>

      <Snippet language="javascript">
        {`import { Button, notification } from '@simpleryo/syw-uikit';
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
ReactDOM.render(
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>
, mountNode);
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
          <div className="col-xs-12 col-sm-6">
            <Button
              size="small"
              onClick={() => openNotificationWithIcon("success")}
            >
              成功消息
            </Button>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Button
              size="small"
              onClick={() => openNotificationWithIcon("info")}
            >
              普通信息
            </Button>
          </div>
        </div>
        <div className="row margin-top-20">
          <div className="col-xs-12 col-sm-6">
            <Button
              size="small"
              onClick={() => openNotificationWithIcon("warning")}
            >
              提示/警告信息
            </Button>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Button
              size="small"
              onClick={() => openNotificationWithIcon("error")}
            >
              错误信息
            </Button>
          </div>
        </div>
      </div>

      <Snippet language="javascript">
        {`import { Button, notification } from '@simpleryo/syw-uikit';
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <div>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </div>
, mountNode);
`}
      </Snippet>
    </div>
  </Fragment>
);

export default Notification;
