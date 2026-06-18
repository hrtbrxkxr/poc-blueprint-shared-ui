import type { Meta, StoryObj } from "@storybook/react";

import { AreaChart } from "./AreaChart";

const meta: Meta<typeof AreaChart> = {
  title: "Components/Chart/AreaChart",
  component: AreaChart,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

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
// Default — single series, smooth, no symbols
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Active users",
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1404, 1500, 1620, 1700, 1810],
      },
    ],
    yAxisName: "Users",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Overlapping areas (multiple series, each filled from y=0).
// ─────────────────────────────────────────────────────────────────────────────

export const Overlapping: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "Organic",
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        color: "#2563eb",
        areaOpacity: 0.35,
      },
      {
        name: "Paid",
        data: [80, 92, 81, 104, 70, 200, 180, 152, 161, 184, 240, 280],
        color: "#f59e0b",
        areaOpacity: 0.25,
      },
      {
        name: "Referral",
        data: [40, 52, 41, 64, 50, 110, 90, 72, 91, 104, 150, 180],
        color: "#10b981",
        areaOpacity: 0.25,
      },
    ],
    yAxisName: "Signups",
    height: 360,
  },
};

export const CustomOpacity: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [
      {
        name: "This year",
        data: [200, 230, 250, 280, 300, 350, 380, 400, 430, 470, 510, 560],
        color: "#2563eb",
        areaOpacity: 0.35,
      },
      {
        name: "Last year",
        data: [180, 200, 220, 240, 260, 290, 320, 340, 360, 390, 420, 460],
        color: "#f59e0b",
        areaOpacity: 0.25,
      },
    ],
    yAxisName: "Revenue (THB)",
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
        name: "Page views",
        data: [1200, 1320, 1010, 1340, 900, 2300, 2100],
      },
    ],
    title: "Daily page views",
    showLegend: true,
    yAxisName: "Views",
    height: 320,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Loading state
// ─────────────────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: {
    xAxisData: monthlyLabels,
    series: [{ name: "Active users", data: [] }],
    loading: true,
    height: 320,
  },
};
