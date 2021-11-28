import React from 'react'
import { Icon } from '@mui/material'
import { styled } from '@mui/system'
import { themeShadows } from '../../components/MatxTheme/themeColors'

const Container = styled('div')(({ theme }) => ({
    width: 220,
    height: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '300px',
    boxShadow: themeShadows[6],
    background: theme.palette.background.default,
    '& span': { fontSize: '4rem' },
}))

const EmptyMessage = () => {
    return (
        <Container>
            <Icon color="primary">chat</Icon>
        </Container>
    )
}

export default EmptyMessage
