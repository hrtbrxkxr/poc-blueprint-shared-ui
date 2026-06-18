import type { Meta, StoryObj } from "@storybook/react";

import { PieChart } from "./PieChart";

const meta: Meta<typeof PieChart> = {
  title: "Components/Chart/PieChart",
  component: PieChart,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

// ─────────────────────────────────────────────────────────────────────────────
// Default — solid pie
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    data: [
      { name: "Search", value: 1048 },
      { name: "Direct", value: 735 },
      { name: "Email", value: 580 },
      { name: "Social", value: 484 },
      { name: "Other", value: 300 },
    ],
    title: "Traffic sources",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Donut — set innerRadius
// ─────────────────────────────────────────────────────────────────────────────

export const Donut: Story = {
  args: {
    data: [
      { name: "Active", value: 4200 },
      { name: "Trialing", value: 1800 },
      { name: "Churned", value: 600 },
    ],
    innerRadius: "55%",
    outerRadius: "75%",
    title: "Customer status",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Custom colors + hidden legend
// ─────────────────────────────────────────────────────────────────────────────

export const CustomColors: Story = {
  args: {
    data: [
      { name: "Approved", value: 320, color: "#10b981" },
      { name: "Pending", value: 180, color: "#f59e0b" },
      { name: "Rejected", value: 60, color: "#ef4444" },
    ],
    showLegend: false,
    showLabel: true,
    title: "Application outcomes",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Loading state
// ─────────────────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: {
    data: [],
    loading: true,
    title: "Traffic sources",
    height: 360,
  },
};
