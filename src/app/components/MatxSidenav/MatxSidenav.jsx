import React from 'react'
import { useMediaQuery } from '@mui/material'
import { Box, styled, useTheme } from '@mui/system'

const SideNav = styled('div')(({ theme, width }) => ({
    position: 'relative',
    width: width,
    transition: 'width 250ms ease',
    overflow: 'hidden',
    zIndex: 91,
    background: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
    },
}))

const SideNavOverlay = styled('div')(() => ({
    position: 'absolute',
    zIndex: 90,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.74)',
}))

const MatxSidenav = ({
    sx,
    open,
    children,
    toggleSidenav,
    width = '220px',
}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box height="100%" display="flex">
            <SideNav sx={sx} width={open || !isMobile ? width : '0px'}>
                {children}
            </SideNav>
            {open && isMobile && <SideNavOverlay onClick={toggleSidenav} />}
        </Box>
    )
}

export default MatxSidenav
