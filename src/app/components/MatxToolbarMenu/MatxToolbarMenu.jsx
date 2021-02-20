import React, { useState } from 'react'
import { Icon, IconButton, Hidden } from '@material-ui/core'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    toolbarMenu: {
        '&.open $menuContainer': {
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
            },
        },
    },
    menuContainer: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            backgroundColor: palette.primary.dark,
            width: '100%',
            padding: '4px 8px',
            display: 'none',
        },
    },
}))

const MatxToolbarMenu = ({ offsetTop, children }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div
            className={clsx({
                open: open,
                [classes.toolbarMenu]: true,
            })}
        >
            <Hidden mdUp>
                <IconButton onClick={handleToggle}>
                    <Icon>{open ? 'close' : 'more_vert'}</Icon>
                </IconButton>
            </Hidden>

            <div
                style={{ top: offsetTop, left: 0 }}
                className={classes.menuContainer}
            >
                {children}
            </div>
        </div>
    )
}

export default MatxToolbarMenu
