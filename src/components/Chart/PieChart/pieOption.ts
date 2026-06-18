import type { EChartsOption } from "echarts";

import { getDefaultColor } from "../palette";
import type { PieChartProps } from "./types";

/**
 * Build the ECharts option object from our high-level PieChartProps.
 */
export function buildPieChartOption({
  data,
  innerRadius = 0,
  outerRadius = "65%",
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  title,
}: PieChartProps): EChartsOption {
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
        name: title ?? "Pie",
        type: "pie" as const,
        radius: [innerRadius, outerRadius],
        center: ["50%", title ? "55%" : "50%"],
        avoidLabelOverlap: true,
        label: showLabel ? { show: true, formatter: "{b}: {d}%" } : { show: false },
        labelLine: showLabel ? { show: true } : { show: false },
        data: data.map((d, idx) => ({
          name: d.name,
          value: d.value,
          itemStyle: { color: d.color ?? getDefaultColor(idx) },
        })),
      },
    ],
  };
}
