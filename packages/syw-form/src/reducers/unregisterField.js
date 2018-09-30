import R from "ramda";

export default (state, action) => {
  const {
    payload: { name },
    meta: { formName }
  } = action;

  if (!state[formName]) {
    return state;
  }

  const nextFields = R.omit([name], state[formName].fields);
  const nextValues = R.omit([name], state[formName].values);
  const nextdefaultValues = R.omit([name], state[formName].defaultValues);
  const nextErrors = R.omit([name], state[formName].errors);
  const isSubmittable = R.isEmpty(nextErrors) || R.isNil(nextErrors);
  return {
    ...state,
    [formName]: {
      ...state[formName],
      submittable: isSubmittable,
      fields: nextFields,
      defaultValues: nextdefaultValues,
      values: nextValues,
      errors: nextErrors
    }
  };
};
