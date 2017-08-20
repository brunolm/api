export FLASK_APP="todo.py"
export FLASK_DEBUG=0

gunicorn -w 32 -b 127.0.0.1:4000 todo:app
