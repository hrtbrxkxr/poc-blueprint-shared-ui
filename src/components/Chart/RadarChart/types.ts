import type { CSSProperties } from "react";

/**
 * A single indicator (axis) in the radar chart.
 * `name` is the label shown on the axis; `max` is the optional max value.
 */
export interface RadarChartIndicator {
  name: string;
  max?: number;
}

/**
 * One data series rendered as a closed polygon on the radar.
 * `name` is shown in legend / tooltip; `value` aligns with `indicators`.
 */
export interface RadarChartSeries {
  name: string;
  value: number[];
  /** Optional explicit color; otherwise we pull from the theme palette. */
  color?: string;
}

/**
 * Public props for the RadarChart component.
 */
export interface RadarChartProps {
  /** Indicators (axes) defining the radar shape. Order matters. */
  indicators: RadarChartIndicator[];
  /** One or more series plotted on the radar. Each series value aligns with indicators. */
  series: RadarChartSeries[];

  /** Chart height in CSS units (px by default). */
  height?: number | string;
  /** Chart width. Defaults to "100%". */
  width?: number | string;

  /** Shape of the radar. Defaults to "polygon" (closed). */
  shape?: "polygon" | "circle";

  /** Radius of the radar in px or % string. */
  radius?: number | string;

  /** Show legend. Defaults to true when more than one series. */
  showLegend?: boolean;
  /** Show tooltip on hover. Defaults to true. */
  showTooltip?: boolean;
  /** Show value labels on radar vertices. Defaults to true. */
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
