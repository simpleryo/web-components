import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import R from "ramda";
import { Markdown } from "@simpleryo/syw-uikit";
import { RULE_REQUIRED } from "../validators/rules";
import { getBreakRuleMessage } from "../validators";

const FieldTheme = ({
  children,
  className,
  rules,
  label,
  description,
  hint,
  error
}) => {
  let errorType;
  let errorMessage;

  if (R.not(R.isNil(error))) {
    errorMessage = getBreakRuleMessage(rules, error);
  }

  if (error) {
    errorType = error === RULE_REQUIRED ? "warning" : "error";
  }

  return (
    <div
      className={classNames("form-group", className, {
        "has-error": errorType === "error",
        "has-warning": errorType === "warning"
      })}
    >
      {label && <label className="form-group__title">{label}</label>}

      {description && (
        <div className="small">
          <Markdown text={description} />
        </div>
      )}

      {children}

      {hint && <p className="small form-group__message">{hint}</p>}

      {errorMessage && (
        <p className="small form-group__message">{errorMessage}</p>
      )}
    </div>
  );
};

FieldTheme.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rules: PropTypes.array,
  label: PropTypes.node,
  description: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.node
};

export default FieldTheme;
