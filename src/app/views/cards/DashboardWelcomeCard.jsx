import React from 'react'
import { styled } from '@mui/system'
import { Card, Icon, Fab } from '@mui/material'

const CardRoot = styled(Card)(({ theme }) => ({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    padding: "28px 16px",
    background: `url("/assets/images/dots.png"),
    linear-gradient(90deg, ${theme.palette.primary.main} -19.83%, ${theme.palette.primary.light} 189.85%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
}))

const WelcomeBox = styled('div')(({ theme }) => ({
    color: '#fff',
    fontSize: '18px',
    marginBottom: '152',
    textTransform: 'uppercase',
}))

const ContentBox = styled('div')(({ theme }) => ({
    fontWeight: '300',
    paddingLeft: '320px',
    paddingRight: '320px',
    display: 'flex',
    justifyContent: 'space-between'
}))

const TextBox = styled('div')(({ theme }) => ({
    color: '#fff',
    "& .title": { fontSize: '32px' },
    "& p": {
        margin: 0,
        textTransform: 'uppercase',
    }
}))

const DashboardWelcomeCard = () => {

    return (
        <CardRoot elevation={3}>
            <Fab color="primary" sx={{ mb: 14 }}>
                <Icon>trending_up</Icon>
            </Fab>
            <WelcomeBox>
                welcome back! Watson
            </WelcomeBox>
            <ContentBox>
                <TextBox>
                    <div className="title">180</div>
                    <p>sales</p>
                </TextBox>
                <TextBox>
                    <div className="title">220</div>
                    <p>signups</p>
                </TextBox>
                <TextBox>
                    <div className="title">300</div>
                    <p>visitors</p>
                </TextBox>
            </ContentBox>
        </CardRoot>
    )
}

export default DashboardWelcomeCard
