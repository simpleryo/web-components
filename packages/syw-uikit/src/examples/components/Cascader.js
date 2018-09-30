import React from "react";
import { Cascader } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const options = [
  {
    value: "zhejiang",
    label: "浙江",
    children: [
      {
        value: "hangzhou",
        label: "杭州",
        children: [
          {
            value: "xihu",
            label: "西湖"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "江苏如求",
    children: [
      {
        value: "nanjing",
        label: "南京 如求头备长五保",
        children: [
          {
            value: "zhonghuamen",
            label: "中华门 如求头备长五保"
          }
        ]
      }
    ]
  },
  {
    value: "beijing",
    label: "北京",
    children: [
      {
        value: "hangzhou",
        label: "杭州",
        children: [
          {
            value: "xihu",
            label: "西湖"
          }
        ]
      }
    ]
  }
];

function onChange(value) {
  console.log(value);
}

const CascaderDemo = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Cascader级联选择</h4>
        <p>级联选择框。</p>
        <h5>何时使用</h5>
        <ul>
          <li>
            需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
          </li>
          <li>
            从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
          </li>
          <li>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
        </ul>
        <p className="full-width margin-bottom-20">
          详细API请查询{" "}
          <a
            className="link link__highlight"
            href="http://2x.ant.design/components/cascader/"
            target="_blank"
          >
            Ant Cascader
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

      <div className="bs-example">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="请选择"
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="请输入/选择"
              showSearch
            />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Cascader } from '@simpleryo/syw-uikit';
<Cascader options={options} onChange={onChange} placeholder="请选择" />
<Cascader
  options={options}
  onChange={onChange}
  placeholder="请输入/选择"
  showSearch
/>
`}
      </Snippet>
    </div>
  </Layout>
);

export default CascaderDemo;
