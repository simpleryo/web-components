import React from "react";
import { AppGroup, AppGroupTitle, Input, Radio } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const AppGroupDemo = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Step form title 表单步骤标题</h4>
        <p>适用于表单的每一组内容的标题</p>
        <hr />
      </div>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Group Title + Icon</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="col-xs-12">
            <AppGroupTitle
              icon={{ type: "text", content: "8" }}
              title="这是标题"
              description="我是一段简短的描述"
            />
          </div>

          <div className="col-xs-12 margin-top-20">
            <AppGroupTitle
              icon={{ type: "fontello", content: "icon-camera" }}
              title="我也是一个大标题"
            />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { AppGroupTitle } from "@simpleryo/syw-uikit";
<AppGroupTitle
  icon={{ type: "text", content: "8" }}
  title="这是标题"
  description="我是一段简短的描述"
/>

<AppGroupTitle
  icon={{ type: "fontello", content: "icon-camera" }}
  title="我也是一个大标题"
/>
`}
      </Snippet>
    </div>

    <div className="col-xs-12">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Group + Icon + Children</i>
        </h5>
        <p>icon: {`{"type": "text", "content": "1"}`}</p>
      </div>
      <div className="bs-example">
        <AppGroup
          icon={{ type: "text", content: "10" }}
          title="联系方式"
          description="如果您身边没有拍照设备或护照存档图片，您也可以选择手动填写您的护照信息。"
        >
          <div className="col-xs-12 col-sm-8">
            <div className="form-group">
              <label className="form-group__title">电子邮件</label>
              <Input placeholder="默认尺寸样式" />
              <p className="small form-group__message">
                请输入邮箱地址方便我们与你取得联系
              </p>
            </div>
          </div>
        </AppGroup>
      </div>

      <Snippet language="html">
        {`import { AppGroup } from "@simpleryo/syw-uikit";
<AppGroup
  icon={{ type: "text", content: "10" }}
  title="联系方式"
  description="如果您身边没有拍照设备或护照存档图片，您也可以选择手动填写您的护照信息。"
>
...
</AppGroup>`}
      </Snippet>
    </div>

    <div className="col-xs-12">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Group + Children</i>
        </h5>
        <p>icon: null</p>
        <p>title: "Group Title"</p>
        <p>description: ""</p>
      </div>
      <div className="bs-example">
        <AppGroup title="是否有兵役历史">
          <div className="col-xs-12">
            <div className="form-group">
              <Radio>是</Radio>
              <Radio>否</Radio>
            </div>
          </div>
        </AppGroup>
      </div>

      <Snippet language="html">
        {`import { AppGroup } from "@simpleryo/syw-uikit";
<AppGroup title="是否有兵役历史">
  ...
</AppGroup>`}
      </Snippet>
    </div>

    <div className="col-xs-12">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Empty Indent Group + Children</i>
        </h5>
        <p>icon: {`{ type: "indent_group_content" }`}</p>
        <p>title: ""</p>
        <p>description: ""</p>
      </div>
      <div className="bs-example">
        <AppGroup icon={{ type: "indent_group_content" }}>
          <div className="col-xs-12 col-sm-8">
            <div className="form-group">
              <label className="form-group__title">电子邮件</label>
              <Input placeholder="默认尺寸样式" />
              <p className="small form-group__message">
                请输入邮箱地址方便我们与你取得联系
              </p>
            </div>
          </div>
        </AppGroup>
      </div>

      <Snippet language="html">
        {`import { AppGroup } from "@simpleryo/syw-uikit";
<AppGroup icon={{ type: "indent_group_content" }}>
  ...
</AppGroup>`}
      </Snippet>
    </div>

    <div className="col-xs-12">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Indent Group + No Children</i>
        </h5>
      </div>
      <div className="bs-example">
        <AppGroup
          icon={{ type: "indent_group_content" }}
          title="我是一个小字号的标题"
          description="我是一个更小字号的描述，因为Group没有Children"
        />
      </div>

      <Snippet language="html">
        {`import { AppGroup } from "@simpleryo/syw-uikit";
<AppGroup
  icon={{ type: "indent_group_content" }}
  title="我是一个小字号的标题"
  description="我是一个更小字号的描述，因为Group没有Children"
/>`}
      </Snippet>
    </div>
  </Layout>
);

export default AppGroupDemo;
