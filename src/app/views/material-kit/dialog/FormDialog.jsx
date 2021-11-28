import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function FormDialog() {
    const [open, setOpen] = React.useState(false)

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
                Open form dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
