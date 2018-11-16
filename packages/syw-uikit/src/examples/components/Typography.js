import React from "react";
import { Snippet } from "./Snippet";

const Typography = () => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <h3 className="margin-bottom-20">Typography</h3>
        <p className="full-width margin-bottom-20">
          {"中文字体选择依次为'苹方'，'冬青黑体'，'微软雅黑'。英文字体为 "}
          <a
            className="link link__highlight"
            rel="noopener noreferrer"
            href="http://www.google.com/fonts/specimen/Open+Sans"
            target="_blank"
          >
            Open Sans
          </a>.
        </p>
        <hr />
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Headings</i>
          </h5>
        </div>
        <div className="bs-example">
          <table className="table">
            <tbody>
              <tr>
                <th>
                  <h1>H1 字体</h1>
                </th>
                <th>60px/80px</th>
                <th>萍方 Light</th>
              </tr>
              <tr>
                <th>
                  <h2>H2 字体</h2>
                </th>
                <th>48px/66px</th>
                <th>萍方 Light</th>
              </tr>
              <tr>
                <th>
                  <h3>H3 字体</h3>
                </th>
                <th>35px/51px</th>
                <th>萍方 Light</th>
              </tr>
              <tr>
                <th>
                  <h4>H4 字体</h4>
                </th>
                <th>28px/42px</th>
                <th>萍方 Light</th>
              </tr>
              <tr>
                <th>
                  <h5>H5 字体</h5>
                </th>
                <th>24px/36px</th>
                <th>萍方 Light</th>
              </tr>
              <tr>
                <th>
                  <h6>H6 字体</h6>
                </th>
                <th>16px/27px</th>
                <th>萍方 Light</th>
              </tr>
            </tbody>
          </table>
        </div>
        <Snippet language="html">
          {`<h1>H1 字体</h1>
<h2>H2 字体</h2>
<h3>H3 字体</h3>
<h4>H4 字体</h4>
<h5>H5 字体</h5>
<h6>H6 字体</h6>`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Paragraphs</i>
          </h5>
        </div>
        <div className="bs-example">
          <h6>Default text 16px</h6>
          <p className="margin-bottom-20">
            P 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>

          <h6>Default text - bold</h6>
          <p className="bold margin-bottom-20">
            P 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>

          <h6>Large text 18px</h6>
          <p className="large margin-bottom-20">
            P Large 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>

          <h6>Large text - bold</h6>
          <p className="large bold margin-bottom-20">
            P Large 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>

          <h6>Small text 12px</h6>
          <p className="small margin-bottom-20">
            P Small 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>

          <h6>Small text - bold</h6>
          <p className="small bold margin-bottom-20">
            P Small 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>

          <h6>Extra small text 10px</h6>
          <p className="extra-small margin-bottom-20">
            P Small 萍方 Light
            者合话包意正立，周众民委放器权，入求热此积。部林段以照增细调也着术，省强火规易儿水重就，次争蠢此扭克象根丽。
          </p>
        </div>
        <Snippet language="html">
          {`<p>者合话包意正立</p>
<p className="bold">者合话包意正立</p>
<p className="large">者合话包意正立</p>
<p className="large bold">者合话包意正立</p>
<p className="small">者合话包意正立</p>
<p className="small bold">者合话包意正立</p>
<p className="extra-small">者合话包意正立</p>`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Link</i>
          </h5>
        </div>
        <div className="bs-example">
          <a
            className="link"
            rel="noopener noreferrer"
            href="http://www.google.com"
            target="_blank"
          >
            普通链接 我的颜色是:#20B1EE
          </a>
          <br />
          <a
            className="link link__deleted"
            rel="noopener noreferrer"
            href="http://www.google.com"
            target="_blank"
          >
            删除链接 我的颜色是:#BA1E40
          </a>
          <br />
          <a
            className="link link__highlight"
            rel="noopener noreferrer"
            href="http://www.google.com"
            target="_blank"
          >
            我是高亮链接
          </a>
          <div className="bg--mid-grey display-table padding-10">
            <a
              className="link link__highlight--white"
              rel="noopener noreferrer"
              href="http://www.google.com"
              target="_blank"
            >
              我是高亮白色链接
            </a>
          </div>
        </div>
        <Snippet language="html">
          {`<a className="link" href="/home">我是普通链接</a>
<a className="link link__highlight" href="/home" >我是高亮链接</a>
<a className="link link__highlight--white" href="/home">我是高亮白色链接</a>`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>ul & ol</i>
          </h5>
        </div>
        <div className="bs-example">
          <ul>
            <li>元素一</li>
            <li>元素二</li>
            <li>元素三</li>
          </ul>
          <ol>
            <li>元素一</li>
            <li>元素二</li>
            <li>元素三</li>
          </ol>
          <ul className="list-unstyled">
            <li>元素一</li>
            <li>元素二</li>
            <li>元素三</li>
          </ul>
        </div>
        <Snippet language="html">
          {`<ul>
  <li>元素一</li>
  <li>元素二</li>
  <li>元素三</li>
</ul>
<ol>
  <li>元素一</li>
  <li>元素二</li>
  <li>元素三</li>
</ol>
<ul className="list-unstyled">
  <li>元素一</li>
  <li>元素二</li>
  <li>元素三</li>
</ul>`}
        </Snippet>
      </div>
    </div>
  </div>
);

export default Typography;
