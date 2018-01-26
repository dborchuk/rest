import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import { PORT } from './config';
import logger from './logger';
import routing from './routing';
import migrations from './migrations';

export default function() {
  const app = express();
  const log = logger(module);

  app.use(morgan('dev'));
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', './src/public')
  app.set('view engine', 'pug');

  routing(app);
  migrations();

  app.use((req, res, next) => {
    res.status(404);
    log.debug('Not found URL: %s', req.url);
    res.send({ error: 'Not found' });
    return;
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    log.error('Internal error(%d): %s', res.statusCode, err.message);
    res.send({ error: err.message });
    return;
  });

  app.listen(PORT, () => {
    log.info(`Express server listening on port ${PORT}`);
  });
}
