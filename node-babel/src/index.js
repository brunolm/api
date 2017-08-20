const express = require('express');

const app = express();

app.use(require('./todo'));

app.listen(3010, '0.0.0.0', () => {
  console.log('Listening on http://localhost:3010');
});
