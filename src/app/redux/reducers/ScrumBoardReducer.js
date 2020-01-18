import {
  GET_ALL_BOARD,
  ADD_BOARD,
  GET_BOARD_BY_ID,
  ADD_LIST,
  RENAME_LIST,
  DELETE_LIST,
  ADD_CARD,
  GET_ALL_MEMBERS,
  GET_ALL_LABELS,
  ADD_MEMBER_IN_BOARD,
  DELETE_MEMBER_FROM_BOARD,
  UPDATE_CARD,
  REORDER_CARD,
  MOVE_CARD,
  REORDER_LIST,
  REORDER_CARD_LIST
} from "../actions/ScrumBoardActions";

const initialState = {};

const ScrumBoardReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MEMBERS: {
      return {
        ...state,
        memberList: [...action.payload]
      };
    }
    case GET_ALL_LABELS: {
      return {
        ...state,
        labelList: [...action.payload]
      };
    }
    case GET_ALL_BOARD: {
      return {
        ...state,
        boardList: [...action.payload]
      };
    }
    case ADD_BOARD: {
      return {
        ...state,
        boardList: [...action.payload]
      };
    }
    case GET_BOARD_BY_ID: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case ADD_MEMBER_IN_BOARD: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case DELETE_MEMBER_FROM_BOARD: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case ADD_LIST: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case RENAME_LIST: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case DELETE_LIST: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case REORDER_LIST: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case UPDATE_CARD: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case REORDER_CARD_LIST: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    case MOVE_CARD: {
      return {
        ...state,
        board: { ...action.payload }
      };
    }
    default: {
      return state;
    }
  }
};

export default ScrumBoardReducer;
