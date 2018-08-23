const { NamedModulesPlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),

  entry: {
    physician: [
      'babel-polyfill',
      './src/modules/physician/index.jsx',
    ],
    'physician-style': './src/styles/modules/physician.less',
    'common-style': './src/styles/common.less',
  },

  output: {
    filename: '[name].js',
    path: './dist',
    publicPath: '/',
  },

  devtool: false,

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '../../theme.config': `${process.cwd()}/src/styles/semantic-ui/theme.config.less`,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff|woff2)/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/png',
        },
      },
      {
        test: /\.(ttf|eot|jpg|svg|gif)/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebPackPlugin({
      template: `${process.cwd()}/public/index.html`,
      filename: './index.html',
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
