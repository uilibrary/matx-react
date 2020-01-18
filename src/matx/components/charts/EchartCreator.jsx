import React from "react";
import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import PropTypes from "prop-types";
import { EchartTheme } from "matx";
import { withStyles } from "@material-ui/core";

const EchartCreator = props => {
  echarts.registerTheme("echarts-theme", EchartTheme(props.theme));

  return (
    <ReactEcharts
      style={{ height: props.height, width: "100%" }}
      option={props.option}
      lazyUpdate={true}
      theme="echarts-theme"
    />
  );
};

EchartCreator.prototype = {
  height: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired
};

export default withStyles({}, { withTheme: true })(EchartCreator);
