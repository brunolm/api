# Raw results /todo/:id

## .NET Core 2.0

```
$ ./test.sh 5000
Running 10s test @ http://localhost:5000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.33ms   29.51ms 365.56ms   97.76%
    Req/Sec   448.91    159.90     2.36k    87.50%
  138709 requests in 10.10s, 26.32MB read
Requests/sec:  13733.61
Transfer/sec:      2.61MB
Running 10s test @ http://localhost:5000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.40ms    7.01ms  72.50ms   78.45%
    Req/Sec   463.79    150.20     2.37k    83.15%
  148952 requests in 10.14s, 28.27MB read
Requests/sec:  14685.99
Transfer/sec:      2.79MB
Running 10s test @ http://localhost:5000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.84ms    8.17ms 106.08ms   76.58%
    Req/Sec   457.22    178.39     2.38k    81.81%
  145872 requests in 10.11s, 27.68MB read
Requests/sec:  14432.71
Transfer/sec:      2.74MB
```

## Node

```
$ ./test.sh 3000
Running 10s test @ http://localhost:3000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    44.58ms    9.60ms 230.50ms   90.96%
    Req/Sec   181.15     34.65   400.00     76.82%
  57923 requests in 10.10s, 13.92MB read
Requests/sec:   5734.29
Transfer/sec:      1.38MB
Running 10s test @ http://localhost:3000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    41.39ms    5.58ms 181.98ms   89.24%
    Req/Sec   194.00     29.85   404.00     62.78%
  62233 requests in 10.10s, 14.96MB read
Requests/sec:   6160.42
Transfer/sec:      1.48MB
Running 10s test @ http://localhost:3000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    41.48ms    6.58ms 162.61ms   87.32%
    Req/Sec   193.69     34.15   440.00     72.06%
  62108 requests in 10.10s, 14.93MB read
Requests/sec:   6148.89
Transfer/sec:      1.48MB
```

## Node (Babel)

```
$ ./test.sh 3010
Running 10s test @ http://localhost:3010/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    42.20ms    9.57ms 278.42ms   91.17%
    Req/Sec   191.65     34.47   390.00     75.39%
  61327 requests in 10.10s, 14.74MB read
Requests/sec:   6071.97
Transfer/sec:      1.46MB
Running 10s test @ http://localhost:3010/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    39.33ms    5.32ms 169.06ms   90.57%
    Req/Sec   204.39     32.37   530.00     55.53%
  65516 requests in 10.10s, 15.75MB read
Requests/sec:   6486.84
Transfer/sec:      1.56MB
Running 10s test @ http://localhost:3010/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    39.61ms    5.14ms 150.08ms   86.53%
    Req/Sec   202.78     32.60   510.00     56.53%
  65056 requests in 10.10s, 15.63MB read
Requests/sec:   6442.39
Transfer/sec:      1.55MB
```

## Node (babel-node)

```
$ ./test.sh 3011
Running 10s test @ http://localhost:3011/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    50.21ms   23.71ms 499.45ms   93.78%
    Req/Sec   166.06     37.82   320.00     72.55%
  52694 requests in 10.10s, 12.66MB read
Requests/sec:   5217.15
Transfer/sec:      1.25MB
Running 10s test @ http://localhost:3011/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    48.10ms   10.57ms 200.18ms   85.22%
    Req/Sec   167.37     32.39   380.00     72.99%
  53602 requests in 10.10s, 12.88MB read
Requests/sec:   5307.71
Transfer/sec:      1.28MB
Running 10s test @ http://localhost:3011/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.28ms    8.59ms 154.75ms   87.08%
    Req/Sec   177.28     35.75   400.00     74.82%
  56897 requests in 10.10s, 13.67MB read
Requests/sec:   5633.17
Transfer/sec:      1.35MB
```

## Node (babel-core/register)

