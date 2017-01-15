const webpack = require('webpack');

module.exports = {
  entry: {
    "index.browser": './src/index.browser.js'
  },
  output: {
    path: require('path').join(__dirname, '/dist'),
    filename: "[name].js",
    library: 'ReactRouterRedux',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel"]
      }
    ]
  },
  devtool: '#cheap-module-inline-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
