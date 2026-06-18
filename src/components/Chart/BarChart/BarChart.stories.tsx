import type { Meta, StoryObj } from "@storybook/react";

import { BarChart } from "./BarChart";

const meta: Meta<typeof BarChart> = {
  title: "Components/Chart/BarChart",
  component: BarChart,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const monthlyLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// ─────────────────────────────────────────────────────────────────────────────
// Default — single series, grouped bars
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Signups",
        data: [120, 200, 150, 80, 70, 110, 130, 180, 210, 260, 240, 300],
      },
    ],
    yAxisName: "Signups",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Multi-series — grouped, side-by-side bars
// ─────────────────────────────────────────────────────────────────────────────

export const Grouped: Story = {
  args: {
    xAxisData: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      {
        name: "2024",
        data: [320, 410, 360, 480],
        color: "#2563eb",
      },
      {
        name: "2025",
        data: [380, 460, 420, 550],
        color: "#f59e0b",
      },
    ],
    yAxisName: "Revenue (THB)",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stacked — bars on top of each other (use stack: "total" or set layout: "stack")
// ─────────────────────────────────────────────────────────────────────────────

export const Stacked: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Organic",
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        stack: "total",
      },
      {
        name: "Paid",
        data: [80, 92, 81, 104, 70, 200, 180, 152, 161, 184, 240, 280],
        stack: "total",
      },
      {
        name: "Referral",
        data: [40, 52, 41, 64, 50, 110, 90, 72, 91, 104, 150, 180],
        stack: "total",
      },
    ],
    layout: "stack",
    yAxisName: "Signups",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stacked percent — 100% normalized (good for share-of-total views)
// ─────────────────────────────────────────────────────────────────────────────

export const StackedPercent: Story = {
  args: {
    xAxisData: ["Mobile", "Desktop", "Tablet"],
    series: [
      {
        name: "Direct",
        data: [40, 25, 10],
      },
      {
        name: "Search",
        data: [35, 50, 30],
      },
      {
        name: "Social",
        data: [25, 25, 60],
      },
    ],
    layout: "stacked-percent",
    title: "Traffic share by device",
    yAxisName: "Share",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// With title + legend forced on
// ─────────────────────────────────────────────────────────────────────────────

export const WithTitle: Story = {
  args: {
    xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [
      {
        name: "This week",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Last week",
        data: [100, 112, 91, 114, 80, 200, 190],
      },
    ],
    title: "Daily signups",
    showLegend: true,
    yAxisName: "Signups",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Loading state
// ─────────────────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [{ name: "Signups", data: [] }],
    loading: true,
    height: 320,
  },
};
