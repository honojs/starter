```
npm install
npm run start
```

```
open http://localhost:3000
```

Notes:

- This project adds TypeScript and the type definitions for Node.js as a 
"devDependency", to enable automatic type checking (at least in VSCode) for the 
JavaScript source files.

- Type checking is configured via `jsconfig.json`.

- To check (and not emit) the JavaScript source files directly with the 
TypeScript compiler, use: `tsc --noEmit --project jsconfig.json`
