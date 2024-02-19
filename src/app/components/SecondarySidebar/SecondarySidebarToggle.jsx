import { Fab, styled, IconButton } from "@mui/material";
import { Close, Settings } from "@mui/icons-material";
import clsx from "clsx";

import useSettings from "app/hooks/useSettings";

// STYLED COMPONENT
const Toggle = styled("div")(() => ({
  zIndex: 99,
  right: "30px",
  bottom: "50px",
  position: "fixed",
  transition: "all 0.15s ease",
  "&.open": { right: "10px" }
}));

export default function SecondarySidebarToggle() {
  const { settings, updateSettings } = useSettings();

  const toggle = () => {
    updateSettings({ secondarySidebar: { open: !settings.secondarySidebar.open } });
  };

  return (
    <Toggle className={clsx({ open: settings.secondarySidebar.open })}>
      {settings.secondarySidebar.open && (
        <IconButton onClick={toggle} size="small" aria-label="toggle">
          <Close sx={{ color: "primary.contrastText" }} />
        </IconButton>
      )}

      {!settings.secondarySidebar.open && (
        <Fab color="primary" aria-label="expand" onClick={toggle}>
          <Settings sx={{ color: "primary.contrastText" }} />
        </Fab>
      )}
    </Toggle>
  );
}
