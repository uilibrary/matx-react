import React from 'react'
import { Box, styled } from '@mui/system'

const DividerRoot = styled(Box)(({ theme }) => ({
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
        backgroundColor: theme.palette.divider,
        zIndex: 1,
    },
    '& span': {
        position: 'relative',
        background: '#fff',
        padding: '4px 6px',
        color: theme.palette.text.secondary,
        zIndex: 5,
    },
}))

const MatxDivider = ({ text, sx }) => {
    return (
        <div>
            <DividerRoot sx={sx}>{text && <span>{text}</span>}</DividerRoot>
        </div>
    )
}

export default MatxDivider
