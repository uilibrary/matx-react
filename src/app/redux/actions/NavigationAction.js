export const SET_USER_NAVIGATION = 'SET_USER_NAVIGATION';

const getfilteredNavigations = (navList = [], role) => {
  return navList.reduce((array, nav) => {
    if (nav.auth) {
      if (nav.auth.includes(role)) {
        array.push(nav);
      }
    } else {
      if (nav.children) {
        nav.children = getfilteredNavigations(nav.children, role);
        array.push(nav);
      } else {
        array.push(nav);
      }
    }
    return array;
  }, []);
};

export function getNavigationByUser() {
  return (dispatch, getState) => {
    let { user, navigations = [] } = getState();

    let filteredNavigations = getfilteredNavigations(navigations, user.role);

    dispatch({
      type: SET_USER_NAVIGATION,
      payload: [...filteredNavigations],
    });
  };
}
