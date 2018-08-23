const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?warn=false',
      'babel-polyfill',
      `${__dirname}/src/core/index.hot-reload.jsx`,
      `${__dirname}/src/styles/main.less`,
    ],
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },

  devtool: 'eval-source-map ',

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '../../theme.config': `${__dirname}/src/styles/semantic-ui/theme.config.less`,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: process.env.NODE_ENV === 'production',
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebPackPlugin({
      template: `${__dirname}/public/index.html`,
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

  watchOptions: {
    aggregateTimeout: 300,
    poll: true,
  },

  devServer: {
    hot: true,
    contentBase: `${__dirname}/public`,
  },
};
