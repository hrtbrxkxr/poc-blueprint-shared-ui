# @platform/shared-ui

Shared, brand-agnostic UI component library consumed by the shell and every module frontend. Built on Tailwind CSS v4 + shadcn/ui (Radix primitives, class-variance-authority).

## Components

Button, Input, Label, Card, Dialog, Table, Tabs, Sonner (toasts), Spinner.

## Principles

- No business logic. Presentation only.
- No consumer-specific branding hardcoded — `--color-primary`/`--color-secondary` (and the rest of the design tokens) live in `src/styles/theme.css`, the single source of truth re-imported by every consumer's `globals.css` and by this package's own Storybook. `ThemeProvider` overwrites `--color-primary`/`--color-secondary` at runtime per consumer.
- Every component is typed, accessible, and documented in Storybook.

## Usage

```tsx
import { Button } from "@platform/shared-ui";
import "@platform/shared-ui/theme.css"; // design tokens — import once in your app's entry CSS
```

## This repo runs standalone

Clone this repo on its own (no consumer repo needed) and `pnpm storybook` works immediately:

```bash
git clone git@github.com:hrtbrxkxr/poc-blueprint-shared-ui.git
cd poc-blueprint-shared-ui
pnpm install
pnpm storybook   # http://localhost:6006
```

## Build

```bash
pnpm build       # tsc -> dist/ (JS + .d.ts) + a precompiled Tailwind CSS bundle -> dist/shared-ui.css
pnpm dev         # tsc --watch + CSS --watch, keeps dist/ live while editing
```

`dist/shared-ui.css` exists because a consumer that only has this package installed via npm (not its source) can't content-scan its `.tsx` files for Tailwind to generate utility classes from — this package ships its own fully-compiled CSS instead, exported as `@platform/shared-ui/styles.css`. A module's standalone dev playground imports that; the consumer shell instead scans this package's real source directly (it has it, via the submodule checkout) and only needs `@platform/shared-ui/theme.css` for the design tokens.

## Publishing

Published to GitHub Packages, not the public npm registry. After merging a change to `main`:

```bash
npm version patch
git push origin main --tags
```

Pushing the version tag triggers `.github/workflows/publish.yml` (build + `pnpm publish`). See [docs/submodule-guide.md](../../docs/submodule-guide.md#publishing-shared-ui--shared-utils) in the consumer repo for the full flow.

## Storybook

```bash
pnpm storybook
```
