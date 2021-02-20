import React from 'react'
import { Icon, Badge, Button, IconButton, Drawer } from '@material-ui/core'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'
import { getNotification } from '../../redux/actions/NotificationActions'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import NotificationCard from './NotificationCard'
import { useState } from 'react'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    notification: {
        width: 360,
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
        },
        '& .notification__topbar': {
            height: 'var(--topbar-height)',
        },
    },
    notificationCard: {
        '&:hover': {
            '& .delete-button': {
                cursor: 'pointer',
                display: 'unset',
                right: 0,
                marginTop: 6,
                top: 0,
                zIndex: 2,
            },
            '& .card__topbar__time': {
                display: 'none',
            },
        },
        '& .delete-button': {
            display: 'none',
            position: 'absolute',
            right: 0,
            marginTop: 9,
        },
        '& .card__topbar__button': {
            borderRadius: 15,
            opacity: 0.9,
        },
    },
}))

const NotificationBar2 = ({ container }) => {
    const [panelOpen, setPanelOpen] = useState(false)
    const theme = useTheme()
    const dispatch = useDispatch()
    const classes = useStyles()
    const { settings } = useSettings()
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
                <div className={classes.notification}>
                    <div className="notification__topbar elevation-z6 flex items-center p-4">
                        <Icon color="primary">notifications</Icon>
                        <h5 className="ml-2 my-0 font-medium">Notifications</h5>
                    </div>

                    {notifcationList.map((notification, ind) => (
                        <NotificationCard
                            notification={notification}
                            isLastIndex={ind === notifcationList.length - 1}
                            isFirstIndex={ind === 0}
                            key={ind}
                        />
                    ))}
                    {!!notifcationList.length && (
                        <div className="text-center m-8">
                            <Button
                                className="w-full"
                                variant="contained"
                                color="primary"
                            >
                                View All Notifications
                            </Button>
                        </div>
                    )}
                </div>
            </Drawer>
        </ThemeProvider>
    )
}

export default NotificationBar2
