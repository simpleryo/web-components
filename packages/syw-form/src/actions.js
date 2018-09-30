import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const registerField = createAction(
  actionTypes.REGISTER_FIELD,
  field => field,
  (field, formName) => ({ formName })
);
export const unregisterField = createAction(
  actionTypes.UNREGISTER_FIELD,
  field => field,
  (field, formName) => ({ formName })
);
export const updateField = createAction(
  actionTypes.UPDATE_FIELD,
  field => field,
  (field, formName) => ({ formName })
);
export const resetField = createAction(
  actionTypes.RESET_FIELD,
  field => field,
  formName => ({ formName })
);
export const updateFieldByAction = createAction(
  actionTypes.UPDATE_FIELD_BY_ACTION,
  field => field,
  (field, formName) => ({ formName })
);

export const resetForm = createAction(actionTypes.RESET_FORM, formName => ({
  formName
}));

export const clearForm = createAction(actionTypes.CLEAR_FORM, formName => ({
  formName
}));

export const destroyForm = createAction(actionTypes.DESTROY_FORM);

export const requestFormSubmit = createAction(
  actionTypes.REQUEST_FORM_SUBMIT,
  apiBody => apiBody,
  (apiBody, formName) => ({ formName })
);
export const receivedFormSubmit = createAction(
  actionTypes.RECEIVED_FORM_SUBMIT,
  response => response,
  (response, formName) => ({ formName })
);

export const requestSMSCode = createAction(
  actionTypes.REQUEST_SMS_CODE,
  apiBody => apiBody,
  (apiBody, { fieldName, formName }) => ({ fieldName, formName })
);
export const receivedSMSCode = createAction(
  actionTypes.RECEIVED_SMS_CODE,
  response => response,
  (response, { fieldName, formName }) => ({ fieldName, formName })
);
export const finishSMSCodeCountDown = createAction(
  actionTypes.FINISH_SMS_CODE_COUNT_DOWN
);

export default {
  resetForm,
  clearForm,
  requestSMSCode,
  receivedSMSCode,
  finishSMSCodeCountDown,
  requestFormSubmit,
  receivedFormSubmit,
  updateField
};
