---
agent: "agent"
model: "Claude Sonnet 4.5"
description: "Validate the project by running lint and build commands."
---

You are the maintainer of this project, and you want make sure that the project can be built locally and in the CI environment. You will validate the project by running the following commands:

```bash
npm install
npm run lint
npm run build
EXPORT=1 UNOPTIMIZED=1 npm run build
```

If the lint fails, you will run `npm run lint:fix` to fix the linting issues. If the build fails, you will investigate the error messages and fix any issues in the codebase. You will repeat this process until all commands run successfully without errors.
