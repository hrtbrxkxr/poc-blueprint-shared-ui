import * as React from "react";
import ReactECharts from "echarts-for-react";

import { cn } from "../../../lib/utils";
import { buildLineChartOption } from "./lineOption";
import type { LineChartProps } from "./types";

/**
 * LineChart — a thin, opinionated wrapper around echarts-for-react.
 *
 * Callers pass high-level props (series data, axis labels, height, etc.)
 * and we translate that into an ECharts option object internally.
 * Use this instead of ReactECharts directly so chart styling stays
 * consistent across the white-label platform.
 */
function LineChart({
  xAxisData,
  series,
  height = 320,
  width = "100%",
  yAxisName,
  xAxisName,
  showLegend,
  showTooltip = true,
  loading = false,
  title,
  className,
  style,
}: LineChartProps) {
  const option = React.useMemo(
    () =>
      buildLineChartOption({
        xAxisData,
        series,
        yAxisName,
        xAxisName,
        showLegend,
        showTooltip,
        title,
      }),
    [xAxisData, series, yAxisName, xAxisName, showLegend, showTooltip, title],
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

LineChart.displayName = "LineChart";

export { LineChart };
export type { LineChartProps, LineChartSeries } from "./types";
