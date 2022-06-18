import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";
import React from "react";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:focus": {
    backgroundColor: theme.palette.primary.main,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.common.white,
    },
  },
}));

function CustomizedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        aria-haspopup="true"
        onClick={handleClick}
        aria-owns={anchorEl ? "simple-menu" : undefined}
      >
        Open Menu
      </Button>

      <Menu
        elevation={0}
        id="simple-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ border: "1px solid #d3d4d5" }}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
      </Menu>
    </div>
  );
}

export default CustomizedMenu;
