const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonWebpackConfig = require('./common.webpack.config');

const config = {
  entry: {
    'common-style': './src/styles/common.less',

    'physician-style': './src/styles/modules/physician.less',
    physician: [
      'babel-polyfill',
      './src/modules/physician/index.jsx',
    ],

    'staff-style': './src/styles/modules/physician.less',
    staff: [
      'babel-polyfill',
      './src/modules/physician/index.jsx',
    ],

    'admin-style': './src/styles/modules/physician.less',
    admin: [
      'babel-polyfill',
      './src/modules/physician/index.jsx',
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },

  stats: {
    warnings: false,
  },
};

commonWebpackConfig.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  {
    test: /\.(css|less)$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'less-loader',
    ],
  },
);

commonWebpackConfig.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].css',
  }),
);

module.exports = { ...commonWebpackConfig, ...config };
