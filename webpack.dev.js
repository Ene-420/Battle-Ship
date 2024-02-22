const path = require("path");
const { merge } = require("webpack-merge");
const basic = require("./webpack.basic.js");

module.exports = merge(basic, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
});
