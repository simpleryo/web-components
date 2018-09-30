import React, { Component } from "react";
import PropTypes from "prop-types";
// Import directly from js file as the package's 'module' is in ES6,
// which is not supported by UglifyJsPlugin.
import H5SignaturePad from "signature_pad/dist/signature_pad.min";
import "blueimp-canvas-to-blob";
import { Button, ContentCard, Alert } from "../syw-uikit";

export default class SignaturePad extends Component {
  constructor(props) {
    super(props);
    this.signaturePad = null;
    this.canvasSize = {
      mobileS: {
        width: 260,
        height: 130,
        waterMark: { fontSize: 18, padding: 1 }
      },
      mobileM: {
        width: 315,
        height: 157,
        waterMark: { fontSize: 18, padding: 1 }
      },
      mobileL: {
        width: 480,
        height: 240,
        waterMark: { fontSize: 18, padding: 10 }
      },
      pc: { width: 660, height: 330, waterMark: { fontSize: 24, padding: 20 } }
    };
  }

  componentDidMount() {
    const signPadConfig = {
      backgroundColor: "rgba(0,0,0,0)"
    };
    this.signaturePad = new H5SignaturePad(this.canvasDom, signPadConfig);
    this.renderWaterMark();
    window.addEventListener("resize", this.resizeCanvas);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeCanvas);
  }

  // According to the document of signature_pad, the canvas has to re-render if size changes.
  resizeCanvas = () => {
    const canvasSizeType = this.getCanvasSizeType();
    const { width, height } = this.canvasSize[canvasSizeType];
    this.signaturePad.canvas.width = width;
    this.signaturePad.canvas.height = height;
    this.renderWaterMark();
  };

  getCanvasSizeType = () => {
    const width = window.innerWidth;
    if (width > 767) {
      return "pc";
    } else if (width > 568) {
      return "mobileL";
    } else if (width > 375) {
      return "mobileM";
    }
    return "mobileS";
  };

  renderWaterMark = () => {
    if (this.signaturePad) {
      const { waterMarkTxt } = this.props;
      const canvasSizeType = this.getCanvasSizeType();
      const ctx = this.signaturePad.canvas.getContext("2d");
      const {
        width,
        height,
        waterMark: { fontSize, padding }
      } = this.canvasSize[canvasSizeType];
      ctx.font = `300 ${fontSize}px "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, sans-serif`;
      ctx.fillStyle = "#B9B9B9";
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText(waterMarkTxt, width - padding, height - padding);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    this.signaturePad.canvas.toBlob(blob => {
      const file = new File([blob], "signature.png", {
        type: "image/png",
        lastModified: Date.now()
      });
      onSubmit(file);
    });
  };

  onClear = event => {
    event.preventDefault();
    this.signaturePad.clear();
    this.renderWaterMark();
  };

  render() {
    const {
      isSubmitting = false,
      clearBtnTxt = "Re-sign",
      submitingBtnTxt = "Submiting",
      submitBtnTxt = "Submit",
      error
    } = this.props;
    const canvasSizeType = this.getCanvasSizeType();
    const { width, height } = this.canvasSize[canvasSizeType];
    return (
      <div className="signature-pad__container col-xs-12">
        <div className="pad">
          <canvas
            width={width}
            height={height}
            ref={c => {
              this.canvasDom = c;
            }}
          />
          <div className="underline" />
        </div>
        <ContentCard size="middle" centerAlign>
          <div className="row">
            <div className="col-xs-12">
              <Button
                className="pull-left"
                id="signature"
                size="small"
                onClick={this.onClear}
              >
                {clearBtnTxt}
              </Button>
              <Button
                className="pull-right"
                type="primary"
                size="small"
                onClick={this.handleSubmit}
                loading={isSubmitting}
              >
                {isSubmitting ? submitingBtnTxt : submitBtnTxt}
              </Button>
            </div>
            {error && <Alert className="col-xs-12" message={error} />}
          </div>
        </ContentCard>
      </div>
    );
  }
}

SignaturePad.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  clearBtnTxt: PropTypes.string,
  submitingBtnTxt: PropTypes.string,
  submitBtnTxt: PropTypes.string,
  waterMarkTxt: PropTypes.string,
  error: PropTypes.string
};
