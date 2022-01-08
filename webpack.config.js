const path = require("path");

module.exports = {
  mode: "develoment",
  devtool: "eval-source-map",
  entry: "./public/js/editor.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
