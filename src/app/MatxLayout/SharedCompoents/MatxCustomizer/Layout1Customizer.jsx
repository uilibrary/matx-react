import React, { Fragment } from "react";
import {
  Tooltip,
  Radio,
  RadioGroup,
  FormGroup,
  Icon,
  Switch,
  Grid,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper
} from "@material-ui/core";
import { get } from "lodash";
import { themeColors } from "../../MatxTheme/themeColors";
import BadgeSelected from "./BadgeSelected";
import { mainSidebarThemes, topbarThemes } from "./customizerOptions";

const sidebarBG = [
  "/assets/images/sidebar/sidebar-bg-dark.jpg",
  "/assets/images/sidebar/sidebar-bg-light.jpg"
];

const Layout1Customizer = ({ settings, handleChange, handleControlChange }) => {
  return (
    <Fragment>
      <div className="mb-4 mx-3">
        <div className="text-muted mb-4">Sidebar theme</div>
        <div className="colors">
          {mainSidebarThemes
            // .filter(c => themeColors[c].palette.type === "dark")
            .map((color, i) => (
              <Tooltip key={i} title={color} placement="top">
                <div
                  className="color"
                  onClick={() =>
                    handleChange("layout1Settings.leftSidebar.theme", color)
                  }
                  style={{
                    backgroundColor: themeColors[color].palette.primary.main
                  }}
                >
                  {settings.layout1Settings.leftSidebar.theme === color && (
                    <Icon>done</Icon>
                  )}
                  <div className={settings.themes[color].palette.type}></div>
                </div>
              </Tooltip>
            ))}
        </div>
      </div>

      <div className="mb-8 mx-3">
        <div className="text-muted mb-4">Topbar theme</div>
        <div className="colors">
          {topbarThemes.map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <div
                className="color"
                onClick={() =>
                  handleChange("layout1Settings.topbar.theme", color)
                }
                style={{
                  backgroundColor: themeColors[color].palette.primary.main
                }}
              >
                {settings.layout1Settings.topbar.theme === color && (
                  <Icon>done</Icon>
                )}
                <div className={settings.themes[color].palette.type}></div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="mx-3 mb-6">
        <FormControl component="fieldset">
          <FormLabel component="legend">Sidebar mode</FormLabel>
          <RadioGroup
            aria-label="Sidebar"
            name="leftSidebar"
            value={settings.layout1Settings.leftSidebar.mode}
            onChange={handleControlChange("layout1Settings.leftSidebar.mode")}
          >
            <FormControlLabel value="full" control={<Radio />} label="Full" />
            <FormControlLabel value="close" control={<Radio />} label="Close" />
            <FormControlLabel
              value="compact"
              control={<Radio />}
              label="Compact"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="mb-8 mx-3">
        <div className="text-muted mb-8">Sidebar background image</div>

        <div className="layout-boxes sidebar-bg">
          <Grid container spacing={3}>
            {sidebarBG.map((bg, i) => (
              <Grid item lg={4} key={i}>
                <BadgeSelected
                  color="primary"
                  className="layout-box mr-4"
                  badgeContent={<Icon>done</Icon>}
                  invisible={
                    settings.layout1Settings.leftSidebar.bgImgURL !== bg
                  }
                >
                  <Paper
                    onClick={() =>
                      handleChange("layout1Settings.leftSidebar.bgImgURL", bg)
                    }
                    className="h-160"
                  >
                    <img src={bg} alt="" />
                  </Paper>
                </BadgeSelected>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      {/* <div className="mb-8 mx-3">
        <div className="text-muted">Sidebar background opacity</div>
        <Slider
          value={settings.layout1Settings.leftSidebar.bgOpacity}
          onChange={(event, value) =>
            handleChange("layout1Settings.leftSidebar.bgOpacity", value)
          }
          marks={true}
          step={0.02}
          max={1}
          min={0.5}
          valueLabelDisplay="auto"
          aria-labelledby="sidebar-bgOpacity"
        />
      </div> */}

      <div className="mx-3 mb-6">
        <FormControl component="fieldset">
          <FormLabel component="legend">Topbar</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={get(settings.layout1Settings.topbar, "show")}
                  onChange={handleControlChange("layout1Settings.topbar.show")}
                />
              }
              label="Show"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={get(settings.layout1Settings.topbar, "fixed")}
                  onChange={handleControlChange("layout1Settings.topbar.fixed")}
                />
              }
              label="Fixed"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Fragment>
  );
};

export default Layout1Customizer;
