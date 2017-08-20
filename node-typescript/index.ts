import * as express from 'express';

const app = express();

app.use(require('./src/todo'));

app.listen(3021, '0.0.0.0', () => {
  console.log('Listening on http://localhost:3021');
});
