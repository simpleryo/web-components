import React, { Component } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import debounce from "lodash/debounce";
import { AutoComplete, Input } from "@simpleryo/syw-uikit";
import { validateField } from "../validators";
import { FIELD_ACTION } from "../Field/type";
import { getFieldOptions } from "../utils/fieldOptions";

export default class InputSearchField extends Component {
  constructor(props) {
    super(props);
    let defaultDataSource = [];
    const { optionGroupName, options } = props;
    if (options) {
      defaultDataSource = options;
    } else if (optionGroupName) {
      defaultDataSource = R.compose(
        R.map(option => ({
          text: option.label,
          value: option.value
        })),
        R.pathOr([], ["options"]),
        getFieldOptions
      )(optionGroupName);
    }
    this.defaultDataSource = defaultDataSource;
    this.state = {
      dataSource: defaultDataSource
    };
  }

  handleChange = value => {
    const { name, onChange, rules } = this.props;
    const { dataSource } = this.state;
    // TODO: The following convert only applies for SEARCH_SOURCE.ADDRESS
    const selectText = R.compose(
      R.path(["text"]),
      R.find(option => value === option.value)
    )(dataSource);
    const convertVal = R.type(selectText) === "String" ? selectText : value;
    const error = validateField(rules, convertVal);
    onChange(name, convertVal, error);
  };

  handleSearch = debounce(
    value => {
      const { onSearch, options, optionGroupName } = this.props;
      if (options || optionGroupName) {
        const dataSource = R.filter(
          option =>
            R.type(option.text) === "String"
              ? option.text.includes(value)
              : option.value.includes(value),
          this.defaultDataSource
        );
        this.setState({ dataSource });
      } else if (value.length > 2 && onSearch) {
        Promise.resolve(onSearch(value)).then(dataSource => {
          this.setState({ dataSource });
        });
      }
    },
    500,
    {
      leading: false,
      trailing: true
    }
  );

  handleSelect = value => {
    const { onSelect } = this.props;
    Promise.resolve(onSelect(value)).then(fillingVal => {
      this.updateStateByAction("", fillingVal, true);
    });
  };

  updateStateByAction = (prevValue, nextValue, override = false) => {
    const { actions, onActions } = this.props;
    const load = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    const select = R.pathOr({}, [FIELD_ACTION.SELECT], actions);
    const actionConfig = R.mergeDeepRight(load, select);

    if (R.not(R.isEmpty(actionConfig))) {
      onActions(
        R.mergeDeepRight(actionConfig, {
          autoFillFields: { prevValue, nextValue, override }
        })
      );
    }
  };

  render() {
    const {
      value,
      placeholder = "",
      showSearch,
      getPopupContainer
    } = this.props;
    const { dataSource } = this.state;
    const options = R.map(
      option => (
        <AutoComplete.Option key={option.value} value={option.value}>
          {option.text}
        </AutoComplete.Option>
      ),
      dataSource
    );
    return (
      <AutoComplete
        value={value}
        dataSource={options}
        placeholder={placeholder}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        onSelect={this.handleSelect}
        getPopupContainer={getPopupContainer}
        optionLabelProp={"value"}
      >
        {showSearch && <Input suffix={<i className="icon-search" />} />}
      </AutoComplete>
    );
  }
}

InputSearchField.propTypes = {
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
};
