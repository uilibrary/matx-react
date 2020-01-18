export const SET_LAYOUT_SETTINGS = "LAYOUT_SET_SETTINGS";
export const SET_DEFAULT_LAYOUT_SETTINGS = "LAYOUT_SET_DEFAULT_SETTINGS";


export const setLayoutSettings = data => dispatch => {
  dispatch({
    type: SET_LAYOUT_SETTINGS,
    data: data
  });
};

export const setDefaultSettings = data => dispatch => {
  dispatch({
    type: SET_DEFAULT_LAYOUT_SETTINGS,
    data: data
  });
};