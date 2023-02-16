const webpack = require("webpack");

const config = {
  mode: "development",
  devtool: 'eval-source-map',
  entry: {
    hot: 'webpack/hot/dev-server.js',
    app: "./src/app.jsx",
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    liveReload: true,
    hot: true,
    port: 9000,
    client: false,
    watchFiles: ["src/**/*"]
  },


};

module.exports = config;
