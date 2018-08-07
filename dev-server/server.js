const debug = require('debug')('dev-server');
const express = require('express');
const path = require('path');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('../webpack.config');

const fakeApiModule = require('./api');
const semanticUiReactModule = require('./semantic-ui-react');

const app = express();
const compiler = webpack(config);
const { PWD, SEMANTIC_UI_REACT_DOCS } = process.env;
const STATIC_RESOURCE_PATH = path.join(PWD, 'public');

debug(`Static resource path: ${STATIC_RESOURCE_PATH}`);

app.use(cors());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

// serve static assets normally
app.use(express.static(STATIC_RESOURCE_PATH));

// fake api
app.use('/api', fakeApiModule(express()));

// semantic ui react docs
if (SEMANTIC_UI_REACT_DOCS) {
  app.use('/semantic', semanticUiReactModule(express()));
}

module.exports = app;
