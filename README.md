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

### Python

- flask: http://localhost:4000/

## Performance results

You can test on your own using `wrk` with the [same configuration run at aspnet/benchmarks](https://github.com/aspnet/benchmarks/blob/dev/README.md).

Performance comparison https://www.techempower.com/benchmarks/#section=data-r14&hw=ph&test=json&l=8vmltp
