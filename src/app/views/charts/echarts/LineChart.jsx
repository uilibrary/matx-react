import React from "react";
import ReactEcharts from "echarts-for-react";
import { withStyles } from "@material-ui/styles";

const LineChart = ({ height, color = [], theme }) => {
  const option = {
    grid: {
      top: "10%",
      bottom: "10%",
      left: "5%",
      right: "5%"
    },
    legend: {
      itemGap: 20,
      icon: "circle",
      textStyle: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontFamily: "roboto"
      }
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        fontFamily: "roboto"
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        // show: false
        lineStyle: {
          color: theme.palette.text.secondary,
          opacity: 0.15
        }
      },
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontFamily: "roboto"
      }
    },
    series: [
      {
        data: [30, 40, 20, 50, 40, 80, 90],
        type: "line",
        stack: "This month",
        name: "This month",
        smooth: true,
        symbolSize: 4,
        lineStyle: {
          width: 4
        }
      },
      {
        data: [20, 50, 15, 50, 30, 70, 95],
        type: "line",
        stack: "Last month",
        name: "Last month",
        smooth: true,
        symbolSize: 4,
        lineStyle: {
          width: 4
        }
      }
    ]
  };

  return (
    <ReactEcharts
      style={{ height: height }}
      option={{
        ...option,
        color: [...color]
      }}
    />
  );
};

export default withStyles({}, { withTheme: true })(LineChart);
