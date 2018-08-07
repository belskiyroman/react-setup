const debug = require('debug')('dev-server');
const server = require('./server');
const PORT = process.env.PORT || 4000;

server.listen(PORT, (err) => {
  if (err) {
    debug(err);
  } else {
    debug(`Listening at http://localhost:${PORT}`);
  }
});
