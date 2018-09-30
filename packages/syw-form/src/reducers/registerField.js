import R from "ramda";

export default (state, action) => {
  const {
    payload: { name, defaultValue, type, isRequired },
    meta: { formName }
  } = action;

  const isValidateRequired = isRequired && !defaultValue;

  if (R.isNil(state[formName]) || R.isEmpty(state[formName])) {
    const initialErrors = isValidateRequired ? { [name]: "" } : {};
    return {
      ...state,
      [formName]: {
        submittable: R.isEmpty(initialErrors) || R.isNil(initialErrors),
        fields: {
          [name]: {
            name,
            type,
            isRequired
          }
        },
        defaultValues: {
          [name]: defaultValue
        },
        values: {
          [name]: defaultValue
        },
        errors: isValidateRequired ? { [name]: "" } : {}
      }
    };
  }

  const nextErrors = isValidateRequired
    ? { ...state[formName].errors, [name]: "" }
    : { ...state[formName].errors };

  return {
    ...state,
    [formName]: {
      ...state[formName],
      submittable: R.isEmpty(nextErrors) || R.isNil(nextErrors),
      fields: {
        ...state[formName].fields,
        [name]: {
          name,
          type,
          isRequired
        }
      },
      defaultValues: {
        ...state[formName].defaultValues,
        [name]: defaultValue
      },
      values: {
        ...state[formName].values,
        [name]: defaultValue
      },
      errors: nextErrors
    }
  };
};
