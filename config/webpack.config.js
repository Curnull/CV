/**
 * Created by curnull on 31/03/2017.
 */
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  target: 'web',
  devtool: 'source-map',
  resolve: {
    modules: ["node_modules", "bower_components"],
    alias: {
      "jquery": "jquery/dist/jquery.min.js"
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  entry: {
    app: [
      './src/index.jsx',
      './src/index.html'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules|bower_components/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/, 
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        use: 'babel-loader'
      },
      {
        test: /\.html(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules|bower_components/,
        use: 'file-loader?name=[path][name].[ext]&context=src'
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: ['css-loader', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'SERVER_ADDR': JSON.stringify('http://0.0.0.0:3000')
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      React: "react",
      ReactDOM: "react-dom",
      PropTypes: "prop-types"
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    })
  ]

};