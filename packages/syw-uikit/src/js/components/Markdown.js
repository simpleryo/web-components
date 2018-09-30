import React from "react";
import PropTypes from "prop-types";
import ReactMarkDown from "react-markdown";
import classnames from "classnames";
import { mergeDeepRight } from "ramda";

const Link = ({ linkProps = {}, href, children }) => {
  const mergedProps = linkProps.onClick
    ? { ...linkProps }
    : {
        href,
        target: "_blank",
        ...linkProps
      };
  return <a {...mergedProps}>{children}</a>;
};

Link.propTypes = {
  linkProps: PropTypes.object,
  href: PropTypes.string,
  children: PropTypes.node
};

const Markdown = ({ text, linkProps = {}, className, ...restProps }) => {
  const defaultProps = mergeDeepRight(
    {
      className: classnames("markdown-container", className),
      source: text,
      renderers: {
        link: props => <Link linkProps={linkProps} {...props} />
      }
    },
    restProps
  );
  return <ReactMarkDown {...defaultProps} />;
};

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  linkProps: PropTypes.object
};

export default Markdown;
