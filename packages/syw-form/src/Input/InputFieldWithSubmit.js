import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import SubmitButton from "../Submit/FormSubmit";

class InputFieldWithSubmit extends PureComponent {
  handleKeyDown = event => {
    const {
      btnProps: { onClick }
    } = this.props;
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  render() {
    const {
      btnProps: { className, type, text, loadingText, onClick },
      inputProps
    } = this.props;

    return (
      <div className="input-cta">
        <Input {...inputProps} onPressEnter={this.handleKeyDown} />
        <span className="input-cta-btn input-cta-btn--no-gap">
          <SubmitButton
            className={className}
            type={type}
            size="small"
            text={text}
            loadingText={loadingText}
            onClick={onClick}
          />
        </span>
      </div>
    );
  }
}

InputFieldWithSubmit.propTypes = {
  inputProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    rules: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    actions: PropTypes.object,
    onActions: PropTypes.func
  }),
  btnProps: PropTypes.shape({
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    loadingText: PropTypes.string,
    onClick: PropTypes.func.isRequired
  })
};

export default InputFieldWithSubmit;
