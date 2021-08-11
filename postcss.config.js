/*
 * @Description: css 处理文件
 * @Author: shiduobin
 * @Date: 2021-07-29 23:05:11
 * @LastEditors: shiduobin
 * @LastEditTime: 2021-08-01 16:44:14
 */
module.exports = {
  plugins: [
    require("autoprefixer")({
      // last 2 version :兼容浏览器的最后两个版本
      // >1% 占有率大于1%的浏览器都要兼容
      overrideBrowserslist: ["last 2 versions", ">1%"],
    }),
  ],
};
