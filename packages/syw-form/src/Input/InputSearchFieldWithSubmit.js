import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InputSearch from "./InputSearch";
import SubmitButton from "../Submit/FormSubmit";

class InputSearchFieldWithSubmit extends PureComponent {
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
        <InputSearch {...inputProps} onPressEnter={this.handleKeyDown} />
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

InputSearchFieldWithSubmit.propTypes = {
  inputProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    rules: PropTypes.array,
    actions: PropTypes.object,
    options: PropTypes.array,
    optionGroupName: PropTypes.string,
    optionLabelProp: PropTypes.string,
    showSearch: PropTypes.bool,
    getPopupContainer: PropTypes.func,
    onChange: PropTypes.func,
    onActions: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func
  }),
  btnProps: PropTypes.shape({
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    loadingText: PropTypes.string,
    onClick: PropTypes.func.isRequired
  })
};

export default InputSearchFieldWithSubmit;
