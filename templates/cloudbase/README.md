```
npm install
npm run dev
```

```
open http://localhost:9000
```

## Deploy

This template targets [CloudBase](https://docs.cloudbase.net/) HTTP functions: a plain Node server listening on port `9000`, started through `scf_bootstrap`.

```
npm run build
```

Then deploy this directory (including `node_modules`) as an HTTP function with the `Nodejs20.19` runtime. With the [CloudBase CLI](https://docs.cloudbase.net/cli-v1/introduce):

```
tcb fn deploy <function-name> --httpFn
```
