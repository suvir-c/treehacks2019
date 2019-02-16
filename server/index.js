/* eslint consistent-return:0 import/order:0 */

require('dotenv').config();
const express = require('express');
const radiks = require('radiks-server');
const makeApiController = require('./controllers/api-controller');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
radiks
  .setup({
    mongoDBUrl: process.env.MONGODB_URI,
  })
  .then(RadiksConroller => {
    app.use('/radiks', RadiksConroller);
    app.use('/api', makeApiController(RadiksConroller.db));

    // Create a new channel
    app.get('/channel/new', (req, res) => {
      const { params } = req;
      app.render((req, res, '/channel/new', params));
    });

    // View a channel
    app.get('/channel/:id', (req, res) => {
      const { params } = req;
      app.render(req, res, '/channel/show', params);
    });

    // Create new post
    app.get('/channel/:id/posts/new', (req, res) => {
      app.render(req, res, '/channel/posts/new', req.params);
    });

    app.get('/posts/:id', (req, res) => {
      app.render(req, res, '/posts/show', req.params);
    });
  });

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
