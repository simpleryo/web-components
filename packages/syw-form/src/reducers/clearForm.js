import R from "ramda";
import { resetFormField } from "./resetField";

export default (state, action) => {
  const {
    payload: { formName }
  } = action;

  let nextForm = { ...state[formName] };
  R.mapObjIndexed((val, key) => {
    nextForm = resetFormField(nextForm, key, false);
  }, state[formName].fields);

  return {
    ...state,
    [formName]: nextForm
  };
};
