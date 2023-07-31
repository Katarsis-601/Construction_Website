const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  mode: "development",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src/js/[name].js",
    assetModuleFilename: "src/asset/[name].[ext]",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[name].css",
    }),
  ],
});
