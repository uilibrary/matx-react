import React, { useContext, useEffect, useRef } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import Scrollbar from 'react-perfect-scrollbar'
import { renderRoutes } from 'react-router-config'
import Layout1Topbar from './Layout1Topbar'
import Layout1Sidenav from './Layout1Sidenav'
import Footer from '../../Footer/Footer'
import SecondarySidebar from '../../SecondarySidebar/SecondarySidebar'
import AppContext from 'app/contexts/AppContext'
import { MatxSuspense } from 'app/components'
import { useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import SidenavTheme from '../../MatxTheme/SidenavTheme/SidenavTheme'
import { makeStyles } from '@material-ui/core/styles'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    contentWrap: ({ width, secondarySidebar }) => {
        return {
            verticalAlign: 'top',
            marginLeft: width,
            transition: 'all 0.3s ease',
            // [theme.breakpoints.up("sm")]: {
            marginRight: secondarySidebar.open ? 50 : 0,
            // },
        }
    },
    topbar: {
        top: 0,
        zIndex: 96,
        background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))',
        transition: 'all 0.3s ease',
    },
}))

const Layout1 = () => {
    const { settings, updateSettings } = useSettings()
    const { layout1Settings, secondarySidebar } = settings
    const {
        leftSidebar: { mode: sidenavMode, show: showSidenav },
    } = layout1Settings
    const { routes } = useContext(AppContext)

    const getSidenavWidth = () => {
        switch (sidenavMode) {
            case 'full':
                return 'var(--sidenav-width)'
            case 'compact':
                return 'var(--sidenav-compact-width)'
            default:
                return '0px'
        }
    }

    const sidenavWidth = getSidenavWidth()
    let classes = useStyles({ width: sidenavWidth, secondarySidebar })
    const theme = useTheme()
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))

    const ref = useRef({ isMdScreen, settings })

    const topbarTheme = settings.themes[layout1Settings.topbar.theme]
    const layoutClasses = `theme-${theme.palette.type} flex`

    useEffect(() => {
        let { settings } = ref.current
        let sidebarMode = settings.layout1Settings.leftSidebar.mode
        if (settings.layout1Settings.leftSidebar.show) {
            let mode = isMdScreen ? 'close' : sidebarMode
            updateSettings({ layout1Settings: { leftSidebar: { mode } } })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMdScreen])

    return (
        <div className={clsx('bg-default', layoutClasses)}>
            {showSidenav && sidenavMode !== 'close' && (
                <SidenavTheme>
                    <Layout1Sidenav />
                </SidenavTheme>
            )}

            <div
                className={clsx(
                    'flex-grow flex-column relative overflow-hidden h-full-screen',
                    classes.contentWrap
                )}
            >
                {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
                    <ThemeProvider theme={topbarTheme}>
                        <Layout1Topbar fixed={true} className="elevation-z8" />
                    </ThemeProvider>
                )}

                {settings.perfectScrollbar && (
                    <Scrollbar className="flex-grow flex-column relative h-full">
                        {layout1Settings.topbar.show &&
                            !layout1Settings.topbar.fixed && (
                                <ThemeProvider theme={topbarTheme}>
                                    <Layout1Topbar />
                                </ThemeProvider>
                            )}
                        <div className="relative flex-grow">
                            <MatxSuspense>{renderRoutes(routes)}</MatxSuspense>
                        </div>
                        {settings.footer.show && !settings.footer.fixed && (
                            <Footer />
                        )}
                    </Scrollbar>
                )}

                {!settings.perfectScrollbar && (
                    <div className="flex-grow flex-column relative h-full scroll-y">
                        {layout1Settings.topbar.show &&
                            !layout1Settings.topbar.fixed && (
                                <ThemeProvider theme={topbarTheme}>
                                    <Layout1Topbar />
                                </ThemeProvider>
                            )}
                        <div className="relative flex-grow">
                            <MatxSuspense>{renderRoutes(routes)}</MatxSuspense>
                        </div>
                        {settings.footer.show && !settings.footer.fixed && (
                            <Footer />
                        )}
                    </div>
                )}

                {settings.footer.show && settings.footer.fixed && <Footer />}
            </div>
            {settings.secondarySidebar.show && <SecondarySidebar />}
        </div>
    )
}

export default React.memo(Layout1)
