baseUrl="http://localhost:$1";

# Get all
wrk -c 256 -t 32 -d 10 "$baseUrl/todo"
wrk -c 256 -t 32 -d 10 "$baseUrl/todo"
wrk -c 256 -t 32 -d 10 "$baseUrl/todo"

echo ""
echo ""
echo ""

# Get by id
wrk -c 256 -t 32 -d 10 "$baseUrl/todo/998"
wrk -c 256 -t 32 -d 10 "$baseUrl/todo/998"
wrk -c 256 -t 32 -d 10 "$baseUrl/todo/998"
