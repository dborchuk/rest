import JsonDB from 'node-json-db';
import { ARTICLES_KEY } from './constants';
import { DATABASE_NAME } from './config';

export default function() {
  const db = new JsonDB(DATABASE_NAME, true, true);

  db.push(`/${ARTICLES_KEY}`, {});
}
