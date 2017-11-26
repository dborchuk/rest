import posts from './posts';

export default function (app) {
  app.get('/api', function (req, res) {
    res.send('API is running');
  });

  posts(app);
}
