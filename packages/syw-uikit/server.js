const webpack = require("webpack");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");
const path = require("path");
const config = require("./webpack.config.dev");

const app = express();
const port = process.env.PORT || 3000;
const ip = "0.0.0.0";
const compiler = webpack(config);

app.set("port", port);

if (process.env.NODE_ENV === "development") {
  app.use(
    WebpackDevMiddleware(compiler, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      filename: config.output.filename,
      publicPath: config.output.publicPath,
      historyApiFallback: true,
      inline: true,
      host: ip,
      port,
      stats: {
        colors: true
      }
    })
  );
  app.use(WebpackHotMiddleware(compiler));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
} else {
  app.use("/", express.static(path.join(__dirname, "./dist/")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
  });
}

app.listen(app.get("port"), () => {
  console.log(`UIKit started: http://localhost:${app.get("port")}/`);
});
