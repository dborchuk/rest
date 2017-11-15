import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import { PORT } from './config';
import routing from './routing';

export default function() {
  const app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, "public")));

  routing(app);

  app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
  });
}
