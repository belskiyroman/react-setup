const path = require('path');
const { NamedModulesPlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  output: {
    filename: '[name].[hash].js',
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/',
  },

  devtool: false,

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '../../theme.config': path.join(process.cwd(), 'src', 'styles', 'semantic-ui', 'theme.config.less'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2)/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/png',
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|jpg|svg|gif)/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin([process.cwd(), 'dist'], {
      exclude: ['dll'],
      root: process.cwd(),
    }),
    new NamedModulesPlugin(),
    new HtmlWebPackPlugin({
      filename: 'physician.html',
      chunks: ['common-style', 'physician-style', 'physician'],
      title: 'MyLSD Physician',
      template: path.join(process.cwd(), 'webpack', 'common', 'template.ejs'),
    }),
    new HtmlWebPackPlugin({
      filename: 'staff.html',
      chunks: ['common-style', 'staff-style', 'staff'],
      title: 'MyLSD Staff',
      template: path.join(process.cwd(), 'webpack', 'common', 'template.ejs'),
    }),
    new HtmlWebPackPlugin({
      filename: 'admin.html',
      chunks: ['common-style', 'admin-style', 'admin'],
      title: 'MyLSD Admin',
      template: path.join(process.cwd(), 'webpack', 'common', 'template.ejs'),
    }),
  ],
};
