import React from 'react'
import { Icon } from '@mui/material'
import { styled, lighten, useTheme } from '@mui/system'
import { convertHexToRGB } from 'utils'

const RectangleRoot = styled('div')(({ theme, color }) => ({
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& h5": {
        margin: 0,
        fontWeight: '500',
        color: theme.palette.primary.main
    },
    background: color === "primary" ?
        `rgba(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important` :
        color === "green" ?
            'rgba(9, 182, 109, 0.15) !important' :
            color === "green" ? `${lighten(theme.palette.secondary.main, 0.85)}` : `${lighten(theme.palette.error.main, 0.85)}`
}))

const RectangleAvatar = ({ color = 'primary', icon, textIcon, style }) => {
    const theme = useTheme()
    const primary = theme.palette.primary.main

    return (
        <RectangleRoot sx={style}>
            {textIcon ? (
                <h5>{textIcon}</h5>
            ) : (
                <Icon sx={{ color: primary }}>{icon}</Icon>
            )}
        </RectangleRoot>
    )
}

export default RectangleAvatar
