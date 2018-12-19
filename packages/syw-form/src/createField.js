import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import R from "ramda";
import getDisplayName from "./utils/getDisplayName";
import * as actionCreators from "./actions";
import { RULE_REQUIRED } from "./validators/rules";
import { REDUCER_NAME } from "./reducers";
import { FIELD_ACTION, FIELD_TYPE } from "./Field/type";
import InputSearch from "./Input/InputSearch";
import Input from "./Input/Input";
import InputFieldWithSubmit from "./Input/InputFieldWithSubmit";
import InputSearchFieldWithSubmit from "./Input/InputSearchFieldWithSubmit";
import Signature from "./Signature/Signature";
import Radio from "./Radio/Radio";
import Checkbox from "./Checkbox/Checkbox";
import Select from "./Select/Select";
import Cascader from "./Cascader/Cascader";
import SMSCode from "./SMSCode/SMSCode";
import UploadFiles from "./UploadFiles/UploadFiles";
import DatepickerRange from "./Datepicker/DatepickerRange";

const createField = WrappedComponent => {
  class CreateField extends PureComponent {
    register = () => {
      const {
        formName,
        name,
        defaultValue,
        type,
        rules = [],
        dispatchRegisterField
      } = this.props;
      const isRequired = R.find(R.propEq("name", RULE_REQUIRED))(rules);
      dispatchRegisterField({ name, type, defaultValue, isRequired }, formName);
    };

    unregister = () => {
      const { formName, name, dispatchUnregisterField } = this.props;
      dispatchUnregisterField({ name }, formName);
    };

    handleChange = (name, value, error) => {
      const { formName, dispatchUpdateField, onChange = R.F } = this.props;
      dispatchUpdateField({ name, value, error }, formName);
      onChange(value, error);
    };

    handleSelect = value => {
      const {
        formName,
        dispatchUpdateFieldByAction,
        onSelect = R.F
      } = this.props;
      const actionConfig = R.path(["actions", FIELD_ACTION.SELECT], this.props);
      if (R.isNil(actionConfig)) {
        return;
      }
      Promise.resolve(onSelect(value)).then(fillingVal => {
        if (!R.isNil(fillingVal)) {
          dispatchUpdateFieldByAction(
            R.mergeDeepRight(actionConfig, {
              autoFillFields: {
                prevValue: "",
                nextValue: fillingVal,
                override: true
              }
            }),
            formName
          );
        }
      });
    };

    render() {
      const {
        name,
        value,
        error,
        type,
        htmlType,
        className,
        label,
        description,
        placeholder,
        hint,
        rules = [],
        disabled,
        defaultValue,
        ...restProps
      } = this.props;

      let FieldComponent;
      let fieldParams;
      let themeParams = {
        label,
        description,
        hint,
        error,
        rules
      };

      const defaultFieldConfig = {
        name,
        value,
        rules,
        defaultValue,
        onChange: this.handleChange
      };

      switch (type) {
        case FIELD_TYPE.INPUT_TEXT:
          FieldComponent = Input;
          fieldParams = {
            ...defaultFieldConfig,
            type: htmlType,
            placeholder,
            disabled
          };
          break;
        case FIELD_TYPE.SELECT:
          FieldComponent = Select;
          fieldParams = {
            ...defaultFieldConfig,
            placeholder,
            disabled,
            options: restProps.options,
            optionGroupName: restProps.optionGroupName,
            showSearch: restProps.showSearch,
            getPopupContainer: restProps.getPopupContainer,
            notFoundContent: restProps.notFoundContent,
            onSelect: this.handleSelect
          };
          break;
        case FIELD_TYPE.SELECT_CASCADER:
          FieldComponent = Cascader;
          fieldParams = {
            ...defaultFieldConfig,
            placeholder,
            options: restProps.options,
            showSearch: restProps.showSearch,
            changeOnSelect: restProps.changeOnSelect,
            getPopupContainer: restProps.getPopupContainer,
            notFoundContent: restProps.notFoundContent
          };
          break;
        case FIELD_TYPE.SMS_CODE:
          FieldComponent = SMSCode;
          fieldParams = {
            ...defaultFieldConfig,
            placeholder,
            disabled,
            button: restProps.button
          };
          break;
        case FIELD_TYPE.INPUT_WITH_SEARCH:
          FieldComponent = InputSearch;
          fieldParams = {
            ...defaultFieldConfig,
            placeholder,
            showSearch: restProps.showSearch,
            options: restProps.options,
            onSelect: this.handleSelect,
            onSearch: restProps.onSearch
          };
          break;
        case FIELD_TYPE.INPUT_WITH_SUBMIT:
          FieldComponent = InputFieldWithSubmit;
          fieldParams = {
            inputProps: {
              ...defaultFieldConfig,
              type: htmlType,
              placeholder,
              disabled
            },
            btnProps: {
              ...restProps.btnProps
            }
          };
          break;
        case FIELD_TYPE.INPUT_WITH_SEARCH_SUBMIT:
          FieldComponent = InputSearchFieldWithSubmit;
          fieldParams = {
            inputProps: {
              ...defaultFieldConfig,
              placeholder,
              showSearch: restProps.showSearch,
              options: restProps.options,
              onSelect: this.handleSelect,
              onSearch: restProps.onSearch
            },
            btnProps: {
              ...restProps.btnProps
            }
          };
          break;
        case FIELD_TYPE.CHECKBOX:
          FieldComponent = Checkbox;
          fieldParams = {
            ...defaultFieldConfig,
            disabled,
            options: restProps.options
          };
          break;
        case FIELD_TYPE.RADIO:
          FieldComponent = Radio;
          fieldParams = {
            ...defaultFieldConfig,
            disabled,
            options: restProps.options,
            isVertical: restProps.isVertical
          };
          break;
        case FIELD_TYPE.SIGNATURE_PAD:
          FieldComponent = Signature;
          fieldParams = {
            ...defaultFieldConfig,
            signaturePad: restProps.signaturePad
          };
          break;
        case FIELD_TYPE.UPLOAD_MULTI_FILES:
          FieldComponent = UploadFiles;
          fieldParams = {
            ...defaultFieldConfig,
            label,
            hint,
            error,
            ...restProps
          };
          themeParams = { description };
          break;
        case FIELD_TYPE.DATEPICKER_RANGE:
          FieldComponent = DatepickerRange;
          fieldParams = {
            ...defaultFieldConfig,
            placeholder,
            label,
            hint,
            error,
            ...restProps
          };
          themeParams = { description };
          break;
        default:
      }
      return (
        <div id={name} className={className}>
          <WrappedComponent
            register={this.register}
            unregister={this.unregister}
            themeParams={themeParams}
            fieldParams={fieldParams}
            fieldComponent={FieldComponent}
          />
        </div>
      );
    }
  }

  CreateField.displayName = `CreateField(${getDisplayName(WrappedComponent)})`;

  CreateField.propTypes = {
    formName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    type: PropTypes.string,
    htmlType: PropTypes.string,
    rules: PropTypes.array,
    label: PropTypes.string,
    description: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.node,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    dispatchRegisterField: PropTypes.func.isRequired,
    dispatchUnregisterField: PropTypes.func.isRequired,
    dispatchUpdateField: PropTypes.func.isRequired,
    dispatchUpdateFieldByAction: PropTypes.func.isRequired
  };

  const mapStateToProps = ({ [REDUCER_NAME]: form }, { formName, name }) => ({
    value: R.path([formName, "values", name], form),
    error: R.path([formName, "errors", name], form)
  });

  const mapDispatchToProps = {
    dispatchRegisterField: actionCreators.registerField,
    dispatchUnregisterField: actionCreators.unregisterField,
    dispatchUpdateField: actionCreators.updateField,
    dispatchUpdateFieldByAction: actionCreators.updateFieldByAction
  };

  return connect(mapStateToProps, mapDispatchToProps)(CreateField);
};

export default createField;
