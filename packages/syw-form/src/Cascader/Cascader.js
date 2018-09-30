import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Cascader } from "@simpleryo/syw-uikit";
import R from "ramda";
import { validateField } from "../validators";
import { getFieldOptions } from "../utils/fieldOptions";
import { FIELD_ACTION } from "../Field/type";

const DEFAULT_DIVIDE_MARK = "/";

class CascaderField extends PureComponent {
  handleChange = values => {
    const {
      divideMark = DEFAULT_DIVIDE_MARK,
      name,
      rules,
      onChange = R.F,
      ...rest
    } = this.props;
    const joinedVal = values.join(divideMark);
    const value = joinedVal !== divideMark ? joinedVal : "";
    const prevValue = rest.value;
    const error = validateField(rules, value);
    onChange(name, value, error);

    this.updateStateByAction(prevValue, value);
  };

  updateStateByAction = (prevValue, nextValue) => {
    const { actions, onActions } = this.props;
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    const select = R.pathOr({}, [FIELD_ACTION.SELECT], actions);
    const actionConfig = R.mergeDeepRight(load, select);

    if (R.not(R.isEmpty(actionConfig))) {
      onActions(
        R.mergeDeepRight(actionConfig, {
          autoFillFields: { prevValue, nextValue }
        })
      );
    }
  };

  render() {
    const {
      divideMark = DEFAULT_DIVIDE_MARK,
      value = undefined,
      defaultValue,
      placeholder = "",
      options,
      optionGroupName,
      showSearch,
      changeOnSelect,
      notFoundContent = "Not found",
      getPopupContainer = () => document.body
    } = this.props;

    let parsedOptions = [];
    if (options) {
      parsedOptions = options;
    } else if (optionGroupName) {
      parsedOptions = R.compose(R.pathOr([], ["options"]), getFieldOptions)(
        optionGroupName
      );
    }
    return (
      <Cascader
        placeholder={placeholder}
        defaultValue={[defaultValue]}
        style={{ width: "100%" }}
        value={value ? R.split(divideMark, value) : []}
        onChange={this.handleChange}
        options={parsedOptions}
        notFoundContent={notFoundContent}
        getPopupContainer={getPopupContainer}
        showSearch={showSearch}
        changeOnSelect={changeOnSelect}
      />
    );
  }
}

CascaderField.propTypes = {
  name: PropTypes.string.isRequired,
  divideMark: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  onActions: PropTypes.func,
  optionGroupName: PropTypes.string,
  options: PropTypes.array,
  showSearch: PropTypes.bool,
  changeOnSelect: PropTypes.bool,
  notFoundContent: PropTypes.string,
  getPopupContainer: PropTypes.func,
  actions: PropTypes.object
};

export default CascaderField;
