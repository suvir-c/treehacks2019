const express = require('express');
const next = require('next');
const path = require('path');
const secure = require('express-force-https');
const { resolve } = require('path');
const twilio = require('twilio');
require('dotenv').config();

const { setup } = require('radiks-server');

const makeApiController = require('./controllers/api-controller');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const setupFrontend = require('./middlewares/frontendMiddleware');

const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(async () => {
  const server = express();

  const RadiksController = await setup();

  if (!dev) {
    server.use(secure);
  }

  server.use('/radiks', RadiksController);

  server.use('/api', makeApiController(RadiksController.db));

  server.use((req, res, _next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    _next();
  });

  server.get('/send-message/:message', (req, res) => {
    const { msg } = req.params;
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    client.messages
      .create({
        body: msg,
        from: '+12155156938',
        statusCallback: 'http://postb.in/1234abcd',
        to: '+14157444926',
      })
      .then(resp => {
        console.log(resp.sid);
        res.status(200).json({ status: 'message successfully sent' });
      })
      .catch(e => {
        console.log(e);
        res.status(400).json({ status: 'message failed to send' });
      });
  });

  server.get('/hello', (req, res) => {
    res.json({ hello: 'world' });
  });

  server.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'server/static', 'manifest.json'));
  });

  // Create a new channel
  server.get('/channel/new', (req, res) => {
    const { params } = req;
    app.render((req, res, '/channel/new', params));
  });

  // View a channel
  server.get('/channel/:id', (req, res) => {
    const { params } = req;
    app.render(req, res, '/channel/show', params);
  });

  // Create new post
  server.get('/channel/:id/posts/new', (req, res) => {
    app.render(req, res, '/channel/posts/new', req.params);
  });

  server.get('/posts/:id', (req, res) => {
    app.render(req, res, '/posts/show', req.params);
  });

  // In production we need to pass these values in instead of relying on webpack
  setupFrontend(server, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
