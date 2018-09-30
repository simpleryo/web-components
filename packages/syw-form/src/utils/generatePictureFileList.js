import QueryString from "query-string";
import R from "ramda";
import { NON_IMAGE_FILE_TYPE_LIST } from "../validators/rules";

export default (oss, dividedMark, iconDoc) => {
  if (!oss) {
    return [];
  }
  return R.compose(
    R.reduce((acc, cur) => {
      const { url } = QueryString.parseUrl(cur);
      const name = R.compose(R.last, R.split("/"))(url);
      const extension = R.compose(R.toLower, R.last, R.split("."))(name);
      const thumbUrl = R.contains(extension, NON_IMAGE_FILE_TYPE_LIST)
        ? iconDoc
        : `${cur}&ext=.${extension}`;
      return [
        ...acc,
        {
          uid: name,
          name,
          status: "done",
          url: cur,
          thumbUrl
        }
      ];
    }, []),
    R.split(dividedMark)
  )(oss);
};
