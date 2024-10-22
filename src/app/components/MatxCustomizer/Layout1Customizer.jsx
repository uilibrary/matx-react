import { Fragment } from "react";
import get from "lodash/get";

import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Radio from "@mui/material/Radio";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@mui/material/styles/styled";

import { StyledBadge } from "./styles";
import { themeColors, themeShadows } from "../MatxTheme/themeColors";
import { mainSidebarThemes, topbarThemes } from "./customizerOptions";

const sidebarBG = [
  "/assets/images/sidebar/sidebar-bg-dark.jpg",
  "/assets/images/sidebar/sidebar-bg-light.jpg"
];

// STYLED COMPONENTS
const ThemeName = styled("div")(({ theme }) => ({
  marginBottom: "16px",
  color: theme.palette.text.secondary
}));

const ToolbarContainer = styled("div")({
  margin: "8px",
  display: "flex",
  flexWrap: "wrap"
});

const ToolbarContent = styled("div")(({ color }) => ({
  width: 40,
  height: 40,
  margin: "8px",
  cursor: "pointer",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: themeShadows[3],
  background: themeColors[color].palette.primary.main
}));

const IMG = styled("img")({
  width: "100%",
  maxHeight: 152,
  display: "block"
});

export default function Layout1Customizer({ settings, handleChange, handleControlChange }) {
  return (
    <Fragment>
      <Box mb="16px" mx="12px">
        <ThemeName>Sidebar theme</ThemeName>
        <ToolbarContainer>
          {mainSidebarThemes.map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <ToolbarContent
                color={color}
                onClick={() => handleChange("layout1Settings.leftSidebar.theme", color)}>
                {settings.layout1Settings.leftSidebar.theme === color && <Icon>done</Icon>}
                <div className={settings.themes[color].palette.type}></div>
              </ToolbarContent>
            </Tooltip>
          ))}
        </ToolbarContainer>
      </Box>

      <Box mb="32px" mx="12px">
        <ThemeName>Sidebar theme</ThemeName>
        <ToolbarContainer>
          {topbarThemes.map((color, i) => (
            <Tooltip key={i} title={color} placement="top">
              <ToolbarContent
                color={color}
                onClick={() => handleChange("layout1Settings.topbar.theme", color)}>
                {settings.layout1Settings.topbar.theme === color && <Icon>done</Icon>}
                <div className={settings.themes[color].palette.type}></div>
              </ToolbarContent>
            </Tooltip>
          ))}
        </ToolbarContainer>
      </Box>

      <Box mb="18px" mx="12px">
        <FormControl component="fieldset">
          <FormLabel component="legend">Sidebar mode</FormLabel>
          <RadioGroup
            aria-label="Sidebar"
            name="leftSidebar"
            value={settings.layout1Settings.leftSidebar.mode}
            onChange={handleControlChange("layout1Settings.leftSidebar.mode")}>
            <FormControlLabel value="full" control={<Radio />} label="Full" />
            <FormControlLabel value="close" control={<Radio />} label="Close" />
            <FormControlLabel value="compact" control={<Radio />} label="Compact" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box mb="32px" mx="12px">
        <ThemeName sx={{ mb: 4 }}>Sidebar background image</ThemeName>
        <div>
          <Grid container spacing={3}>
            {sidebarBG.map((bg, i) => (
              <Grid size={4} key={i}>
                <StyledBadge
                  color="primary"
                  badgeContent={<Icon>done</Icon>}
                  invisible={settings.layout1Settings.leftSidebar.bgImgURL !== bg}
                  sx={{ width: "100%", height: "100%", cursor: "pointer" }}>
                  <Paper onClick={() => handleChange("layout1Settings.leftSidebar.bgImgURL", bg)}>
                    <IMG src={bg} alt="" />
                  </Paper>
                </StyledBadge>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      <Box mb="24px" mx="12px">
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
      </Box>
    </Fragment>
  );
}
