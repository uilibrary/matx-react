import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'

const emails = ['username@gmail.com', 'user02@gmail.com']

function SimpleDialog(props) {
    const { onClose, selectedValue, ...other } = props

    function handleClose() {
        onClose(selectedValue)
    }
    function handleListItemClick(value) {
        onClose(value)
    }

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            {...other}
        >
            <DialogTitle id="simple-dialog-title">
                Set backup account
            </DialogTitle>
            <List>
                {emails.map((email) => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(email)}
                        key={email}
                    >
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    backgroundColor: blue[100],
                                    color: blue[600],
                                }}
                            >
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}

                <ListItem
                    button
                    onClick={() => handleListItemClick('addAccount')}
                >
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="add account" />
                </ListItem>
            </List>
        </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    selectedValue: PropTypes.string,
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(emails[1])

    function handleClickOpen() {
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div>
            <Typography variant="subtitle1">
                Selected: {selectedValue}
            </Typography>
            <br />
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open simple dialog
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    )
}
