import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

const gradientMap = {
  light: "gradient gradient--light",
  dark: "gradient gradient--dark",
  airline: "gradient gradient--airline"
};

const cloudMap = {
  white: "cloud cloud--white",
  grey: "cloud cloud--grey"
};

export const CrossCenterContent = ({ children }) => (
  <div className="content__table">
    <div className="content__table-cell">{children}</div>
  </div>
);

CrossCenterContent.propTypes = {
  children: PropTypes.node
};

const ImageBanner = ({
  link,
  linkTarget = "_blank",
  customClass = "bg--mid-grey",
  backgroudImg,
  cloud,
  gradient,
  children
}) => {
  const bg = backgroudImg ? { backgroundImage: `url(${backgroudImg}) ` } : {};
  return (
    <div
      className={classNames("banner", {
        [customClass]: customClass
      })}
      style={bg}
    >
      {gradientMap[gradient] && <div className={gradientMap[gradient]} />}
      {cloudMap[cloud] && <div className={cloudMap[cloud]} />}
      <div className="banner__content">{children}</div>
      {link && <Link to={link} target={linkTarget} className="banner__link" />}
    </div>
  );
};

ImageBanner.propTypes = {
  link: PropTypes.string,
  linkTarget: PropTypes.string,
  customClass: PropTypes.string,
  backgroudImg: PropTypes.string,
  cloud: PropTypes.string,
  gradient: PropTypes.string,
  children: PropTypes.node
};

export default ImageBanner;
