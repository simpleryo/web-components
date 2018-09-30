import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import { Button, Upload, Alert } from "@simpleryo/syw-uikit";
import { validators, validateRules } from "@simpleryo/syw-form";
import { imageCompressor } from "@simpleryo/syw-utils";
import generatePictureFileList from "../utils/generatePictureFileList";
import ossFilePathMakeUp from "../utils/ossFilePathMakeUp";
import { getBreakRuleMessage } from "../validators";

const DEFAULT_FAIL_MSG = "Upload failed, please try again";
const iconDoc =
  "https://simpleryo-open.oss-ap-southeast-2.aliyuncs.com/NZ2CN_document_template/icon-doc.jpg";

class UploadFilesField extends PureComponent {
  constructor(props) {
    super(props);
    const { dividedMark, value } = props;
    let fileList = [];
    if (value) {
      fileList = generatePictureFileList(value, dividedMark, iconDoc);
    }
    this.state = {
      uploading: false,
      fileList,
      error: ""
    };
  }

  static getDerivedStateFromProps(props) {
    if (props.error) {
      return {
        error: props.error
      };
    }
    return null;
  }

  updateFieldState = fileList => {
    const { name, dividedMark, onChange = R.F } = this.props;
    const urlList = R.map(
      file =>
        R.path(["response", "content", "url"], file) || R.path(["url"], file),
      fileList
    );
    const value =
      urlList.length > 1 ? R.join(dividedMark, urlList) : urlList[0];
    const error = value ? null : "";
    onChange(name, value, error);
  };

  validate = file => {
    const { rules } = this.props;
    const type = R.path(["type"], file);
    const size = R.path(["size"], file);
    const name = R.path(["name"], file);
    const validateValue = { type, size, name };
    return validators.validateField(rules, validateValue);
  };

  handleChange = ({ file, fileList }) => {
    switch (file.status) {
      case "uploading":
        this.handleUploading(file, fileList);
        break;
      case "done":
        this.handleSuccess(file, fileList);
        break;
      case "error":
        this.handleFail(file, fileList);
        break;
      case "removed":
        this.handleRemoved(file, fileList);
        break;
      default:
    }
  };

  handleBeforeUpload = file => {
    this.setState({ uploading: true });
    return imageCompressor.compress(file);
  };

  handleUploading = (file, fileList) => {
    const { limit } = this.props;
    if (limit && fileList.length > limit) {
      return this.setState({ fileList: R.drop(1, fileList) });
    }

    const error = this.validate(file);
    if (error) {
      return this.setState({
        fileList: R.dropLast(1, fileList),
        error,
        uploading: false
      });
    }

    return this.setState({ fileList, uploading: true });
  };

  handleSuccess = (file, fileList) => {
    let error;
    const { onUploadSucceed = R.F, uploadFailMsg } = this.props;
    const code = R.path(["response", "code"], file);

    let nextFileList = R.map(nextFile => {
      const content = R.pathOr({}, ["response", "content"], nextFile);
      const type = R.pathOr(null, ["type"], nextFile);
      if (R.isNil(type)) {
        return nextFile;
      }
      return {
        ...nextFile,
        url: content.url,
        thumbUrl: R.contains(
          validateRules.FILE_TYPE_MAPPING[type],
          validateRules.NON_IMAGE_FILE_TYPE_LIST
        )
          ? iconDoc
          : ossFilePathMakeUp(content.url) || file.thumbUrl
      };
    }, fileList);

    if (code === 0) {
      error = null;
      this.updateFieldState(nextFileList);
    } else {
      error = R.pathOr(
        uploadFailMsg || DEFAULT_FAIL_MSG,
        ["response", "msg"],
        file
      );
      nextFileList = R.dropLast(1, nextFileList);
    }

    this.setState({ error, fileList: nextFileList, uploading: false });
    onUploadSucceed(R.pathOr({}, ["response"], file));
  };

  handleFail = (file, fileList) => {
    const { onUploadFailed = R.F, uploadFailMsg } = this.props;
    const error = R.pathOr(
      uploadFailMsg || DEFAULT_FAIL_MSG,
      ["response", "msg"],
      file
    );
    this.setState({
      error,
      fileList: R.dropLast(1, fileList),
      uploading: false
    });
    onUploadFailed(R.pathOr({}, ["response"], file));
  };

  handleRemoved = (file, fileList) => {
    const { onRemoveFile = R.F } = this.props;
    this.updateFieldState(fileList);
    this.setState({ fileList, error: null });
    onRemoveFile(file);
  };

  render() {
    const {
      buttonType = "default",
      label,
      hint,
      rules,
      uploadParams
    } = this.props;
    const { error, uploading } = this.state;

    let errorMessage;

    if (error) {
      errorMessage = getBreakRuleMessage(rules, error) || error;
    }
    return (
      <Fragment>
        <Upload
          {...uploadParams}
          beforeUpload={this.handleBeforeUpload}
          fileList={this.state.fileList}
          onChange={this.handleChange}
        >
          <Button size="small" type={buttonType} loading={uploading}>
            {label || "Upload"}
          </Button>
        </Upload>
        {hint && <p className="small form-group__message">{hint}</p>}
        {errorMessage && <Alert message={errorMessage} />}
      </Fragment>
    );
  }
}

UploadFilesField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  buttonType: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.node,
  rules: PropTypes.array,
  limit: PropTypes.number,
  uploadFailMsg: PropTypes.string,
  onChange: PropTypes.func,
  onUploadSucceed: PropTypes.func,
  onUploadFailed: PropTypes.func,
  onRemoveFile: PropTypes.func,
  dividedMark: PropTypes.string.isRequired,
  uploadParams: PropTypes.object.isRequired
};

export default UploadFilesField;
