import React, { Fragment } from "react";
import PromotionCode from "../../js/components/PromotionCode";
import { Snippet } from "./Snippet";

const PromotionCodeDemo = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Promotion Code 打折码</h4>
        <p>适用与打折活动及推广</p>
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
            <PromotionCode
              discount="30%"
              promoCode="EGFF12"
              expiryDate="2018/12/30"
            />
          </div>
        </div>
      </div>

      <Snippet language="html">
        {`import { PromotionCode } from '@simpleryo/syw-uikit';
<PromotionCode
  discount="30%"
  promoCode="EGFF12"
  expiryDate="2018/12/30"
/>`}
      </Snippet>
    </div>
  </Fragment>
);

export default PromotionCodeDemo;
