import type { EChartsOption } from "echarts";

import { getDefaultColor } from "../palette";
import type { FunnelChartProps } from "./types";

/**
 * Build the ECharts option object from our high-level FunnelChartProps.
 */
export function buildFunnelChartOption({
  data,
  orient = "vertical",
  funnelAlign = "center",
  sort = "descending",
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  title,
}: FunnelChartProps): EChartsOption {
  return {
    title: title
      ? { text: title, left: "left", textStyle: { fontSize: 14, fontWeight: 600 } }
      : undefined,
    tooltip: showTooltip
      ? { trigger: "item" as const, confine: true }
      : { show: false },
    legend: showLegend
      ? { bottom: 0, type: "scroll" as const }
      : { show: false },
    series: [
      {
        name: title ?? "Funnel",
        type: "funnel" as const,
        left: "10%",
        right: "10%",
        top: title ? 48 : 24,
        bottom: showLegend ? 48 : 24,
        width: "80%",
        min: 0,
        max: Math.max(...data.map((d) => d.value), 0),
        minSize: "0%",
        maxSize: "100%",
        sort,
        orient,
        funnelAlign,
        gap: 4,
        label: showLabel
          ? { show: true, position: "inside" as const, formatter: "{b}: {c}" }
          : { show: false },
        labelLine: { show: false },
        data: data.map((d, idx) => ({
          name: d.name,
          value: d.value,
          itemStyle: { color: d.color ?? getDefaultColor(idx) },
        })),
      },
    ],
  };
}
