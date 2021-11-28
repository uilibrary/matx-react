import React from 'react'
import { styled } from '@mui/system'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
        },
    },
}))

function CustomizedMenu() {
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
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ border: '1px solid #d3d4d5' }}
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
    )
}

export default CustomizedMenu
