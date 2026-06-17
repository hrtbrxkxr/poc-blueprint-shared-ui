# @platform/shared-ui

Shared, brand-agnostic UI component library consumed by the shell and every module frontend.

## Components

Button, Input, Modal, Table, Tabs, Toast, Loader, Card.

## Principles

- No business logic. Presentation only.
- No consumer-specific branding hardcoded — colors/fonts come from CSS variables set by `ThemeProvider`.
- Every component is typed, accessible, and documented in Storybook.

## Usage

```tsx
import { Button } from "@platform/shared-ui";
```

## Storybook

```bash
pnpm storybook
```
