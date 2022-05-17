// import package
import {
    Card,
    Grid,
    Button,
    CircularProgress,
} from '@mui/material'
import React, { useState } from 'react'
import useAuth from 'app/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Box, styled, useTheme } from '@mui/system'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Paragraph} from 'app/components/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// end import package

// style start 
const theme = createTheme({
    palette: {
      neutral: {
        main: '#45ce30',
        contrastText: '#fff',
      },
    },
  });
  
const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
    width: '100%',
}))

const JWTRoot = styled(JustifyBox)(() => ({
    background: '#gray',
    minHeight: '100% !important',
    '& .card': {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '6px',
    left: '25px',
}))

// style end

// main class
const JwtLogin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    // define 
    const [userInfo, setUserInfo] = useState({
        email: 'Akashkumar@buy4earn.com',
        password: 'dummyPass',
    })
    const [message, setMessage] = useState('')
    const { login } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const { palette } = useTheme()
    const textError = palette.error.main
    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            await login(userInfo.email, userInfo.password)
            
            navigate('/session/forgot-password')
            
        } catch (e) {
            console.log(e)
            setMessage(e.message)
            setLoading(false)
        }
    }

    return (
        <JWTRoot>
            <Card className="card">
                <Grid container justifyContent="center" alignItems="center">
                <Grid item lg={5} md={5} sm={5} xs={12} >
                        <JustifyBox p={4} height="100%">
                            <IMG
                                src="/assets/images/buy4earn/logo.png"
                                alt=""
                            />
                        </JustifyBox>
                    </Grid>
                    <Grid item lg={15} md={7} sm={7} xs={12} >     
                        <ContentBox>
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    sx={{ mb: 5, width: '100%' }}
                                    variant="outlined"
                                    size="small"
                                    label="Username"
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    value={userInfo.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                {message && (
                                    <Paragraph sx={{ color: textError }}>
                                        {message}
                                    </Paragraph>
                                )}

                                <FlexBox mb={2} flexWrap="wrap"  >
                                    <Box position="relative"  >
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            color="neutral"
                                            disabled={loading}
                                            type="submit"
                                            size="large"
                                            className="buttonW"
                                        >
                                            Log in
                                        </Button>
                                        </ThemeProvider>
                                        {loading && (
                                            <StyledProgress
                                                size={24}
                                                className="buttonProgress"
                                            />
                                        )}
                                    </Box>
                                    {/* <Span sx={{ mr: 1, ml: '20px' }}>or</Span>
                                    <Button
                                        sx={{ textTransform: 'capitalize' }}
                                        onClick={() =>
                                            navigate('/session/signup')
                                        }
                                    >
                                        Sign up
                                    </Button> */}
                                </FlexBox>
                                {/* <Button
                                    sx={{ color: textPrimary }}
                                    onClick={() =>
                                        navigate('/session/forgot-password')
                                    }
                                >
                                    Forgot password?
                                </Button> */}
                            </ValidatorForm>
                        </ContentBox>
                    </Grid>
                </Grid>
            </Card>
            
        </JWTRoot>
    )
}
// end class
export default JwtLogin