```
$ ./test.sh 3012
Running 10s test @ http://localhost:3012/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    49.13ms   20.25ms 450.51ms   93.68%
    Req/Sec   168.17     35.95   242.00     72.50%
  53153 requests in 10.05s, 12.77MB read
Requests/sec:   5289.40
Transfer/sec:      1.27MB
Running 10s test @ http://localhost:3012/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    44.38ms   11.78ms 289.10ms   92.43%
    Req/Sec   182.87     38.78     0.91k    79.15%
  58260 requests in 10.10s, 14.00MB read
Requests/sec:   5768.64
Transfer/sec:      1.39MB
Running 10s test @ http://localhost:3012/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    44.15ms    8.80ms 163.51ms   86.72%
    Req/Sec   182.13     36.36   474.00     75.17%
  58206 requests in 10.10s, 13.99MB read
Requests/sec:   5763.80
Transfer/sec:      1.39MB
```

## Node (ts-node)

```
$ ./test.sh 3020
Running 10s test @ http://localhost:3020/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    47.88ms   25.99ms 514.26ms   94.49%
    Req/Sec   176.14     41.55   250.00     70.97%
  55656 requests in 10.06s, 13.38MB read
Requests/sec:   5533.24
Transfer/sec:      1.33MB
Running 10s test @ http://localhost:3020/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    40.83ms    6.96ms 192.36ms   93.14%
    Req/Sec   197.35     33.13   404.00     51.66%
  63041 requests in 10.05s, 15.15MB read
Requests/sec:   6272.88
Transfer/sec:      1.51MB
Running 10s test @ http://localhost:3020/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    40.62ms    5.72ms 169.16ms   87.25%
    Req/Sec   197.90     30.45   434.00     57.19%
  63229 requests in 10.05s, 15.20MB read
Requests/sec:   6293.19
Transfer/sec:      1.51MB
```

## Node (TypeScript)

```
$ ./test.sh 3021
Running 10s test @ http://localhost:3021/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    43.65ms   17.89ms 437.48ms   94.26%
    Req/Sec   189.10     40.69   373.00     69.60%
  60025 requests in 10.10s, 14.43MB read
Requests/sec:   5942.85
Transfer/sec:      1.43MB
Running 10s test @ http://localhost:3021/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    39.95ms    6.76ms 206.00ms   95.16%
    Req/Sec   201.68     39.55     1.24k    83.47%
  64442 requests in 10.10s, 15.49MB read
Requests/sec:   6380.77
Transfer/sec:      1.53MB
Running 10s test @ http://localhost:3021/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    38.43ms    5.91ms 160.66ms   90.00%
    Req/Sec   209.19     48.37     1.81k    88.42%
  66790 requests in 10.10s, 16.05MB read
Requests/sec:   6613.77
Transfer/sec:      1.59MB
```

## Python (Flask)

```
$ ./test.sh 4000
Running 10s test @ http://localhost:4000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   146.69ms   74.98ms 844.47ms   80.35%
    Req/Sec    27.80     13.48    78.00     68.92%
  8472 requests in 10.11s, 1.68MB read
  Socket errors: connect 0, read 11484, write 0, timeout 0
Requests/sec:    837.87
Transfer/sec:    170.19KB

$ ./test.sh 4000
Running 10s test @ http://localhost:4000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   166.96ms   74.51ms 428.38ms   66.65%
    Req/Sec    28.97     10.55    86.00     71.32%
  7903 requests in 10.09s, 1.57MB read
  Socket errors: connect 124, read 893, write 0, timeout 0
Requests/sec:    783.10
Transfer/sec:    159.07KB

$ ./test.sh 4000
Running 10s test @ http://localhost:4000/todo/998
  32 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    93.59ms  100.34ms 341.90ms   77.99%
    Req/Sec    31.17     24.10   100.00     63.83%
  209 requests in 10.09s, 42.45KB read
  Socket errors: connect 156, read 0, write 0, timeout 0
Requests/sec:     20.71
Transfer/sec:      4.21KB
```