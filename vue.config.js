const path = require("path");
const DotEnv = require("dotenv-webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new DotEnv({
        path: "./vue/.env*"
      })
    ]
  },
  chainWebpack: config => {
    config.entry("app").clear().add("./vue/main.ts").end();
    config.resolve.alias.set("@", path.join(__dirname, "./vue"));
  }
};
