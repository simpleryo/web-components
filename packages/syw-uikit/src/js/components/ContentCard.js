import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ContentCard = ({ size, className, centerAlign, children }) => (
  <div className={classNames("content-card row", className)}>
    <div
      className={classNames("content-card__wrapper col-xs-12", {
        "col-sm-10 col-md-9": size === "middle",
        "col-sm-8 col-md-6": size === "small"
      })}
    >
      <div
        className={classNames("content-card__content", {
          "text-left": !centerAlign,
          "text-center": centerAlign
        })}
      >
        {children}
      </div>
    </div>
  </div>
);

ContentCard.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  centerAlign: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default ContentCard;
