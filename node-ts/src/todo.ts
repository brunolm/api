import * as express from 'express';

import todos from './fixture/todo';

const app = express.Router();

app.get('/todo/:id', (req, res) => {
  res.status(200).send(todos.find(todo => todo.id === +req.params.id));
});

app.get('/todo', (req, res) => {
  res.status(200).send(todos);
});

module.exports = app;
