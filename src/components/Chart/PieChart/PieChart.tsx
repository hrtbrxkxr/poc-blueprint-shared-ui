import * as React from "react";
import ReactECharts from "echarts-for-react";

import { cn } from "../../../lib/utils";
import { buildPieChartOption } from "./pieOption";
import type { PieChartProps } from "./types";

/**
 * PieChart — a thin, opinionated wrapper around echarts-for-react.
 * Set `innerRadius` to render a donut chart.
 */
function PieChart({
  data,
  height = 320,
  width = "100%",
  innerRadius = 0,
  outerRadius = "65%",
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  loading = false,
  title,
  className,
  style,
}: PieChartProps) {
  const option = React.useMemo(
    () =>
      buildPieChartOption({
        data,
        innerRadius,
        outerRadius,
        showLegend,
        showTooltip,
        showLabel,
        title,
      }),
    [data, innerRadius, outerRadius, showLegend, showTooltip, showLabel, title],
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

PieChart.displayName = "PieChart";

export { PieChart };
export type { PieChartProps, PieChartDatum } from "./types";
