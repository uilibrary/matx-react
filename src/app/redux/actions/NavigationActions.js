
export const SET_NAVIGATION = "SET_NAVIGATION";
export const GET_NAVIGATION = "GET_NAVIGATION";
export const RESET_NAVIGATION = "RESET_NAVIGATION";

export function getNavigation(user) {
  return {
    type: GET_NAVIGATION
  }
}

export function logoutUser() {
  return dispatch => {
    jwtAuthService.logout();

    history.push({
      pathname: "/session/signin"
    });

    dispatch({
      type: USER_LOGGED_OUT
    });
  };
}
