import React from "react";
import PropTypes from "prop-types";
import { Badge } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const Badges = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Badge 徽标数</h4>
        <p>Small numerical value or status descriptor for UI elements.</p>
        <h5>When To Use</h5>
        <p>
          Badge normally appears in proximity to notifications or user avatars
          with eye-catching appeal, typically displaying unread messages count.{" "}
          <a
            className="link link__highlight"
            href="https://ant.design/components/badge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Badge API Doc
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
              <Badge count={5}>
                <a href="#" className="head-example" />
              </Badge>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Badge } from "../../js/syw-uikit";
<Badge count={5}>
  <a href="#" className="head-example" />
</Badge>
`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Standalone</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Badge count={25} />
              <Badge
                count={4}
                style={{
                  backgroundColor: "#fff",
                  color: "#999",
                  boxShadow: "0 0 0 1px #d9d9d9 inset"
                }}
              />
              <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Badge } from "../../js/syw-uikit";
<Badge count={25} />
<Badge
  count={4}
  style={{
    backgroundColor: "#fff",
    color: "#999",
    boxShadow: "0 0 0 1px #d9d9d9 inset"
  }}
/>
<Badge count={109} style={{ backgroundColor: "#52c41a" }} />
`}
        </Snippet>
      </div>

      <div className="col-xs-12 margin-top-20 margin-bottom-20">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Status</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-12">
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="default" />
              <Badge status="processing" />
              <Badge status="warning" />
              <br />
              <Badge status="success" text="Success" />
              <br />
              <Badge status="error" text="Error" />
              <br />
              <Badge status="default" text="Default" />
              <br />
              <Badge status="processing" text="Processing" />
              <br />
              <Badge status="warning" text="Warning" />
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`import { Badge } from "../../js/syw-uikit";
<Badge status="success" />
<Badge status="error" />
<Badge status="default" />
<Badge status="processing" />
<Badge status="warning" />
<Badge status="success" text="Success" />
<Badge status="error" text="Error" />
<Badge status="default" text="Default" />
<Badge status="processing" text="Processing" />
<Badge status="warning" text="Warning" />
`}
        </Snippet>
      </div>
    </div>
  </Layout>
);

Badges.propTypes = {
  layout: PropTypes.any
};
export default Badges;
