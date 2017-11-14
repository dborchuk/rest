import express from 'express';

import { PORT } from './config';

export default function() {
  const app = express();

  app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
  });
}
