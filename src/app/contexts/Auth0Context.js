import React, { createContext, useEffect, useReducer } from 'react'

// import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Auth0Client } from '@auth0/auth0-spa-js'

import { auth0Config } from 'config'
import { MatxLoading } from 'app/components'

let auth0Client = null

const initialAuthState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialAuthState,
    method: 'AUTH0',
    loginWithPopup: () => Promise.resolve(),
    loginWithRedirect: () => Promise.resolve(),
    logout: () => {},
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState)

    const loginWithPopup = async (options) => {
        await auth0Client.loginWithPopup(options)

        const isAuthenticated = await auth0Client.isAuthenticated()

        if (isAuthenticated) {
            const user = await auth0Client.getUser()

            dispatch({
                type: 'LOGIN',
                payload: {
                    user: {
                        id: user.sub,
                        avatar: user.picture,
                        email: user.email,
                        name: user.name,
                    },
                },
            })
        }
    }

    const logout = (options) => {
        auth0Client.logout(options)

        dispatch({
            type: 'LOGOUT',
        })
    }

    useEffect(() => {
        ;(async () => {
            try {
                auth0Client = new Auth0Client({
                    redirect_uri: window.location.origin,
                    ...auth0Config,
                })

                await auth0Client.checkSession()

                const isAuthenticated = await auth0Client.isAuthenticated()

                if (isAuthenticated) {
                    const user = await auth0Client.getUser()

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated,
                            user: {
                                id: user.sub,
                                avatar: user.picture,
                                email: user.email,
                                name: user.name,
                            },
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'AUTH0',
                loginWithPopup,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
