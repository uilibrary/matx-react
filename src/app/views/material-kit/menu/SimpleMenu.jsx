import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'

function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                variant="outlined"
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default SimpleMenu
