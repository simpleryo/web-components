import R from "ramda";

export default (state, action) => {
  const {
    payload: { autoFillFields },
    meta: { formName }
  } = action;

  let nextAutoFillFields = {};
  let nextAutoFillList = [];
  if (R.type(autoFillFields) === "Object" && R.has("list", autoFillFields)) {
    const fieldsValue = R.pathOr({}, [formName, "values"], state);
    const { list, nextValue } = autoFillFields;
    if (R.has("prevValue", autoFillFields)) {
      // always pass in the prevValue when the field's value has been updated
      const { prevValue, override = false } = autoFillFields;
      if (override) {
        nextAutoFillList = [...list];
      } else {
        // only fill the fields that have same value as the prevValue or empty/nil
        nextAutoFillList = R.filter(
          name =>
            prevValue === fieldsValue[name] ||
            R.isEmpty(fieldsValue[name]) ||
            R.isNil(fieldsValue[name]),
          list
        );
      }
    } else {
      // only pass in the nextValue while the fieldsContainer did mount
      nextAutoFillList = R.filter(
        name => R.isEmpty(fieldsValue[name]) || R.isNil(fieldsValue[name]),
        list
      );
    }
    nextAutoFillFields = R.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: nextValue
      }),
      {},
      nextAutoFillList
    );
  }
  const nextErrors = R.omit(nextAutoFillList, state[formName].errors);
  const isSubmittable = R.isEmpty(nextErrors) || R.isNil(nextErrors);

  return {
    ...state,
    [formName]: {
      ...state[formName],
      submittable: isSubmittable,
      values: {
        ...state[formName].values,
        ...nextAutoFillFields
      },
      errors: nextErrors
    }
  };
};
