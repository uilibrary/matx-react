import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { cloneElement } from 'react'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    popup: {
        position: 'fixed',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
        top: '100vh',
        transition: 'top 250ms ease-in-out',
        boxShadow: theme.shadows[6],
        borderRadius: 6,
        zIndex: 99999,
        width: 360,
        overflow: 'hidden',
        '@media only screen and (max-width: 450px)': {
            width: 'calc(100% - 32px)',
            left: theme.spacing(2),
        },
    },
    popupOpen: {
        top: 'calc(var(--topbar-height) + 16px)',
        [theme.breakpoints.down('sm')]: {
            bottom: 0,
        },
    },
    closeIcon: {
        position: 'absolute',
        top: 6,
        right: 6,
    },
}))

const ChatHead = ({ icon, children }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const togglePopup = async () => {
        setOpen((open) => !open)
    }

    return (
        <div>
            {cloneElement(icon, { onClick: togglePopup })}
            <div
                className={clsx({
                    'bg-paper': true,
                    [classes.popup]: true,
                    [classes.popupOpen]: open,
                })}
            >
                {open ? cloneElement(children, { togglePopup }) : null}
            </div>
        </div>
    )
}

export default ChatHead
