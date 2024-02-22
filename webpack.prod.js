const { merge } = require("webpack-merge");
const basic = require("./webpack.basic.js");

module.exports = merge(basic, {
  mode: "production",
});
