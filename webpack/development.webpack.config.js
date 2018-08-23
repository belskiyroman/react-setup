const path = require('path');
const {
  HotModuleReplacementPlugin,
  DllReferencePlugin,
} = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const commonWebpackConfig = require('./common.webpack.config');
const manifest = require('./common/manifest');

const dllManifest = manifest();

const config = {
  devtool: 'eval-source-map',

  entry: {
    physician: [
      'babel-polyfill',
      'webpack-hot-middleware/client?warn=false',
      './src/modules/physician/index.hot-reload.jsx',
      './src/styles/common.less',
      './src/styles/modules/physician.less',
    ],
    staff: [
      'babel-polyfill',
      'webpack-hot-middleware/client?warn=false',
      './src/modules/staff/index.hot-reload.jsx',
      './src/styles/common.less',
      './src/styles/modules/staff.less',
    ],
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: true,
  },

};

commonWebpackConfig.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'eslint-loader',
        options: { fix: true },
      },
    ],
  },
  {
    test: /\.(css|less)$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
);

commonWebpackConfig.plugins.push(
  new AddAssetHtmlPlugin({
    filepath: path.join(process.cwd(), 'dist', 'dll', 'dll_*.js'),
    includeSourcemap: false,
  }),
  new DllReferencePlugin({ manifest: dllManifest }),
  new HotModuleReplacementPlugin(),
);

module.exports = { ...commonWebpackConfig, ...config };
