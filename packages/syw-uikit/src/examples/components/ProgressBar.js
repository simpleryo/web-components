import React, { Fragment } from "react";
import { Progress } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const ProgressBar = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Progress bar 进度条</h4>
        <p>展示操作的当前进度。</p>
        <h5>何时使用</h5>
        <p className="full-width margin-bottom-20">
          在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。{" "}
          <a
            className="link link__highlight"
            rel="noopener noreferrer"
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
            <Progress strokeLinecap="square" percent={30} />
            <Progress strokeLinecap="square" percent={50} status="active" />
            <Progress strokeLinecap="square" percent={100} />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Progress } from '@simpleryo/syw-uikit';
<!-- Static style -->
<Progress strokeLinecap="square" percent={30} />
<!-- Active style -->
<Progress strokeLinecap="square" percent={50} status="active" />
<!-- Completed style -->
<Progress strokeLinecap="square" percent={100} />`}
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
            <Progress strokeLinecap="square" percent={30} showInfo={false} />
            <Progress
              strokeLinecap="square"
              percent={50}
              status="active"
              showInfo={false}
            />
            <Progress strokeLinecap="square" percent={100} showInfo={false} />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Progress } from '@simpleryo/syw-uikit';
<!-- Static style -->
<Progress strokeLinecap="square" percent={30} showInfo={false} />
<!-- Active style -->
<Progress strokeLinecap="square" percent={50} status="active" showInfo={false}/>
<!-- Completed style -->
<Progress strokeLinecap="square" percent={100} showInfo={false}/>`}
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
          <div className="col-sm-4 col-xs-12">
            <Progress
              strokeLinecap="square"
              type="circle"
              percent={30}
              width={80}
            />
          </div>
          <div className="col-sm-4 col-xs-12">
            <Progress
              strokeLinecap="square"
              type="circle"
              percent={70}
              width={80}
              status="exception"
            />
          </div>
          <div className="col-sm-4 col-xs-12">
            <Progress
              strokeLinecap="square"
              type="circle"
              percent={100}
              width={80}
            />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { Progress } from '@simpleryo/syw-uikit';
<!-- Static style -->
<Progress strokeLinecap="square" type="circle" percent={30} width={80} />
<!-- Error style -->
<Progress strokeLinecap="square" type="circle" percent={70} width={80} status="exception" />
<!-- Completed style -->
<Progress strokeLinecap="square" type="circle" percent={100} width={80} />`}
      </Snippet>
    </div>
  </Fragment>
);

export default ProgressBar;
