const path = require('path');
const { DllPlugin, ContextReplacementPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),

  entry: {
    dll: [
      'validate.js',
      'classnames',
      'moment',
      'axios',
      'redux',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'prop-types',
      'redux-saga',
      'recharts',
      'semantic-ui-react',
    ],
  },

  output: {
    filename: '[name]_[hash].js',
    library: '[name]_[hash]',
    path: path.join(process.cwd(), 'dist', 'dll'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin([path.join(process.cwd(), 'dist', 'dll')], { root: process.cwd() }),
    new ContextReplacementPlugin(/moment[/\\]locale$/, /en|uk/),
    new DllPlugin({
      path: path.join(process.cwd(), 'dist', 'dll', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ],

  stats: {
    warnings: false,
  },
};
