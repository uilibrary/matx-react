import React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Sidenav from '../../Sidenav/Sidenav'
import Brand from '../../Brand/Brand'
import { Switch, Hidden } from '@material-ui/core'
import { convertHexToRGB } from 'utils'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    sidenav: ({ width, primaryRGB, bgImgURL }) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: width,
        boxShadow: theme.shadows[8],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        zIndex: 111,
        overflow: 'hidden',
        color: palette.text.primary,
        transition: 'all 250ms ease-in-out',
        backgroundImage: `linear-gradient(to bottom, rgba(${primaryRGB}, 0.96), rgba(${primaryRGB}, 0.96)), url(${bgImgURL})`,
        '&:hover': {
            width: 'var(--sidenav-width)',
            '& .sidenavHoverShow': {
                display: 'block',
            },
            '& .compactNavItem': {
                width: '100%',
                maxWidth: '100%',
                '& .nav-bullet': {
                    display: 'block',
                },
                '& .nav-bullet-text': {
                    display: 'none',
                },
            },
        },
    }),
    hideOnCompact: {
        display: 'none',
    },
    userInfo: {},
}))

const Layout1Sidenav = () => {
    const theme = useTheme()

    const { settings, updateSettings } = useSettings()

    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    const getSidenavWidth = () => {
        switch (mode) {
            case 'compact':
                return 'var(--sidenav-compact-width)'
            default:
                return 'var(--sidenav-width)'
        }
    }

    const primaryRGB = convertHexToRGB(theme.palette.primary.main)
    const classes = useStyles({
        ...leftSidebar,
        width: getSidenavWidth(),
        primaryRGB,
    })

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleSidenavToggle = () => {
        updateSidebarMode({ mode: mode === 'compact' ? 'full' : 'compact' })
    }

    return (
        <div className={classes.sidenav}>
            <div className="flex-column relative h-full">
                <Brand>
                    <Hidden smDown>
                        <Switch
                            onChange={handleSidenavToggle}
                            checked={leftSidebar.mode !== 'full'}
                            color="secondary"
                            size="small"
                        />
                    </Hidden>
                </Brand>
                <Sidenav />
            </div>
        </div>
    )
}

export default React.memo(Layout1Sidenav)
