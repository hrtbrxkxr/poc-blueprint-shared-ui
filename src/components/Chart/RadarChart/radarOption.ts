import type { EChartsOption } from "echarts";

import { getDefaultColor } from "../palette";
import type { RadarChartProps } from "./types";

/**
 * Build the ECharts option object from our high-level RadarChartProps.
 */
export function buildRadarChartOption({
  indicators,
  series,
  shape = "polygon",
  radius = "65%",
  showLegend = true,
  showTooltip = true,
  showLabel = true,
  title,
}: RadarChartProps): EChartsOption {
  const radarIndicator = indicators.map((ind) => ({
    name: ind.name,
    max: ind.max,
  }));

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
    radar: {
      indicator: radarIndicator.map((ind) => ({
        ...ind,
        nameTextStyle: {
          color: "#374151",
          fontSize: 12,
        },
      })),
      shape,
      radius,
      splitLine: {
        lineStyle: {
          color: "var(--color-border, #e5e7eb)",
        },
      },
      splitArea: {
        areaStyle: {
          color: ["transparent", "transparent"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "var(--color-border, #e5e7eb)",
        },
      },
    },
    series: [
      {
        name: title ?? "Radar",
        type: "radar" as const,
        data: series.map((s, idx) => ({
          name: s.name,
          value: s.value,
          lineStyle: {
            color: s.color ?? getDefaultColor(idx),
            width: 2,
          },
          areaStyle: {
            color: s.color ?? getDefaultColor(idx),
            opacity: 0.15,
          },
          itemStyle: {
            color: s.color ?? getDefaultColor(idx),
          },
          label: showLabel
            ? { show: true, formatter: "{c}", fontSize: 11 }
            : { show: false },
        })),
      },
    ],
  };
}
