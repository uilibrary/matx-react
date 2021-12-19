import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/system'

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
]

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props
    const [value, setValue] = React.useState(valueProp)
    const radioGroupRef = React.useRef(null)

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp)
        }
    }, [valueProp, open])

    function handleEntering() {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus()
        }
    }

    function handleCancel() {
        onClose()
    }

    function handleOk() {
        onClose(value)
    }

    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return (
        <Dialog
            maxWidth="xs"
            disableEscapeKeyDown
            TransitionProps={{onEntering: handleEntering}}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">
                Phone Ringtone
            </DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="Ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
                <Button onClick={handleOk} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
}

const DialogRoot = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& .paper': {
        width: '80%',
        maxHeight: 435,
    }
}))

export default function ConfirmationDialog() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('Dione')

    function handleClickListItem() {
        setOpen(true)
    }

    function handleClose(newValue) {
        setOpen(false)

        if (newValue) {
            setValue(newValue)
        }
    }

    return (
        <DialogRoot>
            <List component="div" role="list">
                <ListItem button divider disabled role="listitem">
                    <ListItemText primary="Interruptions" />
                </ListItem>
                <ListItem
                    button
                    divider
                    aria-controls="ringtone-menu"
                    aria-label="Phone ringtone"
                    onClick={handleClickListItem}
                    role="listitem"
                >
                    <ListItemText primary="Phone ringtone" secondary={value} />
                </ListItem>
                <ListItem button divider disabled role="listitem">
                    <ListItemText
                        primary="Default notification ringtone"
                        secondary="Tethys"
                    />
                </ListItem>
                <ConfirmationDialogRaw
                    keepMounted
                    open={open}
                    value={value}
                    className="paper"
                    id="ringtone-menu"
                    onClose={handleClose}
                />
            </List>
        </DialogRoot>
    )
}
