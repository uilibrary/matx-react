import { Alert, Button, Snackbar } from '@mui/material';
import { amber, green } from '@mui/material/colors';
import { styled } from '@mui/material';
import React from 'react';

const ContentRoot = styled('div')(({ theme }) => ({
  '& .icon': { fontSize: 20 },
  '& .success': { backgroundColor: green[600] },
  '& .warning': { backgroundColor: amber[700] },
  '& .error': { backgroundColor: theme.palette.error.main },
  '& .info': { backgroundColor: theme.palette.primary.main },
  '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
  '& .message': { display: 'flex', alignItems: 'center' },
  '& .margin': { margin: theme.spacing(1) }
}));

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }
  function handleClose(_, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <ContentRoot>
      <Button variant="outlined" className="margin" onClick={handleClick}>
        Open success snackbar
      </Button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
          This is a success message!
        </Alert>
      </Snackbar>

      <Alert onClose={handleClose} sx={{ m: 1 }} severity="error" variant="filled">
        This is an error message!
      </Alert>

      <Alert onClose={handleClose} sx={{ m: 1 }} severity="warning" variant="filled">
        This is a warning message!
      </Alert>

      <Alert onClose={handleClose} sx={{ m: 1 }} severity="info" variant="filled">
        This is an information message!
      </Alert>

      <Alert onClose={handleClose} sx={{ m: 1 }} severity="success" variant="filled">
        This is a success message!
      </Alert>
    </ContentRoot>
  );
}
