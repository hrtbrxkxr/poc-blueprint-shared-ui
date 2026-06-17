export interface ThemeVariables {
  "--color-primary": string;
  "--color-secondary": string;
  "--font-family": string;
}

export function applyThemeVariables(vars: ThemeVariables, target: HTMLElement = document.documentElement) {
  Object.entries(vars).forEach(([key, value]) => target.style.setProperty(key, value));
}
