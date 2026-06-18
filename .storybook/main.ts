import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  // Storybook 9+ folds essentials (controls, actions, viewport, backgrounds,
  // docs) into core — no separate addon-essentials package needed/compatible.
  framework: { name: "@storybook/react-vite", options: {} },
  async viteFinal(viteConfig) {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), tailwindcss()];
    return viteConfig;
  },
};

export default config;
