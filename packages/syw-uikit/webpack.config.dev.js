const webpack = require("webpack");
const R = require("ramda");
const baseConfig = require("./webpack.config.base");

const rules = {
  appStyle: {
    test: /\.(css|scss|sass)$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          localIdentName: "[path][name]__[local]"
        }
      },
      "sass-loader"
    ]
  },
  customTheme: {
    test: /\.less$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      {
        loader: "less-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  }
};

const plugins = R.concat(baseConfig.plugins, [
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = R.mergeDeepRight(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./src/examples/index.js"
  ],
  optimization: {
    noEmitOnErrors: true
  },
  module: {
    rules: R.concat(baseConfig.module.rules, [
      rules.appStyle,
      rules.customTheme
    ])
  },
  plugins,
  output: {
    path: "/",
    publicPath: "/",
    filename: "syw-uikit.js"
  }
});
