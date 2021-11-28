import React from 'react'
import { styled } from '@mui/system'

const Content = styled('div')(() => ({
    flexGrow: 1,
    height: '100%',
    position: 'relative',
}))

const MatxSidenavContent = ({ children }) => {
    return <Content>{children}</Content>
}

export default MatxSidenavContent
