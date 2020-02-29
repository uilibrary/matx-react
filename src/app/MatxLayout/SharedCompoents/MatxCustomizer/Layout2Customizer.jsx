import React, { Fragment } from "react";
import {
  Tooltip,
  Radio,
  RadioGroup,
  Icon,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
import { themeColors } from "../../MatxTheme/themeColors";

const Layout2Customizer = ({ settings, handleChange, handleControlChange }) => {
  return (
    <Fragment>
      <div className="mb-4 mx-3">
        <div className="text-muted mb-4">Topbar theme</div>
        <div className="colors">
          {Object.keys(themeColors).map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <div
                className="color"
                onClick={() =>
                  handleChange("layout2Settings.topbar.theme", color)
                }
                style={{
                  backgroundColor: themeColors[color].palette.primary.main
                }}
              >
                {settings.layout2Settings.topbar.theme === color && (
                  <Icon>done</Icon>
                )}
                <div className={settings.themes[color].palette.type}></div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="mb-4 mx-3">
        <div className="text-muted mb-4">Navbar theme</div>
        <div className="colors">
          {Object.keys(themeColors).map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <div
                className="color"
                onClick={() =>
                  handleChange("layout2Settings.navbar.theme", color)
                }
                style={{
                  backgroundColor: themeColors[color].palette.primary.main
                }}
              >
                {settings.layout2Settings.navbar.theme === color && (
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
          <FormLabel component="legend">Layout mode</FormLabel>
          <RadioGroup
            aria-label="layout-mode"
            name="layoutMode"
            value={settings.layout2Settings.mode}
            onChange={handleControlChange("layout2Settings.mode")}
          >
            <FormControlLabel value="full" control={<Radio />} label="Full" />
            <FormControlLabel
              value="contained"
              control={<Radio />}
              label="Contained"
            />
            <FormControlLabel value="boxed" control={<Radio />} label="Boxed" />
          </RadioGroup>
        </FormControl>
      </div>
    </Fragment>
  );
};

export default Layout2Customizer;
