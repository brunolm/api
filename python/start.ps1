$env:FLASK_APP="todo.py"
$env:FLASK_DEBUG=0

flask run -p 4000 --no-reload --no-debugger --with-threads
