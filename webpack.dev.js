const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  mode: "development",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    assetModuleFilename: "asset/[name].[ext]",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
});
