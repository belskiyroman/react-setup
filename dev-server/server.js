const debug = require('debug')('dev-server');
const express = require('express');
const path = require('path');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const fakeApiModule = require('./api');

const app = express();
const compiler = webpack({ ...config, mode: 'development'});
const { PWD } = process.env;
const STATIC_RESOURCE_PATH = path.join(PWD, 'public');

debug(`Static resource path: ${STATIC_RESOURCE_PATH}`);

app.use(cors());

app.use(webpackDevMiddleware(compiler, {
  warn: false,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

// serve static assets normally
app.use(express.static(STATIC_RESOURCE_PATH));

// fake api
app.use(fakeApiModule(express()));


app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
  });
});

module.exports = app;
