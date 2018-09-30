import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CircleIcon from "./CircleIcon";
import appCardStatus from "../constants/appCardStatus";

const mapSettingByState = val => {
  const status = val || "default";
  return appCardStatus[status];
};

const AppCard = ({
  status,
  triangleBgColour,
  icon,
  title,
  hint,
  onClick,
  name
}) => {
  const setting = mapSettingByState(status);
  return (
    <a className="app-card" onClick={onClick} name={name}>
      <div
        className={classNames("app-card__triangle", {
          "bg--light-grey": triangleBgColour === "light-grey",
          "bg--white": triangleBgColour === "white"
        })}
      />
      <div className="app-card__wrapper">
        <div className="app-card__content">
          <CircleIcon
            size={80}
            icon={setting.icon || icon}
            customClass={setting.circleIcon}
          />
          <h6 className="blue hidden-xs">{title}</h6>
        </div>
      </div>
      <hr className="hidden-xs" />
      <div className="app-card__feedback text-center">
        <h6 className="blue visible-xs">{title}</h6>
        <div className={`app-card__message ${setting.hint}`}>{hint}</div>
      </div>
    </a>
  );
};

AppCard.propTypes = {
  status: PropTypes.string,
  triangleBgColour: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.node,
  hint: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default AppCard;
