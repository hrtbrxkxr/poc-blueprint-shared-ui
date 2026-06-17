import type { CSSProperties } from "react";

/**
 * A single stage in the funnel.
 * `name` is shown in legend / label; `value` is the stage size.
 */
export interface FunnelChartDatum {
  name: string;
  value: number;
  /** Optional explicit color; otherwise we pull from the theme palette. */
  color?: string;
}

/**
 * Funnel layout direction.
 * - "vertical"   (default): wide at top, narrow at bottom. Classic funnel.
 * - "horizontal": wide at left, narrow at right.
 */
export type FunnelOrient = "vertical" | "horizontal";

/**
 * Public props for the FunnelChart component.
 */
export interface FunnelChartProps {
  /** Stage data. Order matters — it's the funnel sequence. */
  data: FunnelChartDatum[];

  /** Chart height in CSS units (px by default). */
  height?: number | string;
  /** Chart width. Defaults to "100%". */
  width?: number | string;

  /** Layout direction. Defaults to "vertical". */
  orient?: FunnelOrient;

  /**
   * Funnel alignment between stages.
   * - "center" (default): each stage is centered over the previous.
   * - "left"  : align stages to the left edge.
   * - "right" : align stages to the right edge.
   */
  funnelAlign?: "left" | "center" | "right";

  /** Sort stages. Defaults to "descending" (largest first). */
  sort?: "ascending" | "descending" | "none";

  /** Show legend. Defaults to true. */
  showLegend?: boolean;
  /** Show tooltip on hover. Defaults to true. */
  showTooltip?: boolean;
  /** Show value labels on stages. Defaults to true. */
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
