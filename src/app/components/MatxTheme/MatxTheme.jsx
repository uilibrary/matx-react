import React from 'react'
import { styled } from '@mui/system'
import useSettings from 'app/hooks/useSettings'
import { CssBaseline, ThemeProvider } from '@mui/material'

const GlobalStyle = styled('html')(() => ({
    '--topbar-mobile-width': '220px',
    '--topbar-height': '64px',
    '--sidenav-width': '260px',
    '--navbar-height': '60px',
    '--sidenav-button-width': '220px',
    '--sidenav-compact-width': '80px',
    '--contained-layout-width': '1200px',
    '& a': { textDecoration: 'none' }
}))

const MatxTheme = ({ children }) => {
    const { settings } = useSettings()
    let activeTheme = { ...settings.themes[settings.activeTheme] }
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <GlobalStyle> {children} </GlobalStyle>
        </ThemeProvider>
    )
}

export default MatxTheme
