import { handleActions } from "redux-actions";
import * as actionCreators from "../actions";
import registerField from "./registerField";
import unregisterField from "./unregisterField";
import updateField from "./updateField";
import resetField from "./resetField";
import resetForm from "./resetForm";
import clearForm from "./clearForm";
import updateFieldByAction from "./updateFieldByAction";
import {
  requestSMSCode,
  receivedSMSCode,
  finishSMSCodeCountDown
} from "./smsCode";
import { requestFormSubmit, receivedFormSubmit } from "./submitForm";
import destroyForm from "./destroyForm";

const initialState = {};

export const REDUCER_NAME = "form";

export default handleActions(
  {
    [actionCreators.registerField]: registerField,
    [actionCreators.unregisterField]: unregisterField,
    [actionCreators.resetField]: resetField,
    [actionCreators.resetForm]: resetForm,
    [actionCreators.clearForm]: clearForm,
    [actionCreators.updateField]: updateField,
    [actionCreators.updateFieldByAction]: updateFieldByAction,
    [actionCreators.requestSMSCode]: requestSMSCode,
    [actionCreators.receivedSMSCode]: receivedSMSCode,
    [actionCreators.finishSMSCodeCountDown]: finishSMSCodeCountDown,
    [actionCreators.requestFormSubmit]: requestFormSubmit,
    [actionCreators.receivedFormSubmit]: receivedFormSubmit,
    [actionCreators.destroyForm]: destroyForm
  },
  initialState
);
