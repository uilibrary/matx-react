import { lazy } from "react";
import Loadable from "app/components/Loadable";

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));

const FirebaseLogin = Loadable(lazy(() => import("./login/FirebaseLogin")));
const FirebaseRegister = Loadable(lazy(() => import("./register/FirebaseRegister")));

// const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
// const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

// const Auth0Login = Loadable(lazy(() => import("./login/Auth0Login")));

const sessionRoutes = [
  { path: "/session/signup", element: <FirebaseRegister /> },
  { path: "/session/signin", element: <FirebaseLogin /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },
  { path: "*", element: <NotFound /> }
];

export default sessionRoutes;
