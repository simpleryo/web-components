import R from "ramda";
import accepts from "accepts";

const acceptBrowserLocale = true;
export const LANG_EN = "en";
export const LANG_ZH = "zh";
export const LANG_DEFAULT = LANG_EN;

/**
 * Filter language code, currently only support en and zh.
 * @param  {String} lang [language code]
 * @return {String}      [language code, "zh" or "en"]
 */
const filterLang = lang =>
  R.cond([
    [R.isNil, R.always(LANG_DEFAULT)],
    [R.startsWith("en"), R.always(LANG_EN)],
    [R.startsWith("zh"), R.always(LANG_ZH)],
    [R.T, R.always(LANG_DEFAULT)]
  ])(lang);

/* ---------------------For web side----------------------------------*/

/**
 * Get locale lang from browser cookie.
 * @return {String} [language code]
 */
export const getCookieLocale = () => {
  const match = document.cookie.match(new RegExp("lang=([^;]+)"));
  return match && match[1];
};

/**
 * [Get locale lang from browser setting
 * @return {String} [language code]
 */
export const getBrowserLocale = () =>
  window.navigator.userLanguage || window.navigator.language;

/**
 * Get language code from request's cookie and browser setting
 * @param  {Object} req [api request]
 * @return {String}     [language code]
 */
export const getLocale = () =>
  filterLang(
    getCookieLocale() || (acceptBrowserLocale ? getBrowserLocale() : null)
  );

/**
 * Set locale into cookie
 * @param {String} lang [language code]
 */
export const setLocale = lang => {
  if (!R.isNil(lang)) {
    document.cookie = `lang=${lang}; path=/;`;
  }
};

/* ---------------------For server side----------------------------------*/

/**
 * Get param's lang from api request in server side.
 * @param  {Object} req [api request]
 * @return {String}     [language code]
 */
export const getParamLocaleFromReq = req => R.path(["params", "lang"], req);

/**
 * Get cookie's lang from api request in server side.
 * @param  {Object} req [api request]
 * @return {String}     [language code]
 */
export const getCookieLocaleFromReq = req => R.path(["cookies", "lang"], req);

/**
 * Get browser's lang from api request in server side.
 * @param  {Object} req [api request]
 * @return {String}     [language code]
 */
export const getBrowserLocaleFromReq = req => {
  const langs = accepts(req).languages();
  return filterLang(langs && langs[0]);
};

/**
 * Get language code from request's cookie and browser setting
 * @param  {Object} req [api request]
 * @return {String}     [language code]
 */
export const getLocaleFromReq = req =>
  filterLang(
    getParamLocaleFromReq(req) ||
      getCookieLocaleFromReq(req) ||
      (acceptBrowserLocale ? getBrowserLocaleFromReq(req) : null)
  );
