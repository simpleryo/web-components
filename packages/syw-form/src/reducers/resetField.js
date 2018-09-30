import R from "ramda";

export const resetFormField = (form, fieldName, isResetDefault = false) => {
  const defaultValue = isResetDefault
    ? R.path(["defaultValues", fieldName], form)
    : undefined;
  const isRequired = R.path(["fields", fieldName, "isRequired"], form);
  const isValidateRequired = isRequired && !defaultValue;

  const nextErrors = isValidateRequired
    ? { ...form.errors, [fieldName]: "" }
    : R.omit([fieldName], form.errors);

  const isSubmittable = R.isEmpty(nextErrors) || R.isNil(nextErrors);

  return {
    ...form,
    submittable: isSubmittable,
    values: {
      ...form.values,
      [fieldName]: defaultValue
    },
    errors: nextErrors
  };
};

export default (state, action) => {
  const {
    payload: { name },
    meta: { formName }
  } = action;

  return {
    ...state,
    [formName]: resetFormField(state[formName], name, true)
  };
};
