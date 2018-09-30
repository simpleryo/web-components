export const FIELD_TYPE = {
  INPUT_TEXT: "input_text",
  INPUT_UPLOAD_PHOTO: "input_upload_photo",
  TEXTAREA: "textarea",
  RADIO: "radio",
  RADIO_VERTICAL: "radio_vertical",
  RADIO_WITH_OTHER_INPUT: "radio_with_other_input",
  RADIO_WITH_OTHER_INPUT_VERTICAL: "radio_with_other_input_vertical",
  CHECKBOX: "checkbox",
  CHECKBOX_VERTICAL: "checkbox_vertical",
  SELECT: "select",
  SELECT_WITH_SEARCH: "select_with_search",
  SELECT_COUNTRIES: "select_countries",
  SELECT_CASCADER: "select_cascader",
  DATEPICKER: "datepicker",
  DATEPICKER_RANGE: "datepicker_range",
  BUTTON_MANUAL_MODE: "button_manual_mode",
  OCR_PASSPORT: "ocr_passport",
  TEMPLATE: "template",
  UPLOAD_FILE: "upload_file",
  UPLOAD_MULTI_FILES: "upload_multi_files",
  SIGNATURE_PAD: "input_signature",
  INPUT_WITH_SEARCH: "input_search",
  INPUT_WITH_SUBMIT: "input_submit",
  INPUT_WITH_SEARCH_SUBMIT: "input_search_submit",
  BLANK_FIELD: "blank_field",

  NATIONAL_MOBILE: "national_mobile",
  SMS_CODE: "sms_code",
  SUBMIT_BUTTON: "submit_button"
};

// search sources for INPUT_WITH_SEARCH
export const SEARCH_SOURCE = {
  ADDRESS: "address"
};

export const FIELD_ACTION = {
  LOAD: "load",
  TICK: "tick",
  CHECK: "check",
  UNCHECK: "uncheck",
  CLICK: "click",
  SCAN: "scan",
  SELECT: "select"
};

export default {
  FIELD_TYPE,
  SEARCH_SOURCE,
  FIELD_ACTION
};
