/**
 * Default line/bar color palette — pulled from CSS custom properties set by
 * applyThemeVariables so charts adapt to the active white-label theme.
 * Fallback hex values are used when the CSS vars are not present (e.g. in
 * Storybook without a provider mounted).
 */
const DEFAULT_PALETTE = [
  "var(--color-primary, #2563eb)",
  "var(--color-secondary, #f59e0b)",
  "#10b981",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

function readPaletteVar(name: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export function getDefaultColor(index: number): string {
  // Resolve the first two from CSS vars at runtime, the rest are fixed.
  const resolved = [
    readPaletteVar("--color-primary", DEFAULT_PALETTE[0]!),
    readPaletteVar("--color-secondary", DEFAULT_PALETTE[1]!),
    ...DEFAULT_PALETTE.slice(2),
  ];
  return resolved[index % resolved.length]!;
}
