import ReactEcharts from "echarts-for-react";
import { useTheme } from "@mui/material/styles";

export default function DoughnutChart({ height, color = [] }) {
  const theme = useTheme();

  const option = {
    legend: {
      bottom: 0,
      show: true,
      itemGap: 20,
      icon: "circle",
      textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
    },
    tooltip: { show: false, trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
    xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
    yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

    series: [
      {
        name: "Traffic Rate",
        type: "pie",
        hoverOffset: 5,
        radius: ["45%", "72.55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        stillShowZeroSum: false,
        labelLine: { show: false },
        label: {
          show: false,
          fontSize: 13,
          formatter: "{a}",
          position: "center",
          fontFamily: "roboto",
          color: theme.palette.text.secondary
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            padding: 4,
            fontWeight: "normal",
            // formatter: "{b} \n{c} ({d}%)"
            formatter: "{b} ({d}%)"
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        data: [
          { value: 65, name: "Google" },
          { value: 20, name: "Facebook" },
          { value: 15, name: "Others" }
        ]
      }
    ]
  };

  return <ReactEcharts style={{ height }} option={{ ...option, color: [...color] }} />;
}
