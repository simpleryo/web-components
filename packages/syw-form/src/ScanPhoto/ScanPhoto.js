import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import classNames from "classnames";
import { Progress, Alert } from "@simpleryo/syw-uikit";
import { imageCompressor } from "@simpleryo/syw-utils";
import { validateField, getBreakRuleMessage } from "../validators";
import calculateDummyPercent from "../utils/calculateDummyPercent";

const PROGRESS_DEFAULT_PERCENT = 0;
const PROGRESS_CHANGE_INTERVAL = 100;
const PROGRESS_TOTOL_TIME = 4000;

class ScanPhoto extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = undefined;
    this.state = {
      error: "",
      progress: {}
    };
  }

  componentDidUpdate() {
    if (this.state.progress.percent === PROGRESS_DEFAULT_PERCENT) {
      this.startInterval();
    }
  }

  startInterval = () => {
    this.stopInterval();
    this.timer = setInterval(() => {
      const { progress: prevProgress } = this.state;
      const { percent: prevPercent } = prevProgress;
      this.setState({
        progress: {
          ...prevProgress,
          percent: calculateDummyPercent(
            prevPercent,
            PROGRESS_CHANGE_INTERVAL,
            PROGRESS_TOTOL_TIME
          )
        }
      });
    }, 100);
  };

  stopInterval = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  validate = file => {
    const { rules } = this.props;
    const validateValue = {
      type: file.type,
      size: file.size
    };
    return validateField(rules, validateValue);
  };

  handleFileChange = event => {
    const { target } = event;
    const { files } = target;
    const {
      onScan = R.F,
      onScanResponse = R.F,
      progressMessages = {}
    } = this.props;

    const error = this.validate(files[0]);
    if (error) {
      return this.setState({ error });
    }

    this.setState({
      error,
      progress: {
        ...this.state.progress,
        status: "active",
        percent: PROGRESS_DEFAULT_PERCENT,
        message: progressMessages.active
      }
    });

    return imageCompressor
      .compress(files[0])
      .then(compressedFile => onScan(compressedFile))
      .then(
        res => {
          this.stopInterval();
          const {
            data: { code }
          } = res;

          const { progress: prevProgress } = this.state;
          const { percent: prevPercent } = prevProgress;

          const status = code === 0 ? "success" : "exception";
          const percent = code === 0 ? 100 : prevPercent;
          const message =
            code === 0 ? progressMessages.success : progressMessages.exception;

          this.setState({
            progress: {
              ...prevProgress,
              status,
              percent,
              message
            }
          });

          onScanResponse(res.data);
        },
        () => {
          this.stopInterval();
          this.setState({
            progress: {
              ...this.state.progress,
              status: "exception",
              message: progressMessages.exception
            }
          });
        }
      );
  };

  render() {
    const { className, label, rules, hint, sampleImg } = this.props;
    const { progress = {} } = this.state;
    const errorMsg = this.state.error
      ? getBreakRuleMessage(rules, this.state.error)
      : undefined;
    return (
      <Fragment>
        {sampleImg && (
          <div className="ocr-sample margin-bottom-20">
            <img src={sampleImg} alt="Sample" />
          </div>
        )}
        <div
          className={classNames(
            "padding-top-10 padding-bottom-10 ant-btn ant-btn-sm",
            className,
            {
              disabled: progress.status === "active"
            }
          )}
        >
          <span>{label}</span>
          <input
            type="file"
            className="upload-file__input"
            onChange={this.handleFileChange}
          />
        </div>

        {hint && <p className="small form-group__message">{hint}</p>}

        {errorMsg && <Alert message={errorMsg} type="error" showIcon />}

        {!errorMsg &&
          R.not(R.isEmpty(progress)) && (
            <div
              className={classNames("margin-top-20", {
                "has-error": progress.status === "exception"
              })}
            >
              <Progress
                percent={Math.floor(progress.percent)}
                status={progress.status}
              />

              {progress.message && (
                <p className="small form-group__message">{progress.message}</p>
              )}
            </div>
          )}
        <hr className="margin-top-40 margin-bottom-0" />
      </Fragment>
    );
  }
}

ScanPhoto.propTypes = {
  label: PropTypes.string,
  rules: PropTypes.array,
  hint: PropTypes.string,
  sampleImg: PropTypes.string,
  progressMessages: PropTypes.object,
  onScan: PropTypes.func.isRequired,
  onScanResponse: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default ScanPhoto;
