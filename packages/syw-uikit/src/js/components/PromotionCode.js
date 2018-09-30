import React from "react";
import PropTypes from "prop-types";

const PromotionCode = ({ discount = "", promoCode = "", expiryDate = "" }) => (
  <div className="promotion-code">
    <div className="promotion-code__wrapper">
      <div className="promotion-code__discount-panel">
        <div className="discount-panel--content">
          <h5 className="white">
            {discount}
            <br />OFF
          </h5>
        </div>
      </div>
      <div className="promotion-code__info-panel">
        <div className="info-panel--content">
          <p className="small bold">乐优服务{discount}优惠服务</p>
          <p className="small">优惠码: {promoCode}</p>
          <p className="small">有效期: {expiryDate}</p>
        </div>
      </div>
      <div className="clearfix" />
    </div>
    <div className="promotion-code__dot-line" />
  </div>
);

PromotionCode.propTypes = {
  discount: PropTypes.string,
  promoCode: PropTypes.string,
  expiryDate: PropTypes.string
};

export default PromotionCode;
