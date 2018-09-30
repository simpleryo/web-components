// support validation rules
export const RULE_REQUIRED = "required";
export const RULE_LENGTH_MAX = "maxLength";
export const RULE_LENGTH_MIN = "minLength";
export const RULE_LENGTH_EXACT = "exactLength";
export const RULE_REG_EXP = "regExp";
export const RULE_DATE_RANGE = "dateRange";
export const RULE_FILE_TYPE = "fileType";
export const RULE_FILE_EXTENSION = "fileExtension";
export const RULE_FILE_SIZE_MAX = "fileMaxSize";
export const RULE_FILE_SIZE_MIN = "fileMinSize";
export const RULE_COMPARATION_EQUALS = "comparationEquals";

export const REG_EXP_TYPE_EMAIL = "email";
export const REG_EXP_TYPE_PHONE = "phone";
export const REG_EXP_TYPE_PASSPORT = "passport";
export const REG_EXP_TYPE_CHINESE_ID = "chineseId";
export const REG_EXP_TYPE_PASSWORD = "password";
export const REG_EXP_DEFAULT = {
  [REG_EXP_TYPE_EMAIL]:
    "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
  [REG_EXP_TYPE_PHONE]: "^[0-9 \\-]*$",
  [REG_EXP_TYPE_PASSPORT]: "\\S+",
  [REG_EXP_TYPE_CHINESE_ID]: "[1-9]\\d{16}[a-zA-Z0-9]{1}",
  [REG_EXP_TYPE_PASSWORD]: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$"
};

export const FILE_TYPE_MAPPING = {
  "application/pdf": "pdf",
  "image/svg+xml": "svg",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "docx"
};

// const IMAGE_LIST = ["jpg", "png", "jpeg"];
const DOC_LIST = ["pdf", "doc", "docx"];
const VIDEO_LIST = [
  "rm",
  "rmvb",
  "3gp",
  "mp4",
  "avi",
  "flv",
  "f4v",
  "mpg",
  "vob",
  "dat",
  "wmv",
  "asf",
  "mkv",
  "dv",
  "mov",
  "ts",
  "webm"
];

export const NON_IMAGE_FILE_TYPE_LIST = [...DOC_LIST, ...VIDEO_LIST];

export default {
  RULE_REQUIRED,
  RULE_LENGTH_MAX,
  RULE_LENGTH_MIN,
  RULE_LENGTH_EXACT,
  RULE_REG_EXP,
  RULE_DATE_RANGE,
  RULE_FILE_TYPE,
  RULE_FILE_EXTENSION,
  RULE_FILE_SIZE_MAX,
  RULE_FILE_SIZE_MIN,
  RULE_COMPARATION_EQUALS,
  REG_EXP_TYPE_EMAIL,
  REG_EXP_TYPE_PHONE,
  REG_EXP_TYPE_PASSPORT,
  REG_EXP_TYPE_CHINESE_ID,
  REG_EXP_TYPE_PASSWORD,
  REG_EXP_DEFAULT,
  FILE_TYPE_MAPPING,
  NON_IMAGE_FILE_TYPE_LIST
};
