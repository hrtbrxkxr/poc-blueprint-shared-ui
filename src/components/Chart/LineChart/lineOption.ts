import type { EChartsOption } from "echarts";

import { getDefaultColor } from "../palette";
import type { LineChartProps, LineChartSeries } from "./types";

/**
 * Build the ECharts option object from our high-level LineChartProps.
 * Kept in its own function so it stays pure and trivially testable.
 */
export function buildLineChartOption({
  xAxisData,
  series,
  yAxisName,
  xAxisName,
  showLegend,
  showTooltip = true,
  title,
}: LineChartProps): EChartsOption {
  const useLegend = showLegend ?? series.length > 1;

  return {
    title: title
      ? { text: title, left: "left", textStyle: { fontSize: 14, fontWeight: 600 } }
      : undefined,
    tooltip: showTooltip
      ? { trigger: "axis" as const, confine: true }
      : { show: false },
    legend: useLegend
      ? { bottom: 0, type: "scroll" as const }
      : { show: false },
    grid: { left: 48, right: 24, top: title ? 48 : 24, bottom: useLegend ? 48 : 24, containLabel: true },
    xAxis: {
      type: "category" as const,
      data: xAxisData,
      name: xAxisName,
      nameLocation: "middle" as const,
      nameGap: 28,
      boundaryGap: false,
      axisLine: { lineStyle: { color: "#d4d4d8" } },
      axisLabel: { color: "#71717a", fontSize: 11 },
    },
    yAxis: {
      type: "value" as const,
      name: yAxisName,
      nameLocation: "middle" as const,
      nameGap: 40,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#f4f4f5" } },
      axisLabel: { color: "#71717a", fontSize: 11 },
    },
    series: series.map((s: LineChartSeries, idx) => {
      const color = s.color ?? getDefaultColor(idx);
      const hasArea = s.areaOpacity !== undefined;
      return {
        name: s.name,
        type: "line" as const,
        data: s.data,
        smooth: s.smooth ?? false,
        showSymbol: s.showSymbol ?? true,
        yAxisIndex: s.yAxisIndex ?? 0,
        itemStyle: { color },
        lineStyle: {
          color,
          type: s.lineStyle ?? "solid",
          width: 2,
        },
        ...(hasArea
          ? {
              areaStyle: {
                color,
                opacity: s.areaOpacity,
              },
            }
          : {}),
      };
    }),
  };
}
