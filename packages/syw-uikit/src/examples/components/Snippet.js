import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/styles";

export const Snippet = ({ children, language }) => (
  <figure className="highlight">
    <SyntaxHighlighter
      style={tomorrowNightEighties}
      language={language}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  </figure>
);

Snippet.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired
};
