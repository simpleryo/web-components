const path = require("path");
const webpack = require("webpack");

const rules = {
  appScript: {
    test: /\.(js|jsx)$/,
    loaders: "babel-loader",
    exclude: /node_modules/,
    options: {
      presets: [["env", { modules: false }], "react", "stage-3"],
      plugins: ["transform-runtime", "transform-class-properties"]
    }
  },
  assets: {
    test: /\.(ttf|otf|eot|svg|woff(2)?|gif|png|jpe?g)(\?[a-z0-9]+)?$/,
    loader: "url-loader",
    options: {
      limit: 1,
      name: "[path][name].[ext]",
      context: path.resolve(__dirname, "./src")
    }
  },
  bootstrapFonts: {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: "url-loader",
    include: path.resolve(
      "./node_modules/bootstrap-sass/assets/fonts/bootstrap"
    ),
    options: {
      name: "assets/fonts/[path][name].[ext]",
      context: path.resolve("./node_modules/bootstrap-sass/assets/fonts")
    }
  }
};

module.exports = {
  devtool: "",
  entry: "",
  optimization: {
    namedModules: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  externals: {},
  module: {
    rules: [rules.appScript, rules.assets, rules.bootstrapFonts]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      BOOTSTRAP_FONTS: path.resolve(
        "./node_modules/bootstrap-sass/assets/fonts/bootstrap"
      ),
      SLICK_CAROUSEL: path.resolve("./node_modules/slick-carousel/slick"),
      SYW_UIKIT_ASSETS: path.resolve("./src/assets")
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.min.js"
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  performance: { hints: false }
};
