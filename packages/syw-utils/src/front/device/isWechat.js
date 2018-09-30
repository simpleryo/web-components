// Reference as: https://gist.github.com/bluemsn/0341000ddd2c9db174dd
const isWechat = () => {
  if (typeof WeixinJSBridge !== "undefined") {
    return true;
  } else if (
    navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1 ||
    typeof navigator.wxuserAgent !== "undefined"
  ) {
    return true;
  }
  return false;
};

export default isWechat;
