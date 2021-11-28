import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/system'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    maxWidth: 320,
    flexDirection: 'column',
    justifyContent: 'center',
}))

const IMG = styled('img')(() => ({
    width: '100%',
    marginBottom: '32px',
}))

const NotFoundRoot = styled(FlexBox)(() => ({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh !important',
}))

const NotFound = () => {
    return (
        <NotFoundRoot>
            <JustifyBox>
                <IMG src="/assets/images/illustrations/404.svg" alt="" />
                <Link to="/">
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ textTransform: 'capitalize' }}
                    >
                        Back to Dashboard
                    </Button>
                </Link>
            </JustifyBox>
        </NotFoundRoot>
    )
}

export default NotFound
