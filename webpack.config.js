const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    clean: true,
  },
  module: {
    rules: [
      { test: /.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /.html$/i, use: "html-loader" },
      {
        test: /.(jpg|jpeg|svg|png)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
