const express = require('express');

const app = express();

app.use(require('./src/todo'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Listening on http://localhost:3000');
});
