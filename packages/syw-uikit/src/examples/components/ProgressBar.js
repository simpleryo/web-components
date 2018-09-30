import React from "react";
import { Progress } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const ProgressBar = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Progress bar 进度条</h4>
        <p>展示操作的当前进度。</p>
        <h5>何时使用</h5>
        <p className="full-width margin-bottom-20">
          在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。{" "}
          <a
            className="link link__highlight"
            href="https://ant.design/components/progress-cn/"
            target="_blank"
          >
            Ant Progress
          </a>
        </p>
        <hr />
      </div>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Basic Style</i>
        </h5>
      </div>

      <div className="bs-example">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={100} />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Progress } from '@simpleryo/syw-uikit';
<!-- Static style -->
<Progress percent={30} />
<!-- Active style -->
<Progress percent={50} status="active" />
<!-- Completed style -->
<Progress percent={100} />`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Without information</i>
        </h5>
      </div>

      <div className="bs-example">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <Progress percent={30} showInfo={false} />
            <Progress percent={50} status="active" showInfo={false} />
            <Progress percent={100} showInfo={false} />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Progress } from '@simpleryo/syw-uikit';
<!-- Static style -->
<Progress percent={30} showInfo={false} />
<!-- Active style -->
<Progress percent={50} status="active" showInfo={false} />
<!-- Completed style -->
<Progress percent={100} showInfo={false} />`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Circle style</i>
        </h5>
      </div>

      <div className="bs-example">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <Progress type="circle" percent={75} width={60} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <Progress type="circle" percent={100} width={60} />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Progress } from '@simpleryo/syw-uikit';
<!-- Static style -->
<Progress type="circle" percent={75} width={60} />
<!-- Completed style -->
<Progress type="circle" percent={100} width={60} />`}
      </Snippet>
    </div>
  </Layout>
);

export default ProgressBar;
