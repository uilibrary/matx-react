import React, { useEffect } from 'react'
import { useTheme } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import Sidenav from '../../Sidenav/Sidenav'
import Brand from '../../Brand/Brand'
import SidenavTheme from '../../MatxTheme/SidenavTheme/SidenavTheme'
import { useMediaQuery } from '@material-ui/core'
import useSettings from 'app/hooks/useSettings'

const Layout2Sidenav = () => {
    const theme = useTheme()
    const dispatch = useDispatch()

    const { pathname } = useLocation()
    const { settings, updateSettings } = useSettings()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const sidenavTheme =
        settings.themes[settings.layout2Settings.leftSidebar.theme] || theme

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout2Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    useEffect(() => {
        if (isMobile) updateSidebarMode({ mode: 'close' })
    }, [pathname])

    return (
        <SidenavTheme theme={sidenavTheme} settings={settings}>
            <div className="sidenav">
                <div className="sidenav__hold">
                    <Brand />
                    <Sidenav />
                </div>
            </div>
        </SidenavTheme>
    )
}

export default Layout2Sidenav
