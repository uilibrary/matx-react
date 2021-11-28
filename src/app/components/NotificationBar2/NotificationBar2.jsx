import React from 'react'
import { useState } from 'react'
import useSettings from 'app/hooks/useSettings'
import NotificationCard from './NotificationCard'
import { styled, useTheme, Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { themeShadows } from '../MatxTheme/themeColors'
import { getNotification } from '../../redux/actions/NotificationActions'
import {
    Icon,
    Badge,
    Button,
    IconButton,
    Drawer,
    ThemeProvider
} from '@mui/material'

const NotificationBox = styled('div')(({ theme }) => ({
    width: 360,
    [theme.breakpoints.down('xs')]: {
        width: '100vw',
    },
}))

const Notification = styled('div')(() => ({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: themeShadows[6],
    "& h5": {
        marginLeft: '8px',
        marginTop: 0,
        marginBottom: 0,
        fontWeight: '500',
    }
}))

const NotificationBar2 = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const { settings } = useSettings()
    const [panelOpen, setPanelOpen] = useState(false)
    const notifcationList = useSelector((state) => state.notifications)

    const handleDrawerToggle = () => {
        if (!panelOpen) {
            dispatch(getNotification())
        }
        setPanelOpen(!panelOpen)
    }

    const parentThemePalette = theme.palette

    return (
        <ThemeProvider theme={settings.themes[settings.activeTheme]}>
            <IconButton
                onClick={handleDrawerToggle}
                style={{
                    color:
                        parentThemePalette.type === 'light'
                            ? parentThemePalette.text.secondary
                            : parentThemePalette.text.primary,
                }}
            >
                <Badge color="secondary" badgeContent={5}>
                    <Icon>notifications</Icon>
                </Badge>
            </IconButton>

            <Drawer
                width={'100px'}
                variant="temporary"
                anchor={'right'}
                open={panelOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <NotificationBox>
                    <Notification>
                        <Icon color="primary">notifications</Icon>
                        <h5>Notifications</h5>
                    </Notification>

                    {notifcationList.map((notification, ind) => (
                        <NotificationCard
                            notification={notification}
                            isLastIndex={ind === notifcationList.length - 1}
                            isFirstIndex={ind === 0}
                            key={ind}
                        />
                    ))}
                    {!!notifcationList.length && (
                        <Box sx={{ m: 4, textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: '100%' }}
                            >
                                View All Notifications
                            </Button>
                        </Box>
                    )}
                </NotificationBox>
            </Drawer>
        </ThemeProvider>
    )
}

export default NotificationBar2
