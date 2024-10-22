import { memo } from "react";
import Switch from "@mui/material/Switch";
import { styled, alpha } from "@mui/material/styles";
import useTheme from "@mui/material/styles/useTheme";

import useSettings from "app/hooks/useSettings";
import Brand from "app/components/Brand";
import Sidenav from "app/components/Sidenav";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { sidenavCompactWidth, sideNavWidth } from "app/utils/constant";

// STYLED COMPONENTS
const SidebarNavRoot = styled("div", {
  shouldForwardProp: (prop) => !["width", "bg", "image"].includes(prop)
})(({ theme, width, image }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: width,
  boxShadow: themeShadows[8],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  zIndex: 11111111,
  overflow: "hidden",
  color: theme.palette.text.primary,
  transition: "all 250ms ease-in-out",
  background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.96)}, ${alpha(
    theme.palette.primary.main,
    0.96
  )}), url(${image})`,
  "&:hover": {
    width: sideNavWidth,
    "& .sidenavHoverShow": { display: "block" },
    "& .compactNavItem": {
      width: "100%",
      maxWidth: "100%",
      "& .nav-bullet": { display: "block" },
      "& .nav-bullet-text": { display: "none" }
    }
  }
}));

const NavListBox = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column"
});

const Layout1Sidenav = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidenavWidth = () => {
    if (mode === "compact") return sidenavCompactWidth;
    return sideNavWidth;
  };

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  return (
    <SidebarNavRoot image={bgImgURL} width={getSidenavWidth()}>
      <NavListBox>
        <Brand>
          <Switch
            size="small"
            color="secondary"
            onChange={handleSidenavToggle}
            checked={leftSidebar.mode !== "full"}
            sx={{ [theme.breakpoints.down("md")]: { display: "none" } }}
          />
        </Brand>
        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default memo(Layout1Sidenav);
