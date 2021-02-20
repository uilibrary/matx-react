/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Fab, IconButton, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    toggle: {
        position: 'fixed',
        right: '30px',
        bottom: '50px',
        zIndex: 99,
        transition: 'all 0.15s ease',
        '&.open': {
            right: '10px',
        },
    },
}))

const SecondarySidebarToggle = () => {
    // const isMobile = useMediaQuery("(max-width:767px)");
    const classes = useStyles()
    const { settings, updateSettings } = useSettings()

    const toggle = () => {
        updateSettings({
            secondarySidebar: { open: !settings.secondarySidebar.open },
        })
    }

    // useEffect(() => {
    //   updateSettings({
    //     secondarySidebar: { open: !isMobile },
    //   });
    // }, [isMobile]);

    return (
        <div
            className={clsx({
                [classes.toggle]: true,
                open: settings.secondarySidebar.open,
            })}
        >
            {settings.secondarySidebar.open && (
                <IconButton onClick={toggle} size="small" aria-label="toggle">
                    <Icon>close</Icon>
                </IconButton>
            )}
            {!settings.secondarySidebar.open && (
                <Fab
                    // variant="extended"
                    // size="small"
                    color="primary"
                    aria-label="expand"
                    className=""
                    onClick={toggle}
                >
                    <Icon>settings</Icon>
                </Fab>
            )}
        </div>
    )
}

export default SecondarySidebarToggle
