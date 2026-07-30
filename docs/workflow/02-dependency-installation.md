# Dependency Installation

Date: 2026-07-30

## Problem

`npm ci` failed before this task even though `npm install` had previously succeeded.

Observed command:

```bash
npm ci
```

Observed failure summary:

```text
npm error `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync.
npm error Missing: @emnapi/core@ from lock file
npm error Invalid: lock file's @emnapi/runtime@1.10.0 does not satisfy @emnapi/runtime@
npm error Invalid: lock file's @napi-rs/wasm-runtime@1.2.0 does not satisfy @napi-rs/wasm-runtime@
```

## Cause

The lockfile was missing bundled optional dependency entries for Tailwind's `@tailwindcss/oxide-wasm32-wasi` package. npm's stricter clean-install validation refused the lockfile even though the failing package is optional and platform-specific.

The repair did not require changing the application dependency versions.

## Repair

The lockfile was repaired with:

```bash
npm install --package-lock-only --ignore-scripts
```

During local execution, npm's default user cache was not writable in the sandboxed environment, so the local verification used the ignored workspace cache:

```powershell
$env:npm_config_cache = (Join-Path (Resolve-Path .).Path '.npm')
npm.cmd install --package-lock-only --ignore-scripts
```

## Result

After the lockfile repair:

```bash
npm ci
```

completed successfully.

Remaining npm warnings:

- peer override warnings under optional `@unrs/resolver-binding-wasm32-wasi`
- npm allow-scripts warnings for packages with install scripts
- npm audit currently reports high severity findings

Those warnings are not hidden in CI. They should be reviewed separately, but they no longer prevent reproducible installation.
