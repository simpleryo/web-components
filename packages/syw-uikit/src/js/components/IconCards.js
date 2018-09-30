import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CircleIcon from "./CircleIcon";

const IconCard = ({
  icon,
  iconSize = 80,
  iconClassName = "white bg--dark-grey",
  titleClassName = "",
  descClassName = "",
  responsive = false,
  vertical = false,
  title,
  description
}) => {
  let containerClass = "icon-card";
  let wrapperClass = "";
  let detailClass = "";
  if (vertical) {
    containerClass = "vertical-icon-card";
    wrapperClass = "vertical-icon-card__wrapper";
    detailClass = "vertical-icon-card__detail";
  } else if (responsive) {
    containerClass = "responsive-icon-card";
    wrapperClass = "responsive-icon-card__wrapper";
    detailClass = "responsive-icon-card__detail";
  }
  return (
    <div className={containerClass}>
      {typeof icon === "string" ? (
        <CircleIcon size={iconSize} icon={icon} customClass={iconClassName} />
      ) : (
        icon
      )}
      <div className={wrapperClass}>
        <div className={detailClass}>
          <div className={classNames("title", titleClassName)}>{title}</div>
          <div className={classNames("desc", descClassName)}>{description}</div>
        </div>
      </div>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  descClassName: PropTypes.string,
  responsive: PropTypes.bool,
  vertical: PropTypes.bool,
  title: PropTypes.any,
  description: PropTypes.any
};

export default IconCard;
