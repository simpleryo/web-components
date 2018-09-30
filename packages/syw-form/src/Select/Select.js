import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Select } from "@simpleryo/syw-uikit";
import R from "ramda";
import { validateField } from "../validators";
import { getFieldOptions } from "../utils/fieldOptions";
import { FIELD_ACTION } from "../Field/type";

class SelectField extends PureComponent {
  handleChange = value => {
    const { name, rules, onChange = R.F, ...rest } = this.props;
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
      name,
      value,
      placeholder = "",
      disabled = false,
      optionGroupName,
      options = [],
      showSearch = false,
      notFoundContent = "Not found",
      getPopupContainer = () => document.body
    } = this.props;

    let selectOptions;
    const optGroup = [{ label: "default", options: [] }];

    if (R.not(R.isEmpty(options))) {
      selectOptions = [...options];
    } else if (optionGroupName) {
      selectOptions = R.compose(R.pathOr([], ["options"]), getFieldOptions)(
        optionGroupName
      );
    }

    if (selectOptions) {
      R.map(option => {
        const groupName = option.group || "default";
        let targetOptGroup = R.find(
          ({ label: groupLabel }) => groupName === groupLabel,
          optGroup
        );
        if (!targetOptGroup) {
          targetOptGroup = { label: groupName, options: [] };
          optGroup.push(targetOptGroup);
        }
        targetOptGroup.options.push(option);
      }, selectOptions);
    }

    let filterOption = true;
    if (showSearch) {
      filterOption = (input, option) =>
        option.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }

    return (
      <Select
        name={name}
        value={value}
        showSearch={showSearch}
        style={{ width: "100%" }}
        placeholder={placeholder}
        filterOption={filterOption}
        onChange={this.handleChange}
        notFoundContent={notFoundContent}
        getPopupContainer={getPopupContainer}
        disabled={disabled}
      >
        {R.ifElse(
          R.equals(1),
          R.always(
            R.map(
              option => (
                <Select.Option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                >
                  <div>
                    {option.icon && <i className={option.icon} />}
                    {option.flag && (
                      <i className={`flag-icon flag-icon-${option.flag}`} />
                    )}
                    <span>{option.label}</span>
                  </div>
                </Select.Option>
              ),
              optGroup[0].options
            )
          ),
          R.always(
            R.map(
              ({ label: groupLabel, options: groupOptions }) =>
                !R.isEmpty(groupOptions) && (
                  <Select.OptGroup key={groupLabel} label={groupLabel}>
                    {R.map(
                      option => (
                        <Select.Option
                          key={option.value}
                          label={option.label}
                          value={option.value}
                        >
                          <div>
                            {option.icon && <i className={option.icon} />}
                            {option.flag && (
                              <i
                                className={`flag-icon flag-icon-${option.flag}`}
                              />
                            )}
                            <span>{option.label}</span>
                          </div>
                        </Select.Option>
                      ),
                      groupOptions
                    )}
                  </Select.OptGroup>
                ),
              optGroup
            )
          )
        )(optGroup.length)}
      </Select>
    );
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  onActions: PropTypes.func,
  disabled: PropTypes.bool,
  optionGroupName: PropTypes.string,
  options: PropTypes.array,
  showSearch: PropTypes.bool,
  notFoundContent: PropTypes.string,
  getPopupContainer: PropTypes.func,
  actions: PropTypes.object
};

export default SelectField;
