const webpackMerge = require('webpack-merge');
var webpack = require('webpack');

const commonConfig = require('./webpack.config.js');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'API_ADDR': JSON.stringify('http://0.0.0.0:3000')
      }),
      new webpack.LoaderOptionsPlugin({
        debug: true
      })
    ]
  });
}
