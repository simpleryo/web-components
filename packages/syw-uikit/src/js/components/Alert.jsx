import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AntdAlert } from "../syw-uikit";

const AlertWithTitle = ({ className = "", type = "error", message = "" }) => (
  <div className={classnames("margin-top-20", className)}>
    <AntdAlert showIcon type={type} message={message} />
  </div>
);

AlertWithTitle.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  message: PropTypes.any
};

export default AlertWithTitle;
