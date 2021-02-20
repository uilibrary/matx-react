import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    sidenav: {
        position: 'relative',
        width: (props) => props.width,
        transition: 'width 250ms ease',
        overflow: 'hidden',
        zIndex: 91,

        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
        },
    },
    sidenavOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.74)',
        zIndex: 90,
    },
}))

const MatxSidenav = ({
    open,
    children,
    toggleSidenav,
    width = '220px',
    bgClass,
}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const classes = useStyles({ width: open || !isMobile ? width : '0px' })

    return (
        <div className="flex h-full">
            <div className={clsx('bg-default', bgClass, classes.sidenav)}>
                {children}
            </div>
            {open && isMobile && (
                <div
                    onClick={toggleSidenav}
                    className={classes.sidenavOverlay}
                />
            )}
        </div>
    )
}

export default MatxSidenav
