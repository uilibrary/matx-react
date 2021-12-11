import React from 'react'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import { convertHexToRGB, getTimeDifference } from 'utils'
import { H5, Span, Paragraph, Small } from '../Typography'
import { styled, Box, useTheme } from '@mui/system'
import { themeShadows } from '../MatxTheme/themeColors'

const Circle = styled('div')(({ theme }) => ({
    position: 'absolute',
    height: 16,
    width: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    boxShadow: themeShadows[3],
    left: 18,
    top: 23,
    '& .circleContent': {
        padding: '4px',
        overflow: 'hidden',
        borderRadius: '300px',
        background: theme.palette.primary.main,
    }
}))

const VerticalLine = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 25,
    width: 2,
    background: `rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.1)`,
}))

const UpperLine = styled(VerticalLine)(({ theme }) => ({
    position: 'absolute',
    left: 25,
    width: 2,
    background: `rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.1)`,
}))

const LowerLine = styled(VerticalLine)(({ theme }) => ({
    position: 'absolute',
    left: 25,
    width: 2,
    background: `rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.1)`,
}))

const StyledP = styled(Paragraph)(({ theme }) => ({
    fontSize: '14px',
    borderRadius: 4,
    padding: '6px 12px',
    marginTop: '8px',
    marginBottom: '8px',
    background: `rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.3)`,
}))

const StyledLink = styled(Link)(({ theme }) => ({
    marginLeft: '4px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}))


const NotificationCard = (props) => {
    const { notification, isFirstIndex, isLastIndex } = props
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <Box position="relative">
            <Box pl={6} pr={4} py={3}>
                {!isFirstIndex && <UpperLine />}
                <Circle>
                    <div className="circleContent"></div>
                </Circle>
                {!isLastIndex && <LowerLine />}
                <Box display="flex" justifyContent="space-between">
                    <Box fontSize="13px">
                        <H5 sx={{ mt: 0, mb: '4px', fontSize: '14px' }}>
                            {notification.title}
                        </H5>
                        <Span sx={{ color: secondary }}>on</Span>
                        <StyledLink to="/">Project Name</StyledLink>
                    </Box>
                    <Small sx={{ color: secondary }}>
                        {getTimeDifference(new Date(notification.timestamp))}
                        ago
                    </Small>
                </Box>
                <StyledP>{notification.subtitle}</StyledP>
            </Box>

            <Divider />
        </Box>
    )
}

export default NotificationCard
