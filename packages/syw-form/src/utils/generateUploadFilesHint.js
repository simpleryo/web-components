import R from "ramda";
import {
  RULE_FILE_EXTENSION,
  RULE_FILE_TYPE,
  RULE_FILE_SIZE_MAX,
  RULE_FILE_SIZE_MIN
} from "../validators/rules";

const DEFAULT_EXTENSIONS = "jpg, png, jpeg";
const DEFAULT_MAX_SIZE = 10; // unit might be MB
const DEFAULT_MIN_SIZE = 10; // unit might be KB

const generateUploadFilesHint = rules => {
  let extensions = DEFAULT_EXTENSIONS;
  let maxSize = DEFAULT_MAX_SIZE;
  let minSize = DEFAULT_MIN_SIZE;

  R.map(rule => {
    if (rule.name === RULE_FILE_EXTENSION || rule.name === RULE_FILE_TYPE) {
      extensions = R.compose(
        R.join(", "),
        R.pathOr([], ["conditions", "acceptedTypes"])
      )(rule);
    } else if (rule.name === RULE_FILE_SIZE_MAX) {
      maxSize = R.pathOr(DEFAULT_MAX_SIZE, ["conditions", "size"], rule);
    } else if (rule.name === RULE_FILE_SIZE_MIN) {
      minSize = R.pathOr(DEFAULT_MIN_SIZE, ["conditions", "size"], rule);
    }
  }, rules);

  return {
    maxSize,
    minSize,
    fileTypes: extensions.toUpperCase()
  };
};

export default generateUploadFilesHint;
