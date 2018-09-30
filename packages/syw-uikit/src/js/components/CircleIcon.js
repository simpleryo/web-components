import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CircleIcon = ({
  type = "default",
  size = 36,
  icon,
  customClass,
  status = "default",
  children
}) => {
  if (type === "number") {
    return (
      <i
        className={`circle-icon ${customClass} circle-icon--numbersize-${size}`}
      >
        {children}
      </i>
    );
  } else if (type === "status") {
    return (
      <div
        className={`status-circle-icon status-circle-icon--${status} status-circle-icon--size-${size}`}
      >
        <i
          className={`circle-icon ${customClass} circle-icon--numbersize-${size}`}
        >
          {children}
        </i>
        <div />
      </div>
    );
  }
  return (
    <i
      className={classNames("circle-icon", {
        [customClass]: customClass,
        [icon]: icon,
        [`circle-icon--size-${size}`]: size
      })}
    >
      {children}
    </i>
  );
};

CircleIcon.propTypes = {
  link: PropTypes.string,
  linkTarget: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string,
  customClass: PropTypes.string,
  status: PropTypes.string,
  children: PropTypes.node
};

export default CircleIcon;
