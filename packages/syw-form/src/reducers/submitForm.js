import R from "ramda";

export const requestFormSubmit = (state, action) => {
  const {
    meta: { formName }
  } = action;

  return {
    ...state,
    [formName]: {
      ...state[formName],
      isSubmitting: true,
      submitSuccess: false,
      submitError: null,
      submitResponse: null
    }
  };
};

export const receivedFormSubmit = (state, action) => {
  const { payload, meta } = action;
  const { code, content, msg } = payload;
  const { formName } = meta;

  if (code === 0) {
    return {
      ...state,
      [formName]: {
        ...state[formName],
        isSubmitting: false,
        submitSuccess: true,
        submitResponse: payload
      }
    };
  }

  // TODO: confirm handling the response errors behaviour
  let error = msg;
  if (R.is(Array, content)) {
    R.map(v => {
      error += v;
    }, content);
  }

  return {
    ...state,
    [formName]: {
      ...state[formName],
      isSubmitting: false,
      submitError: error,
      submitResponse: payload
    }
  };
};

export default {
  requestFormSubmit,
  receivedFormSubmit
};
