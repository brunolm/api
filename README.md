# API

- netcore (.NET Core 2.0): http://localhost:5000/
- node: http://localhost:3000/
- node-babel: http://localhost:3010/
- node-babel-node: http://localhost:3011/
- node-babel-register: http://localhost:3012/
- node-ts: http://localhost:3020/
- node-typescript: http://localhost:3021/

## Performance results

Tests using `wrk` with the [same configuration run at aspnet/benchmarks](https://github.com/aspnet/benchmarks/blob/dev/README.md).

Route: `/todo`, Server: `localhost`

| # | Stack | Route |  Req/sec | Load Params | Observations |
| - | ----- | ------ | -------- | ----------- | ------------ |
| 1 | .NET Core 2.0 | /todo | 2445.54 | 32 threads, 256 connections | - |
| 2 | Node 8.4.0 | /todo | 1206.20 | 32 threads, 256 connections | No significant difference between transpilers |

### Raw

See [raw results at /raw](/raw)
