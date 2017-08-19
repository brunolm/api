const express = require('express');

const app = express.Router();

const todos = require('./fixture/todo');

app.get('/todo/:id', (req, res) => {
  res.status(200).send(todos.find(todo => todo.id === +req.params.id));
});

app.get('/todo', (req, res) => {
  res.status(200).send(todos);
});

module.exports = app;
