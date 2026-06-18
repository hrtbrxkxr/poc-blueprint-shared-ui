import type { EChartsOption } from "echarts";

import { getDefaultColor } from "../palette";
import type { BarChartProps, BarChartSeries } from "./types";

/**
 * Build the ECharts option object from our high-level BarChartProps.
 * Kept in its own function so it stays pure and trivially testable.
 */
export function buildBarChartOption({
  xAxisData,
  series,
  yAxisName,
  xAxisName,
  layout = "group",
  barMinWidth,
  barMaxWidth,
  showLegend,
  showTooltip = true,
  title,
}: BarChartProps): EChartsOption {
  const useLegend = showLegend ?? series.length > 1;
  const usePercent = layout === "stacked-percent";

  return {
    title: title
      ? { text: title, left: "left", textStyle: { fontSize: 14, fontWeight: 600 } }
      : undefined,
    tooltip: showTooltip
      ? { trigger: "axis" as const, axisPointer: { type: "shadow" as const }, confine: true }
      : { show: false },
    legend: useLegend
      ? { bottom: 0, type: "scroll" as const }
      : { show: false },
    grid: {
      left: 48,
      right: 24,
      top: title ? 48 : 24,
      bottom: useLegend ? 48 : 24,
      containLabel: true,
    },
    xAxis: {
      type: "category" as const,
      data: xAxisData,
      name: xAxisName,
      nameLocation: "middle" as const,
      nameGap: 28,
      axisLine: { lineStyle: { color: "#d4d4d8" } },
      axisLabel: { color: "#71717a", fontSize: 11 },
    },
    yAxis: {
      type: "value" as const,
      name: yAxisName,
      nameLocation: "middle" as const,
      nameGap: 40,
      max: usePercent ? 100 : undefined,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#f4f4f5" } },
      axisLabel: {
        color: "#71717a",
        fontSize: 11,
        ...(usePercent ? { formatter: "{value}%" } : {}),
      },
    },
    series: series.map((s: BarChartSeries, idx) => ({
      name: s.name,
      type: "bar" as const,
      data: s.data,
      stack: s.stack ?? (layout === "stack" || usePercent ? "total" : undefined),
      yAxisIndex: s.yAxisIndex ?? 0,
      barMinWidth,
      barMaxWidth,
      itemStyle: {
        color: s.color ?? getDefaultColor(idx),
        borderRadius: s.itemBorderRadius ?? 4,
      },
    })),
  };
}
