/*
 * @Description: 配置文件
 * @Author: shiduobin
 * @Date: 2021-07-25 17:52:17
 * @LastEditors: shiduobin
 * @LastEditTime: 2021-08-11 23:09:42
 */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // 入口文件
  entry: ["./src/index.js"],
  // 出口文件
  output: {
    // 打包后文件的输出路径
    path: path.join(__dirname, "./build"),
    // 打包后文件的名称
    filename: "[name][hash].js",
  },
  // 打包模式
  mode: "development",
  // 规定如何处理项目中不同的模块
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]",
            outputPath: "images/",
            limit: 1024,
          },
        },
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:5].[ext]",
            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output file
            publicPath: "fonts/",
            outputPath: "fonts/"
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};
