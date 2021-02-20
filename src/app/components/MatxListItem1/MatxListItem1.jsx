import React from 'react'
import RectangleAvatar from '../RectangleAvatar/RectangleAvatar'
import { IconButton, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 300ms ease',
        '&:hover': {
            background: 'rgba(0,0,0, .08)',
            paddingLeft: '8px',
            overflow: 'hidden',
            '& .action-icon, & .rectangle-box': {
                opacity: 1,
            },
        },
        '& .action-icon, & .rectangle-box': {
            opacity: 0.76,
        },
    },
}))

const MatxListItem1 = ({
    title,
    subtitle,
    iconText,
    iconColor,
    bulletIcon,
    actionIcon,
}) => {
    const classes = useStyles()

    return (
        <div className={clsx('py-2 flex items-center', classes.root)}>
            <RectangleAvatar
                color={iconColor}
                icon={bulletIcon}
                iconText={iconText}
            ></RectangleAvatar>

            <div className="ml-4 flex-grow">
                <h6 className="m-0 text-13 font-normal text-body">{title}</h6>
                <small className="text-muted">{subtitle}</small>
            </div>

            {actionIcon && (
                <IconButton className="action-icon">
                    <Icon color={iconColor}>{actionIcon}</Icon>
                </IconButton>
            )}
        </div>
    )
}

export default MatxListItem1
