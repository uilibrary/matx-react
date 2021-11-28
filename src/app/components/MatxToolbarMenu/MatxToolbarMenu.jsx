import { styled } from '@mui/system'
import React, { useState } from 'react'
import { Icon, IconButton, Hidden } from '@mui/material'

const ToolbarMenu = styled('div')(({ theme }) => ({
    '&.open $menuContainer': {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
}))

const MenuContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        backgroundColor: theme.palette.primary.dark,
        width: '100%',
        padding: '4px 8px',
        display: 'none',
    }
}))

const MatxToolbarMenu = ({ offsetTop, children }) => {
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <ToolbarMenu className={open}>
            <Hidden mdUp>
                <IconButton onClick={handleToggle}>
                    <Icon>{open ? 'close' : 'more_vert'}</Icon>
                </IconButton>
            </Hidden>

            <MenuContainer sx={{ top: offsetTop, left: 0 }}>
                {children}
            </MenuContainer>
        </ToolbarMenu>
    )
}

export default MatxToolbarMenu
