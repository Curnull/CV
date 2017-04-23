var webpack = require('webpack');
var config = require('./webpack.config');

config.plugins[0] = new webpack.DefinePlugin({
  'API_ADDR': JSON.stringify('http://my-cv.online:3001')
});

config.plugins[1] = new webpack.LoaderOptionsPlugin({
  debug: false
});
module.exports = config;