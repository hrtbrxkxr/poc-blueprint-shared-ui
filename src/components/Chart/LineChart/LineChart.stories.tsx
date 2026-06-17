import type { Meta, StoryObj } from "@storybook/react";

import { LineChart } from "./LineChart";

const meta: Meta<typeof LineChart> = {
  title: "Components/Chart/LineChart",
  component: LineChart,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

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
// Basic usage
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Revenue",
        data: [120, 200, 150, 80, 70, 110, 130, 180, 210, 260, 240, 300],
      },
    ],
    yAxisName: "Revenue (THB)",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Multiple series — legend appears automatically
// ─────────────────────────────────────────────────────────────────────────────

export const MultiSeries: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Revenue",
        data: [120, 200, 150, 80, 70, 110, 130, 180, 210, 260, 240, 300],
        color: "#2563eb",
      },
      {
        name: "Cost",
        data: [80, 110, 95, 60, 55, 75, 90, 120, 140, 170, 160, 190],
        color: "#f59e0b",
        lineStyle: "dashed",
      },
    ],
    yAxisName: "Amount (THB)",
    height: 360,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Smooth line (area-style visual)
// ─────────────────────────────────────────────────────────────────────────────

export const Smooth: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Active Users",
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1404, 1500, 1620, 1700, 1810],
        smooth: true,
        showSymbol: false,
      },
    ],
    yAxisName: "Users",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// With title + forced legend
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
        lineStyle: "dotted",
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
    series: [{ name: "Revenue", data: [] }],
    loading: true,
    height: 320,
  },
};
