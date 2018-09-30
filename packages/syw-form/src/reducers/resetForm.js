import R from "ramda";
import { resetFormField } from "./resetField";

export default (state, action) => {
  const {
    payload: { formName }
  } = action;

  let nextForm = {
    ...state[formName],
    submitSuccess: false,
    submitError: null,
    submitResponse: null
  };
  R.mapObjIndexed((val, key) => {
    nextForm = resetFormField(nextForm, key, true);
  }, state[formName].fields);

  return {
    ...state,
    [formName]: nextForm
  };
};
