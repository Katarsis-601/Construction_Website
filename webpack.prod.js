const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "src/js/[contenthash].js",
    assetModuleFilename: "src/asset/[contenthash].[ext]",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[contenthash].css",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
});

// why i use mode "development" on production?
// because i still can't solve error that return from html-loader whenever i run webpack on production
// i already use options like minimize set to false, but it still return error
// i knew its bad practice, i will fix it ,if i knew whats the real problem soon
