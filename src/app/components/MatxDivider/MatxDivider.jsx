import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    divider: {
        // borderBottom: `1px solid ${palette.divider}`,
        textAlign: 'center',
        position: 'relative',
        height: 16,
        '&::after': {
            position: 'absolute',
            content: '""',
            top: '10px',
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: palette.divider,
            zIndex: 1,
        },
        '& span': {
            position: 'relative',
            background: '#fff',
            padding: '4px 6px',
            color: palette.text.secondary,
            zIndex: 5,
        },
    },
}))

const MatxDivider = ({ text, className }) => {
    const classes = useStyles()
    return (
        <div className={clsx({ [className]: className })}>
            <div className={classes.divider}>{text && <span>{text}</span>}</div>
        </div>
    )
}

export default MatxDivider
