from flask import Flask, jsonify
app = Flask(__name__)

todos = list()
for i in range(1000):
    todos.append({ 'id': i, 'name': 'Task ' + str(i), 'done': True })

@app.route("/todo")
def get():
    return jsonify(todos)

@app.route("/todo/<int:id>")
def describe(id):
    todo = next((x for x in todos if x['id'] == id), None)
    return jsonify(todo)
