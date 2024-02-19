import ReactEcharts from "echarts-for-react";
import merge from "lodash/merge";

const defaultOption = {
  grid: { top: 16, left: 36, right: 16, bottom: 32 },
  tooltip: {
    show: true,
    trigger: "axis",

    axisPointer: { type: "cross", lineStyle: { opacity: 0 } },
    crossStyle: { color: "#000" }
  },
  series: [{ smooth: true, lineStyle: { width: 2, color: "#fff" } }],
  xAxis: {
    show: true,
    type: "category",
    showGrid: false,
    boundaryGap: false,
    axisLabel: { color: "#ccc", margin: 20 },
    axisLine: { show: false },
    axisTick: { show: false }
  },
  yAxis: {
    min: 10,
    max: 60,
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#ccc", margin: 20, fontSize: 13, fontFamily: "roboto" },
    splitLine: { show: true, lineStyle: { color: "rgba(255, 255, 255, .1)" } }
  },
  color: [
    {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      global: false,
      colorStops: [
        { offset: 0, color: "rgba(255,255,255,0.3)" },
        { offset: 1, color: "rgba(255,255,255,0)" }
      ]
    }
  ]
};

const ModifiedAreaChart = ({ height, option }) => {
  return <ReactEcharts style={{ height: height }} option={merge({}, defaultOption, option)} />;
};

export default ModifiedAreaChart;
