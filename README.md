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

### 2. Automation

Versioning is automated via the `semantic-versioning` solution. The configuration is present
in [.releaserc.mjson](.releaserc.mjs) and is configured with a san default that will:

- Maintain the `CHANGELOG.md` file
- Automatically manage releases via the `main` branch
- Automatically manage canary releases via the `canary` branch
- Handle GitOps. By [default](https://github.com/semantic-release/git) the commit user is `@semantic-release-bot`. The
  actions are:
    - Issues mentioned in release commits will receive a comment with the release
    - Pull requests will receive a comment with the release
- Update the package version and create a `bot()` commit to bump package when creating a production release

## Docs

Dummy library documentation. Not intended for production use.

Generate a random fruit emoji

```typescript
import { fruit } from 'npm-sv'

fruit() // -> 🍊
```

## Todo

- How to [move index.html](https://stackoverflow.com/questions/71295772) to `demo`
