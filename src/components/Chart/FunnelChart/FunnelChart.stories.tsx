import type { Meta, StoryObj } from "@storybook/react";

import { FunnelChart } from "./FunnelChart";

const meta: Meta<typeof FunnelChart> = {
  title: "Components/Chart/FunnelChart",
  component: FunnelChart,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof FunnelChart>;

// ─────────────────────────────────────────────────────────────────────────────
// Default — vertical conversion funnel
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    data: [
      { name: "Visited", value: 10000 },
      { name: "Signed up", value: 6200 },
      { name: "Activated", value: 4100 },
      { name: "Subscribed", value: 1800 },
      { name: "Retained", value: 900 },
    ],
    title: "Conversion funnel",
    height: 400,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Sales pipeline
// ─────────────────────────────────────────────────────────────────────────────

export const SalesPipeline: Story = {
  args: {
    data: [
      { name: "Leads", value: 1200, color: "#2563eb" },
      { name: "Qualified", value: 800, color: "#06b6d4" },
      { name: "Proposal", value: 450, color: "#f59e0b" },
      { name: "Negotiation", value: 220, color: "#f97316" },
      { name: "Won", value: 95, color: "#10b981" },
    ],
    funnelAlign: "center",
    sort: "none", // keep pipeline order, don't sort by size
    title: "Sales pipeline",
    height: 400,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Horizontal funnel
// ─────────────────────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  args: {
    data: [
      { name: "Step 1", value: 100 },
      { name: "Step 2", value: 75 },
      { name: "Step 3", value: 50 },
      { name: "Step 4", value: 25 },
      { name: "Step 5", value: 10 },
    ],
    orient: "horizontal",
    funnelAlign: "center",
    sort: "descending",
    title: "Drop-off (left → right)",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// No labels (legend-only)
// ─────────────────────────────────────────────────────────────────────────────

export const LegendOnly: Story = {
  args: {
    data: [
      { name: "A", value: 1000 },
      { name: "B", value: 700 },
      { name: "C", value: 400 },
      { name: "D", value: 150 },
    ],
    showLabel: false,
    title: "Stages",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Loading state
// ─────────────────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: {
    data: [],
    loading: true,
    title: "Conversion funnel",
    height: 400,
  },
};
