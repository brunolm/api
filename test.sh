baseUrl="http://localhost:$1";

# Get all
wrk -c 256 -t 32 -d 10 "$baseUrl/todo"
