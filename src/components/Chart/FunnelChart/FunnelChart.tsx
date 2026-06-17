import * as React from "react";
import ReactECharts from "echarts-for-react";

import { cn } from "../../../lib/utils";
import { buildFunnelChartOption } from "./funnelOption";
import type { FunnelChartProps } from "./types";

/**
 * FunnelChart — a thin, opinionated wrapper around echarts-for-react.
 * Use for conversion pipelines (signups → activated → paid) where stage
 * size matters and order is meaningful.
 */
function FunnelChart({
  data,
  height = 360,
  width = "100%",
  orient = "vertical",
  funnelAlign = "center",
  sort = "descending",
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  loading = false,
  title,
  className,
  style,
}: FunnelChartProps) {
  const option = React.useMemo(
    () =>
      buildFunnelChartOption({
        data,
        orient,
        funnelAlign,
        sort,
        showLegend,
        showTooltip,
        showLabel,
        title,
      }),
    [data, orient, funnelAlign, sort, showLegend, showTooltip, showLabel, title],
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

FunnelChart.displayName = "FunnelChart";

export { FunnelChart };
export type {
  FunnelChartProps,
  FunnelChartDatum,
  FunnelOrient,
} from "./types";
