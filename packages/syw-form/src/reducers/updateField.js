import R from "ramda";

export default (state, action) => {
  const {
    payload: { name, value, error },
    meta: { formName }
  } = action;
  let nextErrors;

  if (error) {
    nextErrors = {
      ...state[formName].errors,
      [name]: error
    };
  } else {
    nextErrors = R.omit([name], state[formName].errors);
  }

  const isSubmittable = R.isEmpty(nextErrors) || R.isNil(nextErrors);

  return {
    ...state,
    [formName]: {
      ...state[formName],
      submittable: isSubmittable,
      values: {
        ...state[formName].values,
        [name]: value
      },
      errors: nextErrors
    }
  };
};
