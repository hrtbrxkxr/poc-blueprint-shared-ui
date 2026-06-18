import * as React from "react";
import ReactECharts from "echarts-for-react";

import { cn } from "../../../lib/utils";
import { buildLineChartOption } from "../LineChart/lineOption";
import type { LineChartProps } from "../LineChart/types";

/**
 * AreaChart — a line chart with the area under each series filled.
 *
 * Reuses LineChart's option builder (which now reads `areaOpacity` on each
 * series) instead of duplicating the entire ECharts configuration.
 * Defaults to smooth curves with hidden point symbols — the conventional
 * area-chart look.
 */
function AreaChart({
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
  // Pre-fill areaOpacity (0.25 default) and the standard "smooth + no symbol"
  // defaults on every series, but let callers override.
  const normalizedSeries = React.useMemo(
    () =>
      series.map((s) => ({
        smooth: true,
        showSymbol: false,
        ...s,
        areaOpacity: s.areaOpacity ?? 0.25,
      })),
    [series],
  );

  const option = React.useMemo(
    () =>
      buildLineChartOption({
        xAxisData,
        series: normalizedSeries,
        yAxisName,
        xAxisName,
        showLegend,
        showTooltip,
        title,
      }),
    [xAxisData, normalizedSeries, yAxisName, xAxisName, showLegend, showTooltip, title],
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

AreaChart.displayName = "AreaChart";

export { AreaChart };
export type { LineChartProps as AreaChartProps, LineChartSeries as AreaChartSeries } from "../LineChart/types";
