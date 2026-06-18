import * as React from "react";
import ReactECharts from "echarts-for-react";

import { cn } from "../../../lib/utils";
import { buildRadarChartOption } from "./radarOption";
import type { RadarChartProps } from "./types";

/**
 * RadarChart — a thin, opinionated wrapper around echarts-for-react.
 * Use for multi-variable comparisons (e.g. skill profiles, product attributes).
 */
function RadarChart({
  indicators,
  series,
  height = 360,
  width = "100%",
  shape = "polygon",
  radius = "65%",
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  loading = false,
  title,
  className,
  style,
}: RadarChartProps) {
  const option = React.useMemo(
    () =>
      buildRadarChartOption({
        indicators,
        series,
        shape,
        radius,
        showLegend,
        showTooltip,
        showLabel,
        title,
      }),
    [indicators, series, shape, radius, showLegend, showTooltip, showLabel, title],
  );

  return (
    <div className={cn("w-full", className)} style={style}>
      <ReactECharts
        option={option}
        style={{ height, width }}
        showLoading={loading}
        notMerge
        lazyUpdate
        opts={{ renderer: "canvas" }}
      />
    </div>
  );
}

RadarChart.displayName = "RadarChart";

export { RadarChart };
export type { RadarChartProps, RadarChartIndicator, RadarChartSeries } from "./types";
