import * as express from 'express';

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}
else {
  const app = express();

  app.use(require('./src/todo'));

  app.listen(3020, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3020');
  });
}
