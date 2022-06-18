import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Snackbar } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));

const ConsecutiveSnackbars = () => {
  const [queue, setQueue] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState({});

  const handleClick = (message) => () => {
    setQueue((state) => [...state, { message, key: new Date().getTime() }]);

    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      setOpen(false);
    } else {
      processQueue();
    }
  };

  const processQueue = () => {
    if (queue.length > 0) {
      setMessageInfo(queue.shift());
      setOpen(true);
    }
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => processQueue();

  return (
    <Box>
      <Button onClick={handleClick("Message A")}>Show message A</Button>
      <Button onClick={handleClick("Message B")}>Show message B</Button>
      <Snackbar
        open={open}
        key={messageInfo.key}
        onClose={handleClose}
        autoHideDuration={6000}
        onExited={handleExited}
        ContentProps={{ "aria-describedby": "message-id" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        message={<span id="message-id">{messageInfo.message}</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <StyledIconButton key="close" color="inherit" aria-label="Close" onClick={handleClose}>
            <CloseIcon />
          </StyledIconButton>,
        ]}
      />
    </Box>
  );
};

export default ConsecutiveSnackbars;
