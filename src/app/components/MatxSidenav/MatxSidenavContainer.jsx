import React from 'react'
import { styled } from '@mui/system'

const Container = styled('div')(() => ({
    height: '100%',
    display: 'flex',
    position: 'relative',
}))

const MatxSidenavContainer = ({ children }) => {
    return <Container>{children}</Container>
}

export default MatxSidenavContainer
