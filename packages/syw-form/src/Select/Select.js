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
    let actionsToTrigger = R.pathOr({}, [FIELD_ACTION.LOAD], actions);
    let selectActions = R.path([FIELD_ACTION.SELECT], actions);
    if (R.type(selectActions) !== "Array") {
      selectActions = selectActions ? [selectActions] : [];
    }
    R.map(({ conditions, activeGroups, inactiveGroups, autoFillFields }) => {
      if (autoFillFields) {
        actionsToTrigger = R.mergeDeepRight(actionsToTrigger, {
          autoFillFields: { ...autoFillFields, prevValue, nextValue }
        });
      } else if (
        R.compose(R.contains(nextValue), R.pathOr([], ["equals"]))(conditions)
      ) {
        actionsToTrigger = R.mergeDeepRight(actionsToTrigger, {
          activeGroups,
          inactiveGroups
        });
      } else if (
        R.compose(R.not, R.contains(nextValue), R.pathOr([], ["notEquals"]))(
          conditions
        )
      ) {
        actionsToTrigger = R.mergeDeepRight(actionsToTrigger, {
          activeGroups,
          inactiveGroups
        });
      }
    }, selectActions);

    if (R.not(R.isEmpty(actionsToTrigger))) {
      onActions(actionsToTrigger);
    }
  };

  render() {
    const {
      forwardRef,
      size = "default",
      style = { width: "100%" },
      dropdownClassName = "",
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
        ref={forwardRef}
        size={size}
        name={name}
        dropdownClassName={dropdownClassName}
        value={value}
        showSearch={showSearch}
        style={style}
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
                  {option.icon && <i className={option.icon} />}
                  {option.flag && (
                    <i className={`flag-icon flag-icon-${option.flag}`} />
                  )}
                  <span>{option.label}</span>
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
  size: PropTypes.string,
  style: PropTypes.object,
  forwardRef: PropTypes.object,
  dropdownClassName: PropTypes.string,
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

export default React.forwardRef((props, ref) => (
  <SelectField {...props} forwardRef={ref} />
));
