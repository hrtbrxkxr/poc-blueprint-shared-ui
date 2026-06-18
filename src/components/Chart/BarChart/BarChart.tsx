import * as React from "react";
import ReactECharts from "echarts-for-react";

import { cn } from "../../../lib/utils";
import { buildBarChartOption } from "./barOption";
import type { BarChartProps } from "./types";

/**
 * BarChart — a thin, opinionated wrapper around echarts-for-react.
 *
 * Mirrors the LineChart API surface so charts feel consistent to consumers.
 * Use this instead of ReactECharts directly so chart styling stays
 * consistent across the white-label platform.
 */
function BarChart({
  xAxisData,
  series,
  height = 320,
  width = "100%",
  yAxisName,
  xAxisName,
  layout = "group",
  barMinWidth,
  barMaxWidth,
  showLegend,
  showTooltip = true,
  loading = false,
  title,
  className,
  style,
}: BarChartProps) {
  const option = React.useMemo(
    () =>
      buildBarChartOption({
        xAxisData,
        series,
        yAxisName,
        xAxisName,
        layout,
        barMinWidth,
        barMaxWidth,
        showLegend,
        showTooltip,
        title,
      }),
    [
      xAxisData,
      series,
      yAxisName,
      xAxisName,
      layout,
      barMinWidth,
      barMaxWidth,
      showLegend,
      showTooltip,
      title,
    ],
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

BarChart.displayName = "BarChart";

export { BarChart };
export type { BarChartProps, BarChartSeries, BarLayout } from "./types";
