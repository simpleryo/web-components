import React from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Steps } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const dummySteps = [
  { id: 0, title: "填写账号", description: "这里是描述..." },
  { id: 1, title: "重置密码", description: "01/05/2018 09:12:56" },
  { id: 2, title: "完成申请", description: "完成申请描述" },
  { id: 3, title: "重置密码", description: "01/05/2018 09:12:56" },
  { id: 4, title: "完成申请", description: "这里是描述" }
];

const dummySteps2 = [
  { id: 0, title: "填写账号", description: "这里是描述..." },
  { id: 1, title: "重置密码", description: "01/05/2018 09:12:56" },
  { id: 2, title: "完成申请", description: "完成申请描述" }
];

const StepProgress = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Step progress 步骤条</h4>
        <p>引导用户按照流程完成任务的导航条。</p>
        <h5>何时使用</h5>
        <p className="full-width margin-bottom-20">
          当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。{" "}
          <a
            className="link link__highlight"
            href="https://ant.design/components/steps-cn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ant Steps
          </a>
        </p>
        <hr />
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Horizontal Style</i>
          </h5>
        </div>

        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <h6>Default Size:</h6>
              <Steps current={1}>
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps2
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Normal Size with Description:</h6>
              <Steps current={2} status="error">
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Small Size:</h6>
              <Steps current={1} size="small">
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps2
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Small Size with Description:</h6>
              <Steps current={2} status="error" size="small">
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Steps } from '@simpleryo/syw-uikit';
<Steps current={0}>
  <Steps.Step title="填写账号" />
  <Steps.Step title="重置密码" />
  ...
</Steps>
`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Vertical style</i>
          </h5>
        </div>

        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Steps direction="vertical" current={1}>
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps2
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <Steps direction="vertical" current={2} status="error">
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <h6>Small Size: </h6>
              <Steps direction="vertical" current={1} size="small">
                {map(
                  step => <Steps.Step key={step.id} title={step.title} />,
                  dummySteps2
                )}
              </Steps>
            </div>

            <div className="col-xs-12 margin-top-20">
              <Steps
                direction="vertical"
                current={2}
                size="small"
                status="error"
              >
                {map(
                  step => (
                    <Steps.Step
                      key={step.id}
                      title={step.title}
                      description={step.description}
                    />
                  ),
                  dummySteps
                )}
              </Steps>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Steps } from '@simpleryo/syw-uikit';
<Steps direction="vertical" current={0} size="small" status="error">
  <Steps.Step title="填写账号" description="01/05/2018 09:12:56" />
  <Steps.Step title="重置密码" description="01/05/2018 09:12:56" />
  ...
</Steps>
`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Color Contrast Style (Horizontal)</i>
          </h5>
        </div>

        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12 bg--red">
              <div className="margin-bottom-25 margin-top-25 light-steps">
                <Steps current={1}>
                  {map(
                    step => (
                      <Steps.Step
                        key={step.id}
                        title={step.title}
                        description={step.description}
                      />
                    ),
                    dummySteps2
                  )}
                </Steps>
              </div>
            </div>

            <div className="col-xs-12 bg--red">
              <div className="margin-bottom-25 margin-top-25 light-steps">
                <Steps current={2} status="error">
                  {map(
                    step => (
                      <Steps.Step
                        key={step.id}
                        title={step.title}
                        description={step.description}
                      />
                    ),
                    dummySteps
                  )}
                </Steps>
              </div>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Steps } from '@simpleryo/syw-uikit';
<div className="light-steps">
  <Steps current={2}>
    <Steps.Step title="填写账号" description="01/05/2018 09:12:56" />
    <Steps.Step title="重置密码" description="01/05/2018 09:12:56" />
    ...
  </Steps>
</div>
`}
        </Snippet>
      </div>
    </div>
  </Layout>
);

StepProgress.propTypes = {
  layout: PropTypes.any
};
export default StepProgress;
