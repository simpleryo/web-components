import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import copy from "copy-to-clipboard";

const CopyToClipboard = ({
  text = "",
  linkText,
  className,
  onCopy = () => {}
}) => (
  <a
    className={classNames("link link__highlight", className)}
    onClick={() => {
      copy(text);
      onCopy(text);
    }}
  >
    {linkText}
  </a>
);

CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  className: PropTypes.string,
  onCopy: PropTypes.func
};
export default CopyToClipboard;
