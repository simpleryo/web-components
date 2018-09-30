import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import R from "ramda";
import { Button } from "@simpleryo/syw-uikit";

class SubmitButton extends Component {
  handleClick = event => {
    event.preventDefault();
    const { formName, onClick = R.F } = this.props;
    onClick(formName);
  };
  render() {
    const {
      id,
      className,
      type,
      htmlType = "submit",
      size,
      isSubmitting = false,
      text,
      loadingText,
      submittable
    } = this.props;
    return (
      <Button
        id={id}
        className={classnames("submit-btn", className)}
        type={type}
        htmlType={htmlType}
        size={size}
        loading={isSubmitting}
        disabled={R.not(submittable)}
        onClick={this.handleClick}
      >
        {isSubmitting ? loadingText : text}
      </Button>
    );
  }
}

SubmitButton.propTypes = {
  id: PropTypes.string,
  formName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  size: PropTypes.string,
  isSubmitting: PropTypes.bool,
  text: PropTypes.node,
  loadingText: PropTypes.node,
  onClick: PropTypes.func,
  submittable: PropTypes.bool
};

const mapStateToProps = ({ form }, { formName }) => ({
  submittable: (form[formName] || {}).submittable,
  isSubmitting: (form[formName] || {}).isSubmitting
});

export default connect(mapStateToProps)(SubmitButton);
