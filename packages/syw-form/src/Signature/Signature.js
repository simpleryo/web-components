import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, SignaturePad, ContentCard } from "@simpleryo/syw-uikit";
import { validateField } from "../validators";

class Signature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isSubmitting: false,
      submitError: ""
    };
  }
  handleOpenModal = event => {
    event.preventDefault();
    this.setState({ visible: true });
  };

  handleCloseModal = event => {
    event.preventDefault();
    this.setState({ visible: false });
  };

  handleSubmit = file => {
    const {
      name,
      rules,
      onChange,
      signaturePad: { onSubmit }
    } = this.props;
    this.setState({ isSubmitting: true });
    Promise.resolve(onSubmit(file)).then(({ data, error }) => {
      this.setState({ isSubmitting: false });
      if (error) {
        this.setState({ submitError: error });
      } else {
        const fieldError = validateField(rules, data);
        onChange(name, data, fieldError);
        this.setState({ visible: false });
      }
    });
  };

  render() {
    const {
      name,
      value,
      className,
      placeholder = "",
      previewImgAlt = "signature preview",
      signaturePad: {
        title,
        subTitle,
        desc,
        cancelTxt,
        submitTxt,
        submittingTxt,
        waterMarkTxt
      },
      children
    } = this.props;
    const { visible, isSubmitting, submitError } = this.state;

    return (
      <div className={className}>
        <label
          className="signature margin-bottom-10"
          htmlFor={name}
          onClick={this.handleOpenModal}
        >
          {value ? (
            <img src={value} alt={previewImgAlt} />
          ) : (
            <div className="default-label">
              <i className="icon-assist" />
              <p>{placeholder}</p>
            </div>
          )}
        </label>
        {children}
        <Modal
          wrapClassName="modal-fullscreen"
          width="100%"
          mask={false}
          visible={visible}
          footer={false}
          onCancel={this.handleCloseModal}
        >
          {visible && (
            <div className="signature-pad container">
              <ContentCard size="middle" centerAlign>
                {subTitle && (
                  <p className="grey padding-bottom-60">{subTitle}</p>
                )}
                {title && <h2>{title}</h2>}
                {desc && <p>{desc}</p>}
              </ContentCard>
              <div className="row">
                <SignaturePad
                  onSubmit={this.handleSubmit}
                  isSubmitting={isSubmitting}
                  clearBtnTxt={cancelTxt}
                  submitingBtnTxt={submittingTxt}
                  submitBtnTxt={submitTxt}
                  waterMarkTxt={waterMarkTxt}
                  error={submitError}
                />
              </div>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

Signature.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  signaturePad: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    desc: PropTypes.string,
    cancelTxt: PropTypes.string.isRequired,
    submittingTxt: PropTypes.string.isRequired,
    submitTxt: PropTypes.string,
    waterMarkTxt: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }),
  previewImgAlt: PropTypes.string,
  children: PropTypes.node
};

export default Signature;
