import type { Meta, StoryObj } from "@storybook/react";

import { RadarChart } from "./RadarChart";
import type { RadarChartIndicator, RadarChartSeries } from "./types";

const meta: Meta<typeof RadarChart> = {
  title: "Components/Chart/RadarChart",
  component: RadarChart,
  tags: ["autodocs"],
  argTypes: {
    height: { control: "number" },
    width: { control: "text" },
    shape: {
      control: "select",
      options: ["polygon", "circle"],
    },
    showLegend: { control: "boolean" },
    showTooltip: { control: "boolean" },
    showLabel: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof RadarChart>;

const indicators: RadarChartIndicator[] = [
  { name: "Speed", max: 100 },
  { name: "Power", max: 100 },
  { name: "Defense", max: 100 },
  { name: "Attack", max: 100 },
  { name: "Magic", max: 100 },
  { name: "Stamina", max: 100 },
];

const singleSeries: RadarChartSeries[] = [
  {
    name: "Hero A",
    value: [85, 70, 60, 90, 55, 80],
    color: "var(--color-primary, #2563eb)",
  },
];

const multiSeries: RadarChartSeries[] = [
  {
    name: "Hero A",
    value: [85, 70, 60, 90, 55, 80],
  },
  {
    name: "Hero B",
    value: [60, 90, 80, 50, 95, 65],
  },
  {
    name: "Hero C",
    value: [75, 55, 90, 70, 60, 85],
  },
];

export const Default: Story = {
  args: {
    indicators,
    series: singleSeries,
    height: 360,
    title: "Hero Stats",
  },
};

export const MultipleSeries: Story = {
  args: {
    indicators,
    series: multiSeries,
    height: 400,
    title: "Team Comparison",
  },
};

export const CircleShape: Story = {
  args: {
    indicators,
    series: singleSeries,
    shape: "circle",
    height: 360,
    title: "Circular Radar",
  },
};

export const NoLegend: Story = {
  args: {
    indicators,
    series: singleSeries,
    showLegend: false,
    height: 320,
  },
};

export const NoLabel: Story = {
  args: {
    indicators,
    series: multiSeries,
    showLabel: false,
    height: 360,
  },
};

export const Loading: Story = {
  args: {
    indicators,
    series: singleSeries,
    loading: true,
    height: 360,
  },
};
