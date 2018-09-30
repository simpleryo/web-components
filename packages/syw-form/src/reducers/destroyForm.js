import R from "ramda";

export default (state, action) => {
  const formName = action.payload;
  return R.omit([formName], state);
};
