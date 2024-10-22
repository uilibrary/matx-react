import { createContext, useEffect, useReducer } from "react";
import { createAuth0Client } from "@auth0/auth0-spa-js";
import MatxLoading from "app/components/MatxLoading";

import { auth0Config } from "app/config";

/**
 * @constant
 * @default {null}
 * @type {Auth0Client}
 */
let auth0Client = null;

const initialAuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, isInitialized: true, user };
    }

    case "LOGIN": {
      const { user } = action.payload;
      return { ...state, isAuthenticated: true, user };
    }

    case "LOGOUT": {
      return { ...state, isAuthenticated: false, user: null };
    }

    default: {
      return state;
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: "AUTH0"
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const loginWithPopup = async (options) => {
    await auth0Client.loginWithPopup(options);

    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
      const user = await auth0Client.getUser();

      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            id: user.sub,
            email: user.email,
            name: user.nickname,
            avatar: user.picture
          }
        }
      });
    }
  };

  const logout = (options) => {
    auth0Client.logout(options);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    (async () => {
      try {
        auth0Client = await createAuth0Client({
          clientId: auth0Config.client_id,
          domain: auth0Config.domain
        });

        await auth0Client.checkSession();

        const isAuthenticated = await auth0Client.isAuthenticated();

        if (isAuthenticated) {
          const user = await auth0Client.getUser();

          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated,
              user: {
                id: user.sub,
                email: user.email,
                name: user.nickname,
                avatar: user.picture
              }
            }
          });
        } else {
          dispatch({
            type: "INIT",
            payload: { isAuthenticated, user: null }
          });
        }
      } catch (err) {
        console.log(err);
        dispatch({
          type: "INIT",
          payload: { isAuthenticated: false, user: null }
        });
      }
    })();
  }, []);

  if (!state.isInitialized) return <MatxLoading />;

  return (
    <AuthContext.Provider value={{ ...state, method: "AUTH0", loginWithPopup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
