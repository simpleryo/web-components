import R from "ramda";
import moment from "moment";
import * as CONSTANTS from "./rules";

// TODO: Remove the hard code date format and using the passed format instead
const DATE_FORMAT = "YYYY-MM-DD";

const isGreaterThan = R.curry((len, num) => num > len);
const getStringLength = str => str.length;
const isLengthGreaterThan = len =>
  R.compose(isGreaterThan(len), getStringLength);
const isFileSizeGreaterThan = size =>
  R.compose(isGreaterThan(size), bitSize => bitSize / 1024 / 1024);
const isFileSizeLessThan = size =>
  R.compose(
    R.complement(isGreaterThan(size)),
    bitSize => bitSize / 1024 / 1024
  );
const isLengthLessThan = len =>
  R.compose(R.complement(isGreaterThan(len)), getStringLength);
const isLengthNotEqual = len =>
  R.complement(R.compose(R.equals(len), getStringLength));
const isNotAcceptedType = R.curry(
  (acceptedTypes, targetType) =>
    !R.contains(CONSTANTS.FILE_TYPE_MAPPING[targetType], acceptedTypes)
);
const isNotAcceptedExtension = R.curry(
  (acceptedTypes, targetExtension) =>
    !R.contains(targetExtension.toLowerCase(), acceptedTypes)
);
const isNotMatchRegExp = (type, regex) =>
  R.complement(
    R.test(new RegExp(regex || CONSTANTS.REG_EXP_DEFAULT[type] || ".*"))
  );

/**
 * [Check if the targetDate is out of the range]
 * @param  {Number}  [dayFrom]      [days before the comparedDate]
 * @param  {Number}  [dayTo]        [days after the comparedDate]
 * @param  {String}    [dateString]   [Date format: yyyy-mm-dd e.g: "2018-01-01"]
 * @return {Boolean}                [return true if the tragetDate is out of the range,
 *                                     otherwise false.]
 */
const isOutOfDateRange = (dayFrom, dayTo) => dateString => {
  if (
    dayFrom !== undefined &&
    moment(dateString).isBefore(moment().add(dayFrom, "day"), "day")
  ) {
    return true;
  }
  if (
    dayTo !== undefined &&
    moment(dateString).isAfter(moment().add(dayTo, "day"), "day")
  ) {
    return true;
  }
  return false;
};

const validators = {
  [CONSTANTS.RULE_REQUIRED]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [R.isNil, R.always(settings.name)],
        [R.isEmpty, R.always(settings.name)],
        [R.equals(false), R.always(settings.name)],
        [R.T, R.always(null)]
      ])(value[0])
    ),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_LENGTH_MAX]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [
          isLengthGreaterThan(R.pathOr(0, ["conditions", "len"], settings)),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0])
    ),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_LENGTH_MIN]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [
          isLengthLessThan(R.pathOr(0, ["conditions", "len"], settings)),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0])
    ),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_LENGTH_EXACT]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [
          isLengthNotEqual(R.pathOr(0, ["conditions", "len"], settings)),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0])
    ),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_REG_EXP]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [
          isNotMatchRegExp(
            R.path(["conditions", "reg"], settings),
            R.path(["conditionsStr", "reg"], settings)
          ),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0])
    ),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_DATE_RANGE]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [
          isOutOfDateRange(
            R.path(["conditions", "dateFrom"], settings),
            R.path(["conditions", "dateTo"], settings)
          ),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0])
    ),
    wrapMessage: settings => {
      const dayFrom = R.path(["conditions", "dateFrom"], settings);
      const dayTo = R.path(["conditions", "dateTo"], settings);
      const dateFrom = moment()
        .add(dayFrom, "day")
        .format(DATE_FORMAT);
      const dateTo = moment()
        .add(dayTo, "day")
        .format(DATE_FORMAT);

      return R.compose(
        R.replace(/{dateFrom}/g, dateFrom),
        R.replace(/{dateTo}/g, dateTo)
      )(settings.message);
    }
  },
  [CONSTANTS.RULE_FILE_TYPE]: {
    validate: R.curry((settings, value) => {
      if (R.is(String, value[0])) {
        return null;
      }
      return R.cond([
        [
          isNotAcceptedType(R.path(["conditions", "acceptedTypes"], settings)),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0].type);
    }),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_FILE_EXTENSION]: {
    validate: R.curry((settings, value) => {
      if (R.is(String, value[0])) {
        return null;
      }
      const extension = R.compose(R.last, R.split("."))(value[0].name);

      return R.cond([
        [
          isNotAcceptedExtension(
            R.path(["conditions", "acceptedTypes"], settings)
          ),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(extension);
    }),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_FILE_SIZE_MAX]: {
    validate: R.curry((settings, value) => {
      if (R.is(String, value[0])) {
        return null;
      }
      return R.cond([
        [
          isFileSizeGreaterThan(R.pathOr(0, ["conditions", "size"], settings)),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0].size);
    }),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_FILE_SIZE_MIN]: {
    validate: R.curry((settings, value) => {
      if (R.is(String, value[0])) {
        return null;
      }
      return R.cond([
        [
          isFileSizeLessThan(R.pathOr(0, ["conditions", "size"], settings)),
          R.always(settings.name)
        ],
        [R.T, R.always(null)]
      ])(value[0].size);
    }),
    wrapMessage: settings => settings.message
  },
  [CONSTANTS.RULE_COMPARATION_EQUALS]: {
    validate: R.curry((settings, value) =>
      R.cond([
        [v => v[0] !== v[1], R.always(settings.name)],
        [R.T, R.always(null)]
      ])(value)
    ),
    wrapMessage: settings => settings.message
  }
};

const pickFields = R.curry(
  (list, pickedList = []) =>
    R.isNil(pickedList) || R.isEmpty(pickedList)
      ? list
      : R.pick(pickedList, list)
);
const transformBreakRule = R.ifElse(
  R.either(R.isNil, R.isEmpty),
  R.always(null),
  e => e.name
);

const filterOutValidFields = R.filter(field => field.error !== null);

export const validateField = (rules, ...values) => {
  if (R.isNil(rules) || R.isEmpty(rules)) {
    return null;
  }

  const isOptional = R.compose(
    R.isNil,
    R.find(setting => setting.name === CONSTANTS.RULE_REQUIRED)
  )(rules);

  const isAllValuesEmpty = R.compose(
    R.isNil,
    R.find(item => R.not(R.isEmpty(item)) && R.not(R.isNil(item)))
  )(values);

  if (isOptional && isAllValuesEmpty) {
    return null;
  }

  const breakRule = R.find(
    settings =>
      validators[settings.name]
        ? validators[settings.name].validate(settings, values)
        : false
  )(rules);
  return transformBreakRule(breakRule);
};

const validateFields = R.map(field => {
  const value = R.isNil(field.value) ? "" : field.value;
  let { error } = field;
  // Only validate when it nerver run before.
  // "" or undefined means not validates yet.
  // null means it's been validated with no error.
  if (field.error === "" || field.error === undefined) {
    error = validateField(field.rules, value);
  }
  return { error };
});

export const validateForm = R.compose(
  filterOutValidFields,
  validateFields,
  pickFields
);

export const getBreakRuleMessage = (rules = [], error) => {
  const breakRule = R.find(rule => rule.name === error, rules);
  if (R.isNil(breakRule)) {
    return error;
  }
  return validators[error].wrapMessage(breakRule);
};

export default {
  getBreakRuleMessage,
  validateForm,
  validateField
};
