import type { CSSProperties } from "react";

/**
 * A single slice in the pie/donut chart.
 * `name` is shown in legend / tooltip; `value` is the slice size.
 */
export interface PieChartDatum {
  name: string;
  value: number;
  /** Optional explicit color; otherwise we pull from the theme palette. */
  color?: string;
}

/**
 * Public props for the PieChart component.
 */
export interface PieChartProps {
  /** Slice data. */
  data: PieChartDatum[];

  /** Chart height in CSS units (px by default). */
  height?: number | string;
  /** Chart width. Defaults to "100%". */
  width?: number | string;

  /** Inner radius in px. 0 = pie, >0 = donut. Defaults to 0. */
  innerRadius?: number | string;
  /** Outer radius in px or percentage. Defaults to "65%". */
  outerRadius?: number | string;

  /** Show legend. Defaults to true. */
  showLegend?: boolean;
  /** Show tooltip on hover. Defaults to true. */
  showTooltip?: boolean;
  /** Show value labels on slices. Defaults to true. */
  showLabel?: boolean;

  /** Show loading skeleton. */
  loading?: boolean;

  /** Title rendered above the chart. */
  title?: string;

  /** Optional className for the wrapping div. */
  className?: string;
  /** Optional style for the wrapping div. */
  style?: CSSProperties;
}
