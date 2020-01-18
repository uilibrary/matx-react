import {
  GET_NOTIFICATION,
  CREATE_NOTIFICATION,
  DELETE_ALL_NOTIFICATION,
  DELETE_NOTIFICATION
} from "../actions/NotificationActions";

const initialState = [];

const NotificationReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATION: {
      return [...action.payload];
    }
    case CREATE_NOTIFICATION: {
      return [...action.payload];
    }
    case DELETE_NOTIFICATION: {
      return [...action.payload];
    }
    case DELETE_ALL_NOTIFICATION: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default NotificationReducer;
