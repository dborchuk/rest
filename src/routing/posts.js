import JsonDB from 'node-json-db';
import { DATABASE_NAME } from '../config';

const ARTICLES_KEY = 'articles';

export default function (app) {
  app.get('/api/articles', (req, res) => {
    const db = new JsonDB(DATABASE_NAME, true, true);

    res.send(db.getData(`/${ARTICLES_KEY}`));
  });

  app.post('/api/articles', (req, res) => {
    res.send('This is not implemented now');
  });

  app.get('/api/articles/:id', (req, res) => {
    res.send('This is not implemented now');
  });

  app.put('/api/articles/:id', (req, res) => {
    res.send('This is not implemented now');
  });

  app.delete('/api/articles/:id', (req, res) => {
    res.send('This is not implemented now');
  });
}
