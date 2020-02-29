/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import { getNavigationByUser } from "../redux/actions/NavigationAction";
import jwtAuthService from "../services/jwtAuthService";
import localStorageService from "../services/localStorageService";
// import firebaseAuthService from "../services/firebase/firebaseAuthService";
import history from "history.js";

const checkJwtAuth = async setUserData => {
  // You need to send token to your server to check token is valid
  // modify loginWithToken method in jwtService
  let user = await jwtAuthService.loginWithToken();
  if (user) setUserData(user);
  else
    history.push({
      pathname: "/session/signin"
    });
  return user;
};

// const checkFirebaseAuth = () => {
//   firebaseAuthService.checkAuthStatus(user => {
//     if (user) {
//       console.log(user.uid);
//       console.log(user.email);
//       console.log(user.emailVerified);
//     } else {
//       console.log("not logged in");
//     }
//   });
// };

const Auth = ({ children, setUserData, getNavigationByUser }) => {
  setUserData(localStorageService.getItem("auth_user"));

  useEffect(() => {
    checkJwtAuth(setUserData);
    getNavigationByUser();
  }, [setUserData, getNavigationByUser]);

  return <Fragment>{children}</Fragment>;
};

const mapStateToProps = state => ({
  setUserData: PropTypes.func.isRequired,
  getNavigationByUser: PropTypes.func.isRequired,
  login: state.login
});

export default connect(mapStateToProps, { setUserData, getNavigationByUser })(
  Auth
);
