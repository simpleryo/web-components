import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import R from "ramda";
import { Button } from "@simpleryo/syw-uikit";
import * as actionCreators from "../actions";

class ResetButton extends Component {
  handleClick = event => {
    event.preventDefault();
    const { formName, onClick = R.F, dispatchResetForm } = this.props;
    dispatchResetForm(formName);
    onClick(formName);
  };
  render() {
    const { id, className, type, size, text } = this.props;
    return (
      <Button
        id={id}
        className={classnames("reset-btn", className)}
        type={type}
        size={size}
        onClick={this.handleClick}
      >
        {text}
      </Button>
    );
  }
}

ResetButton.propTypes = {
  id: PropTypes.string,
  formName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.node,
  onClick: PropTypes.func,
  dispatchResetForm: PropTypes.func
};

const mapDispatchToProps = {
  dispatchResetForm: actionCreators.resetForm
};

export default connect(null, mapDispatchToProps)(ResetButton);
