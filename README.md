# npm-sv

> [!CAUTION]
> This is an experimental package resulting from [this repo](https://github.com/svaraborut/npm-sv). Its sole purpose is
> to experiment with semantic versioning and GitHub Action release automation. USE IT AT YOUR OWN DISCRETION.

## Steps

### Technologies

- **Typescript**. Configured for modern `ES2020` builds. Provides two import aliases `@` and `@test`
- **Prettier**. With sane code cleaning defaults and automated import sorting.
- **Vite**. Configured to build to exclude all the Node builtins, `peerDependencies` and `devDependencies` from the
  bundle.
    - `npm run build` to build `src/index.ts` as a library
    - `npm run dev` to serve the contents of `demo` in development mode for experimentation with the library

### 1. Prepare the repository

- Create a GitHub repository with a `name` and `description`
- Prepare the project with `git` and `npm` initialized. Provide `name` `description` and `author`. Version should be
  `1.0.0`. This repository also includes all this [technologies](#technologies)
- Push to GitHub

## Docs

Dummy library documentation. Not intended for production use.

Generate a random fruit emoji

```typescript
import { fruit } from 'npm-sv'

fruit() // -> 🍊
```

## Todo

- How to [move index.html](https://stackoverflow.com/questions/71295772) to `demo`
