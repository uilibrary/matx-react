import ReactEcharts from "echarts-for-react";
import { merge } from "lodash";

const defaultOption = {
  grid: { top: 16, left: 36, right: 16, bottom: 32 },

  tooltip: {
    show: true,
    trigger: "axis",
    crossStyle: { color: "#000" },
    axisPointer: { type: "cross", lineStyle: { opacity: 0 } }
  },
  series: [{ smooth: true, lineStyle: { width: 2, color: "#fff" } }],
  xAxis: {
    show: true,
    showGrid: false,
    type: "category",
    boundaryGap: false,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#ccc", margin: 20 }
  },
  yAxis: {
    min: 10,
    max: 60,
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { margin: 20, fontSize: 13, color: "#ccc", fontFamily: "roboto" },
    splitLine: { show: true, lineStyle: { color: "rgba(255, 255, 255, .1)" } }
  },
  color: [
    {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      global: false,
      type: "linear",
      colorStops: [
        { offset: 0, color: "rgba(255,255,255,0.3)" },
        { offset: 1, color: "rgba(255,255,255,0)" }
      ]
    }
  ]
};

export default function AdvanceAreaChart({ height, option }) {
  return <ReactEcharts style={{ height: height }} option={merge({}, defaultOption, option)} />;
}
