## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Your server should now be running on http://localhost:3000.

## Linting

Set up ESLint by running:

```bash
npm init @eslint/config@latest
```

Follow the on-screen instructions, selecting `node` as the target environment. To lint your project, run:

```bash
npx eslint "src/**"
```

## Formatting

Install Prettier and create a default configuration file:

```bash
npm install -D prettier
echo "{}" > .prettierrc
```

To check the formatting across the entire project, run:

```bash
npx prettier . --check
```
