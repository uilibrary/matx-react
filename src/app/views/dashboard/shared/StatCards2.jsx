import React from 'react'
import { Grid, Card, Icon, Fab } from '@mui/material'
import { lighten, styled, useTheme } from '@mui/system'

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wra,p',
    alignItems: 'center',
}))

const FabIcon = styled(Fab)(() => ({
    width: '44px !important',
    height: '44px !important',
    boxShadow: 'none !important',
}))

const H3 = styled('h3')(({ textcolor }) => ({
    margin: 0,
    fontWeight: '500',
    marginLeft: '12px',
    color: textcolor,
}))

const H1 = styled('h1')(({ theme }) => ({
    margin: 0,
    flexGrow: 1,
    color: theme.palette.text.secondary,
}))

const Span = styled('span')(({ textcolor }) => ({
    fontSize: '13px',
    color: textcolor,
    marginLeft: '4px',
}))

const IconBox = styled('div')(({ theme }) => ({
    width: 16,
    height: 16,
    overflow: 'hidden',
    borderRadius: '300px ',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    '& .icon': { fontSize: '14px' },
}))

const StatCards2 = () => {
    const { palette } = useTheme()
    const textError = palette.error.main
    const bgError = lighten(palette.error.main, 0.85)

    return (
        <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
                <Card elevation={3} sx={{ p: 2 }}>
                    <ContentBox>
                        <FabIcon
                            size="medium"
                            sx={{ background: 'rgba(9, 182, 109, 0.15)' }}
                        >
                            <Icon sx={{ color: '#08ad6c' }}>trending_up</Icon>
                        </FabIcon>
                        <H3 textcolor={'#08ad6c'}>Orders</H3>
                    </ContentBox>
                    <ContentBox sx={{ pt: 2 }}>
                        <H1>10.8k</H1>
                        <IconBox sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
                            <Icon className="icon">expand_less</Icon>
                        </IconBox>
                        <Span textcolor={'#08ad6c'}>(+21%)</Span>
                    </ContentBox>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card elevation={3} sx={{ p: 2 }}>
                    <ContentBox>
                        <FabIcon
                            size="medium"
                            sx={{ background: bgError, overflow: 'hidden' }}
                        >
                           <Icon className="icon">group</Icon>
                        </FabIcon>
                        <H3 textcolor={textError}>Users</H3>
                    </ContentBox>
                    <ContentBox sx={{ pt: 2 }}>
                        <H1>$2.8M</H1>
                        <IconBox sx={{ background: bgError }}>
                            <Icon className="icon">expand_less</Icon>
                        </IconBox>
                        <Span textcolor={textError}>(+21%)</Span>
                    </ContentBox>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards2
