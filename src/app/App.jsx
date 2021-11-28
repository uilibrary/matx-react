import '../fake-db'
import React from 'react'
import history from 'history.js'
import routes from './RootRoutes'
import { Store } from './redux/Store'
import { Provider } from 'react-redux'
import AuthGuard from './auth/AuthGuard'
import AppContext from './contexts/AppContext'
import { Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import sessionRoutes from './views/sessions/SessionRoutes'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { MatxSuspense, MatxTheme, MatxLayout } from 'app/components'

const App = () => {
    return (
        <AppContext.Provider value={{ routes }}>
            <Provider store={Store}>
                <SettingsProvider>
                    <MatxTheme>
                        <Router history={history}>
                            <AuthProvider>
                                <MatxSuspense>
                                    <Switch>
                                        {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                        {sessionRoutes.map((item, i) => (
                                            <Route
                                                key={i}
                                                path={item.path}
                                                component={item.component}
                                            />
                                        ))}
                                        {/* AUTH PROTECTED DASHBOARD PAGES */}
                                        <AuthGuard>
                                            <MatxLayout />{' '}
                                            {/* RETURNS <Layout1/> component */}
                                        </AuthGuard>
                                    </Switch>
                                </MatxSuspense>
                            </AuthProvider>
                        </Router>
                    </MatxTheme>
                </SettingsProvider>
            </Provider>
        </AppContext.Provider>
    )
}

export default App
