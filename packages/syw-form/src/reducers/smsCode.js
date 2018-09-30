import R from "ramda";

export const requestSMSCode = (state, action) => {
  const {
    meta: { fieldName, formName }
  } = action;
  return {
    ...state,
    [formName]: {
      ...state[formName],
      fields: {
        ...state[formName].fields,
        [fieldName]: {
          ...state[formName].fields[fieldName],
          isLoading: true,
          isCountingDown: false
        }
      }
    }
  };
};

export const receivedSMSCode = (state, action) => {
  const {
    payload: { code, content, msg },
    meta: { fieldName, formName }
  } = action;

  if (code === 0) {
    const nextErrors = content
      ? R.omit([fieldName], state[formName].errors)
      : { ...state[formName].errors };
    const isSubmittable = R.isEmpty(nextErrors) || R.isNil(nextErrors);
    return {
      ...state,
      [formName]: {
        ...state[formName],
        fields: {
          ...state[formName].fields,
          [fieldName]: {
            ...state[formName].fields[fieldName],
            isLoading: false,
            isCountingDown: true
          }
        },
        submittable: isSubmittable,
        values: {
          ...state[formName].values,
          [fieldName]: content || "" // the API will direct return the sms code in the dev environment for auto filling
        },
        errors: nextErrors
      }
    };
  }

  return {
    ...state,
    [formName]: {
      ...state[formName],
      fields: {
        ...state[formName].fields,
        [fieldName]: {
          ...state[formName].fields[fieldName],
          isLoading: false,
          isCountingDown: false
        }
      },
      errors: {
        ...state[formName].errors,
        [fieldName]: msg
      }
    }
  };
};

export const finishSMSCodeCountDown = (state, action) => {
  const {
    payload: { fieldName, formName }
  } = action;

  return {
    ...state,
    [formName]: {
      ...state[formName],
      fields: {
        ...state[formName].fields,
        [fieldName]: {
          ...state[formName].fields[fieldName],
          isCountingDown: false
        }
      }
    }
  };
};

export default {
  requestSMSCode,
  receivedSMSCode,
  finishSMSCodeCountDown
};
