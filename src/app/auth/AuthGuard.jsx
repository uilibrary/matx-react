import useAuth from 'app/hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

// const getUserRoleAuthStatus = (pathname, user, routes) => {
//   if (!user) {
//     return false;
//   }
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length ? matched.auth.includes(user.role) : true;
//   return authenticated;
// };

const AuthGuard = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const { pathname } = useLocation()
    // const flatRoutes = flat(routes);

    // const isUserRoleAuthenticated = getUserRoleAuthStatus(
    //     pathname,
    //     user,
    //     flatRoutes
    // )
    // let authenticated = isAuthenticated && isUserRoleAuthenticated

    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE
    // let location = useLocation()

    return (
        <>
            {isAuthenticated ? (
                children
            ) : (
                <Navigate
                    replace
                    to="/session/signin"
                    state={{ from: pathname }}
                />
            )}
        </>
    )
}

export default AuthGuard
