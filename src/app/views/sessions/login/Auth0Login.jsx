import React, { useState } from 'react'
import { Card, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
    socialButton: {
        width: '100%',
        '& img': {
            margin: '0 8px',
        },
    },
}))

const Auth0Login = () => {
    const [message, setMessage] = useState('')
    const { loginWithPopup } = useAuth()

    const classes = useStyles()

    const handleLogin = async (event) => {
        try {
            await loginWithPopup()
            history.push('/')
        } catch (e) {
            console.log(e)
            setMessage(e.message)
        }
    }

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/dreamer.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative flex items-center justify-center">
                            <Button
                                onClick={handleLogin}
                                variant="contained"
                                className={classes.socialButton}
                            >
                                Sign In With
                                <img
                                    src="/assets/images/logos/auth0.svg"
                                    alt=""
                                />
                            </Button>
                        </div>
                        {message && <p className="text-error">{message}</p>}
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Auth0Login
