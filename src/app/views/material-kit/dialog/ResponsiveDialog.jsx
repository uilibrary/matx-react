import React from 'react'
import { useTheme } from '@mui/system'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogContentText from '@mui/material/DialogContentText'

export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open responsive dialog
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
