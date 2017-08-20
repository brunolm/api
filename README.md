# API

## Urls

Before you start any applications make sure env is set to production

```
$env:ASPNETCORE_ENVIRONMENT="Production";
$env:NODE_ENV='production';
```

### .NET Core

- netcore (.NET Core 2.0): http://localhost:5000/

### Node

- node: http://localhost:3000/
- node-babel: http://localhost:3010/
- node-babel-node: http://localhost:3011/
- node-babel-register: http://localhost:3012/
- node-ts: http://localhost:3020/
- node-typescript: http://localhost:3021/

### Go

- go: http://localhost:6000/

### Python

- flask: http://localhost:4000/

## Performance results

Tests using `wrk` with the [same configuration run at aspnet/benchmarks](https://github.com/aspnet/benchmarks/blob/dev/README.md).

The results bellow are from tests I ran in my machine. I ran `wrk -c 256 -t 32 -d 10 <URL>` 3 times for each project and got the best result to display here. Raw results can be seen in the [raw results at /raw](/raw).

### Route: `/todo`

| # | Stack | Route |  Req/sec | Load Params | Observations |
| - | ----- | ------ | -------- | ----------- | ------------ |
| 1 | .NET Core 2.0 | /todo | 2445.54 | 32 threads, 256 connections | - |
| 2 | Node 8.4.0 | /todo | 1206.20 | 32 threads, 256 connections | No significant difference between transpilers |
| 3 | Python 3 | /todo | 144.91 | 32 threads, 256 connections | Flask (gunicorn, socket errors) |

### Route: `/todo/:id`

| # | Stack | Route |  Req/sec | Load Params | Observations |
| - | ----- | ------ | -------- | ----------- | ------------ |
| 1 | .NET Core 2.0 | /todo/998 | 14685.99 | 32 threads, 256 connections | - |
| 2 | Node 8.4.0 | /todo/998 | 6613.77 | 32 threads, 256 connections | No significant difference between transpilers |
| 3 | Python 3 | /todo/998 | 837.87 | 32 threads, 256 connections | Flask (gunicorn, socket errors) |
