# Raw results /todo

## .NET Core 2.0

```
$ ./test.sh 5000
Running 10s test @ http://localhost:5000/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   102.12ms   26.36ms 244.02ms   73.21%
    Req/Sec    77.55     27.70   245.00     76.20%
  24782 requests in 10.13s, 0.96GB read
Requests/sec:   2445.54
Transfer/sec:     96.67MB

$ ./test.sh 5000
Running 10s test @ http://localhost:5000/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   104.16ms   25.05ms 285.93ms   76.10%
    Req/Sec    76.14     26.70   313.00     80.17%
  24172 requests in 10.15s, 0.93GB read
Requests/sec:   2381.68
Transfer/sec:     94.15MB

$ ./test.sh 5000
Running 10s test @ http://localhost:5000/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   105.67ms   19.16ms 197.38ms   72.92%
    Req/Sec    75.23     27.63   808.00     83.87%
  24251 requests in 10.15s, 0.94GB read
Requests/sec:   2389.72
Transfer/sec:     94.46MB
```

## Node

```
$ wrk -c 256 -t 32 -d 10 http://localhost:3000/todo
Running 10s test @ http://localhost:3000/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   235.09ms   80.49ms   1.11s    95.14%
    Req/Sec    36.21     19.11   160.00     63.91%
  11061 requests in 10.05s, 437.65MB read
Requests/sec:   1101.00
Transfer/sec:     43.56MB

$ wrk -c 256 -t 32 -d 10 http://localhost:3000/todo
Running 10s test @ http://localhost:3000/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   229.22ms   65.63ms   1.13s    93.17%
    Req/Sec    36.48     21.16   240.00     56.44%
  11255 requests in 10.10s, 445.33MB read
Requests/sec:   1114.29
Transfer/sec:     44.09MB

$ wrk -c 256 -t 32 -d 10 http://localhost:3000/todo
Running 10s test @ http://localhost:3000/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   212.36ms   59.62ms   1.07s    93.95%
    Req/Sec    39.25     19.12   222.00     50.06%
  12125 requests in 10.05s, 479.75MB read
Requests/sec:   1206.20
Transfer/sec:     47.73MB
```

## Node (babel)

```
$ ./test.sh 3010
Running 10s test @ http://localhost:3010/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   242.85ms   67.58ms   1.10s    90.25%
    Req/Sec    34.66     18.66   160.00     66.11%
  10520 requests in 10.04s, 416.24MB read
Requests/sec:   1047.44
Transfer/sec:     41.44MB

$ ./test.sh 3010
Running 10s test @ http://localhost:3010/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   214.90ms   55.55ms   1.01s    93.44%
    Req/Sec    38.39     19.22   240.00     65.15%
  11982 requests in 10.05s, 474.09MB read
Requests/sec:   1192.33
Transfer/sec:     47.18MB

$ ./test.sh 3010
Running 10s test @ http://localhost:3010/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   214.15ms   55.00ms 906.73ms   93.76%
    Req/Sec    38.62     20.07   240.00     61.54%
  11970 requests in 10.10s, 473.62MB read
Requests/sec:   1185.07
Transfer/sec:     46.89MB
```

## Node (babel-node)

```
$ ./test.sh 3011
Running 10s test @ http://localhost:3011/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   247.70ms   66.93ms   1.09s    91.17%
    Req/Sec    34.30     19.65   158.00     63.55%
  10322 requests in 10.10s, 408.41MB read
Requests/sec:   1021.87
Transfer/sec:     40.43MB

$ ./test.sh 3011
Running 10s test @ http://localhost:3011/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   220.34ms   62.64ms   1.08s    92.98%
    Req/Sec    38.08     20.89   160.00     57.77%
  11680 requests in 10.04s, 462.14MB read
Requests/sec:   1163.07
Transfer/sec:     46.02MB

$ ./test.sh 3011
Running 10s test @ http://localhost:3011/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   219.72ms   62.69ms   1.12s    93.35%
    Req/Sec    38.09     18.95   180.00     63.12%
  11720 requests in 10.05s, 463.73MB read
Requests/sec:   1166.20
Transfer/sec:     46.14MB
```

## Node (babel-core/register)

```
$ ./test.sh 3012
Running 10s test @ http://localhost:3012/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   240.17ms   64.58ms   1.11s    93.14%
    Req/Sec    35.08     19.25   151.00     63.88%
  10640 requests in 10.04s, 420.99MB read
Requests/sec:   1059.77
Transfer/sec:     41.93MB

$ ./test.sh 3012
Running 10s test @ http://localhost:3012/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   219.54ms   67.73ms   1.14s    94.42%
    Req/Sec    38.15     20.75   160.00     57.06%
  11764 requests in 10.10s, 465.47MB read
Requests/sec:   1165.23
Transfer/sec:     46.10MB

$ ./test.sh 3012
Running 10s test @ http://localhost:3012/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   218.25ms   57.87ms 858.57ms   92.69%
    Req/Sec    38.24     18.12   160.00     59.18%
  11755 requests in 10.10s, 465.11MB read
Requests/sec:   1163.79
Transfer/sec:     46.05MB
```

## Node (ts-node)

```
$ ./test.sh 3020
Running 10s test @ http://localhost:3020/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   232.43ms   68.44ms   1.14s    93.74%
    Req/Sec    36.21     20.09   150.00     58.67%
  11055 requests in 10.06s, 437.41MB read
Requests/sec:   1099.44
Transfer/sec:     43.50MB

$ ./test.sh 3020
Running 10s test @ http://localhost:3020/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   234.38ms   70.61ms 989.26ms   86.83%
    Req/Sec    36.19     18.70   220.00     69.32%
  10970 requests in 10.06s, 434.05MB read
Requests/sec:   1090.32
Transfer/sec:     43.14MB

$ ./test.sh 3020
Running 10s test @ http://localhost:3020/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   219.53ms   56.06ms 857.67ms   88.71%
    Req/Sec    38.31     20.76   240.00     60.15%
  11674 requests in 10.10s, 461.91MB read
Requests/sec:   1156.21
Transfer/sec:     45.75MB
```

## Node (TypeScript)

```
$ ./test.sh 3021
Running 10s test @ http://localhost:3021/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   232.06ms   59.00ms 970.43ms   94.33%
    Req/Sec    36.04     19.49   160.00     62.05%
  10968 requests in 10.04s, 433.97MB read
Requests/sec:   1092.82
Transfer/sec:     43.24MB

$ ./test.sh 3021
Running 10s test @ http://localhost:3021/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   213.38ms   56.63ms 906.10ms   93.77%
    Req/Sec    38.96     19.95   200.00     61.80%
  12072 requests in 10.10s, 477.65MB read
Requests/sec:   1195.10
Transfer/sec:     47.29MB

$ ./test.sh 3021
Running 10s test @ http://localhost:3021/todo
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   211.70ms   51.81ms 994.86ms   92.92%
    Req/Sec    38.80     16.19   160.00     70.45%
  12093 requests in 10.04s, 478.48MB read
Requests/sec:   1204.12
Transfer/sec:     47.64MB
```