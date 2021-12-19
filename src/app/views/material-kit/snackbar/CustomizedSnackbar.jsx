import React from 'react'
import { styled } from '@mui/system'
import { amber, green } from '@mui/material/colors'
import { Alert, Button, Snackbar } from '@mui/material'

const ContentRoot = styled('div')(({ theme }) => ({
    '& .success': {
        backgroundColor: green[600],
    },
    '& .error': {
        backgroundColor: theme.palette.error.main,
    },
    '& .info': {
        backgroundColor: theme.palette.primary.main,
    },
    '& .warning': {
        backgroundColor: amber[700],
    },
    '& .icon': {
        fontSize: 20,
    },
    '& .iconVariant': {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    '& .message': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .margin': {
        margin: theme.spacing(1),
    },
}))

export default function CustomizedSnackbars() {
    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(true)
    }
    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <ContentRoot>
            <Button variant="outlined" className="margin" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    This is a success message!
                </Alert>
            </Snackbar>
            <Alert
                onClose={handleClose}
                sx={{ m: 1 }}
                severity="error"
                variant="filled"
            >
                This is an error message!
            </Alert>
            <Alert
                onClose={handleClose}
                sx={{ m: 1 }}
                severity="warning"
                variant="filled"
            >
                This is a warning message!
            </Alert>
            <Alert
                onClose={handleClose}
                sx={{ m: 1 }}
                severity="info"
                variant="filled"
            >
                This is an information message!
            </Alert>
            <Alert
                onClose={handleClose}
                sx={{ m: 1 }}
                severity="success"
                variant="filled"
            >
                This is a success message!
            </Alert>
        </ContentRoot>
    )
}
