import { createContext, useEffect, useReducer } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
// GLOBAL CUSTOM COMPONENTS
import Loading from "app/components/MatxLoading";

const initialState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};

const isValidToken = (accessToken) => {
  if (!accessToken) return false;
  const decodedToken = jwtDecode(accessToken);

  // const currentTime = Date.now() / 1000;
  // return decodedToken.exp > currentTime;

  return decodedToken?.id ? true : false;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;
      return { ...state, user, isAuthenticated, isInitialized: true };
    }
    case "LOGIN": {
      const { user } = action.payload;
      return { ...state, user, isAuthenticated: true };
    }
    case "LOGOUT": {
      return { ...state, isAuthenticated: false, user: null };
    }
    case "REGISTER": {
      const { user } = action.payload;
      return { ...state, isAuthenticated: true, user };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT"
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    const { data } = await axios.post("/api/auth/login", { email, password });
    const { accessToken, user } = data;

    setSession(accessToken);
    dispatch({ type: "LOGIN", payload: { user } });
  };

  const register = async (email, username, password) => {
    const { data } = await axios.post("/api/auth/register", { email, username, password });
    const { accessToken, user } = data;

    setSession(accessToken);
    dispatch({ type: "REGISTER", payload: { user } });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response = await axios.get("/api/auth/profile");
          const { user } = response.data;

          dispatch({
            type: "INIT",
            payload: { isAuthenticated: true, user }
          });
        } else {
          dispatch({
            type: "INIT",
            payload: { isAuthenticated: false, user: null }
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

  if (!state.isInitialized) return <Loading />;

  return (
    <AuthContext.Provider value={{ ...state, method: "JWT", login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
