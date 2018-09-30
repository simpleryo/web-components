import QueryString from "query-string";
import R from "ramda";

export default path => {
  if (!path) {
    return false;
  }
  const { url } = QueryString.parseUrl(path);
  const name = R.compose(R.last, R.split("/"))(url);
  const extension = R.compose(R.toLower, R.last, R.split("."))(name);
  return `${path}&ext=.${extension}`;
};
