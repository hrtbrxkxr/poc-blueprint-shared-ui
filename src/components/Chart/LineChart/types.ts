import type { CSSProperties } from "react";

/**
 * One data series rendered as a line on the chart.
 * `name` is shown in legend / tooltip; `data` is the y-values.
 * X-axis values come from the `xAxisData` prop on the chart.
 */
export interface LineChartSeries {
  name: string;
  data: Array<number | [number, number] | null>;
  /** Optional explicit color; otherwise we pull from the theme palette. */
  color?: string;
  /** Line style. "solid" | "dashed" | "dotted" */
  lineStyle?: "solid" | "dashed" | "dotted";
  /** Show points on the line. Defaults to true. */
  showSymbol?: boolean;
  /** Curve smoothing. Defaults to false. */
  smooth?: boolean;
  /**
   * Area fill opacity 0–1. When set, the area under the line is filled.
   * (Used by AreaChart; harmless on LineChart — left here so both can share
   * the same option builder.)
   */
  areaOpacity?: number;
  /** Optional y-axis index for multi-axis charts. */
  yAxisIndex?: number;
}

/**
 * Public props for the LineChart component.
 * Designed to be a thin, opinionated wrapper around echarts-for-react —
 * callers only deal with high-level chart shape, not ECharts internals.
 */
export interface LineChartProps {
  /** X-axis category labels (one per data point). */
  xAxisData: string[];
  /** One or more line series. */
  series: LineChartSeries[];

  /** Chart height in CSS units (px by default). Required — ECharts needs an explicit size. */
  height?: number | string;
  /** Chart width. Defaults to "100%". */
  width?: number | string;

  /** Y-axis label / unit (e.g. "Revenue (THB)"). */
  yAxisName?: string;
  /** X-axis label. */
  xAxisName?: string;

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
