import React from 'react'
import { styled, Box } from '@mui/system'
import { Avatar } from '@mui/material'

const StyledAvatar = styled(Avatar)(() => ({
    height: '40px',
    width: '40px',
}))

const StatusCircle = styled('div')(({ theme, status }) => ({
    position: 'absolute',
    height: '14px',
    width: '14px',
    bottom: '0px',
    right: '-3px',
    borderRadius: '7px',
    border: '2px solid white',
    background: status === 'online' ? theme.palette.primary.main : theme.palette.error.main,
    color: status !== 'online' && 'white !important',
}))

const ChatAvatar = ({ src, status }) => {

    return (
        <Box position="relative">
            <StyledAvatar src={src} />
            <StatusCircle status={status} />
        </Box>
    )
}

export default ChatAvatar
