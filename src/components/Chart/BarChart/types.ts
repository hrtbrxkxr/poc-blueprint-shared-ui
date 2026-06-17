import type { CSSProperties } from "react";

/**
 * One data series rendered as a set of bars.
 * `name` is shown in legend / tooltip; `data` is the y-values.
 * X-axis values come from the `xAxisData` prop on the chart.
 */
export interface BarChartSeries {
  name: string;
  data: Array<number | [number, number] | null>;
  /** Optional explicit color; otherwise we pull from the theme palette. */
  color?: string;
  /** Bar stack group id. Bars with the same stack id stack on top of each other. */
  stack?: string;
  /** Optional y-axis index for multi-axis charts. */
  yAxisIndex?: number;
  /** Bar border radius in px. Defaults to 4. */
  itemBorderRadius?: number;
}

/**
 * How bars are laid out inside a category group.
 * - "group" (default): side-by-side, one bar per series per category.
 * - "stack":          stacked vertically (per-series `stack` must match).
 * - "stacked-percent": normalized 0–100% stack.
 */
export type BarLayout = "group" | "stack" | "stacked-percent";

/**
 * Public props for the BarChart component.
 * Mirrors the shape of LineChartProps so charts feel consistent to consumers.
 */
export interface BarChartProps {
  /** X-axis category labels (one per data point). */
  xAxisData: string[];
  /** One or more bar series. */
  series: BarChartSeries[];

  /** Chart height in CSS units (px by default). Required — ECharts needs an explicit size. */
  height?: number | string;
  /** Chart width. Defaults to "100%". */
  width?: number | string;

  /** Y-axis label / unit (e.g. "Revenue (THB)"). */
  yAxisName?: string;
  /** X-axis label. */
  xAxisName?: string;

  /** How bars are laid out per category. Defaults to "group". */
  layout?: BarLayout;
  /** Min bar width in px (passed to ECharts barMinWidth). */
  barMinWidth?: number;
  /** Max bar width in px (passed to ECharts barMaxWidth). */
  barMaxWidth?: number;

  /** Show legend. Defaults to true when more than one series. */
  showLegend?: boolean;
  /** Show tooltip on hover. Defaults to true. */
  showTooltip?: boolean;

  /** Show loading skeleton. */
  loading?: boolean;

  /** Title rendered above the chart. */
  title?: string;

  /** Optional className for the wrapping div. */
  className?: string;
  /** Optional style for the wrapping div. */
  style?: CSSProperties;
}
