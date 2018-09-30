const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const R = require("ramda");

const baseConfig = require("./webpack.config.base");

const AUTO_PREFIXER_CONFIG = {
  browsers: [
    "> 5%",
    "last 2 versions",
    "not ie <= 9", // React doesn't support IE8 anyway
    "iOS >= 8",
    "Android >= 4",
    "ExplorerMobile >= 11"
  ],
  flexbox: "no-2009"
};

const rules = {
  appStyle: {
    test: /\.(css|scss|sass)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          minimize: true,
          localIdentName: "[hash:base64:10]"
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"), // eslint-disable-line
            autoprefixer(AUTO_PREFIXER_CONFIG)
          ]
        }
      },
      "sass-loader"
    ]
  },
  customTheme: {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          minimize: true,
          localIdentName: "[hash:base64:10]"
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          ident: "postcss",
          plugins: () => [autoprefixer(AUTO_PREFIXER_CONFIG)]
        }
      },
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
  new MiniCssExtractPlugin({
    filename: "syw-uikit.min.css"
  }),
  new HTMLWebpackPlugin({ template: path.resolve(__dirname, "template.html") })
]);

module.exports = R.mergeDeepRight(baseConfig, {
  mode: "production",
  bail: true,
  devtool: "source-map",
  entry: "./src/examples/index.js",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parse: {
            // we want uglify-js to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true
      })
    ]
  },
  module: {
    rules: R.concat(baseConfig.module.rules, [
      rules.appStyle,
      rules.customTheme
    ])
  },
  plugins,
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "syw-uikit.min.js",
    library: "syw-uikit",
    libraryTarget: "umd"
  }
});
