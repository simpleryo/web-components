import R from "ramda";
import { storageUtils } from "@simpleryo/syw-utils";

export const getFieldOptions = name => {
  if (name) {
    return R.find(
      option => option.name === name,
      storageUtils.getLocalStorage("Options")
    );
  }
  return storageUtils.getLocalStorage("Options");
};

export const setFieldOptions = (content = []) => {
  const localOptions = getFieldOptions();
  const originalOptions =
    R.isNil(localOptions) || R.isEmpty(localOptions) ? [] : localOptions;
  // merge the fetched options with original ones
  const mergedOptions = R.compose(
    R.values,
    R.compose(R.merge, R.indexBy(R.prop("name")))(originalOptions),
    R.indexBy(R.prop("name"))
  )(content);
  storageUtils.setLocalStorage("Options", mergedOptions);
};

export const getFieldLabel = (value, fieldGroupName) =>
  R.compose(
    R.pathOr(value, ["label"]),
    R.find(option => option.value === value),
    R.pathOr([], ["options"]),
    getFieldOptions
  )(fieldGroupName);

export default {
  getFieldOptions,
  setFieldOptions,
  getFieldLabel
};
