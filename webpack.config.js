var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'app': './app.ts',
    'vendor': './vendor.ts'
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      PROD: false,
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js', '.html']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  },

  devServer: {
    historyApiFallback: true
  }
};
