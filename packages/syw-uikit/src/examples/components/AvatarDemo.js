import React from "react";
import { Badge, Avatar } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const Avatars = () => (
  <div className="row">
    <div className="col-xs-12">
      <h4 className="margin-bottom-20">Avatar 头像</h4>
      <p>
        Avatars can be used to represent people or objects. It supports images,
        Icons, or letters.{" "}
        <a
          className="link link__highlight"
          href="https://ant.design/components/avatar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Avatar API Doc
        </a>
      </p>
      <hr />
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Basic style</i>
        </h5>
      </div>

      <div className="bs-example">
        <div className="row">
          <div className="col-xs-12">
            <Avatar size={64} icon="user" />
            <Avatar size="large" icon="user" />
            <Avatar icon="user" />
            <Avatar size="small" icon="user" />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Avatar } from "../../js/syw-uikit";
<Avatar size={64} icon="user" />
<Avatar size="large" icon="user" />
<Avatar icon="user" />
<Avatar size="small" icon="user" />
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Type</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="col-xs-12">
            <Avatar icon="user" />
            <Avatar>U</Avatar>
            <Avatar>USER</Avatar>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
              U
            </Avatar>
            <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Avatar } from "../../js/syw-uikit";
<Avatar icon="user" />
<Avatar>U</Avatar>
<Avatar>USER</Avatar>
<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>With badge</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="col-xs-12">
            <span style={{ marginRight: 24 }}>
              <Badge count={1}>
                <Avatar icon="user" />
              </Badge>
            </span>
            <span>
              <Badge dot>
                <Avatar shape="square" icon="user" />
              </Badge>
            </span>
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Avatar } from "../../js/syw-uikit";
<span style={{ marginRight: 24 }}>
  <Badge count={1}>
    <Avatar icon="user" />
  </Badge>
</span>
<span>
  <Badge dot>
    <Avatar shape="square" icon="user" />
  </Badge>
</span>
`}
      </Snippet>
    </div>
  </div>
);

export default Avatars;
