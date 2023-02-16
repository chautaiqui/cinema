const webpackMerge = require("webpack-merge");
const requiredConfig = require("./config/webpack.required.config");

const configs = {
  dev: require("./config/webpack.dev.config"),
  prod: require("./config/webpack.prod.config"),
};

const config = (env) => {
  if (env.config) {
    const config = webpackMerge.merge(requiredConfig, configs[env.config]);
    return config;
  }

  return commonConfig;
};

module.exports = config;