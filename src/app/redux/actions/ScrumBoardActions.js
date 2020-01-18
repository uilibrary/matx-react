import axios from "axios";

export const GET_ALL_BOARD = "GET_ALL_BOARD";
export const GET_BOARD_BY_ID = "GET_BOARD_BY_ID";
export const ADD_BOARD = "ADD_BOARD";
export const ADD_MEMBER_IN_BOARD = "ADD_MEMBER_IN_BOARD";
export const DELETE_MEMBER_FROM_BOARD = "DELETE_MEMBER_FROM_BOARD";
export const GET_ALL_MEMBERS = "GET_ALL_MEMBERS";
export const GET_ALL_LABELS = "GET_ALL_LABELS";

export const ADD_LIST = "ADD_LIST";
export const RENAME_LIST = "RENAME_LIST";
export const REORDER_LIST = "REORDER_LIST";
export const DELETE_LIST = "DELETE_LIST";

export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const REORDER_CARD = "REORDER_CARD";
export const REORDER_CARD_LIST = "REORDER_CARD_LIST";
export const MOVE_CARD = "MOVE_CARD";
export const DELETE_CARD = "DELETE_CARD";

export const getAllMembers = () => {
  return dispatch => {
    axios.get("/api/scrum-board/all-member").then(res => {
      dispatch({
        type: GET_ALL_MEMBERS,
        payload: res.data
      });
    });
  };
};

export const getAllLabels = () => {
  return dispatch => {
    axios.get("/api/scrum-board/all-label").then(res => {
      dispatch({
        type: GET_ALL_LABELS,
        payload: res.data
      });
    });
  };
};

// BOARD RELATED ACTIONS
export const getAllBoard = () => {
  return dispatch => {
    axios.get("/api/scrum-board/all-board").then(res => {
      dispatch({
        type: GET_ALL_BOARD,
        payload: res.data
      });
    });
  };
};

export const addNewBoard = boardTitle => {
  return dispatch => {
    axios.post("/api/scrum-board/add-board", boardTitle).then(res => {
      dispatch({
        type: ADD_BOARD,
        payload: res.data
      });
    });
  };
};

export const getBoardById = id => {
  return dispatch => {
    axios.get("/api/scrum-board", { data: id }).then(res => {
      dispatch({
        type: GET_BOARD_BY_ID,
        payload: res.data
      });
    });
  };
};

export const addMemberInBoard = ({ boardId, memberId }) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/add-member", { boardId, memberId })
      .then(res => {
        dispatch({
          type: ADD_MEMBER_IN_BOARD,
          payload: res.data
        });
      });
  };
};

export const deleteMemberFromBoard = ({ boardId, memberId }) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/delete-member", { boardId, memberId })
      .then(res => {
        dispatch({
          type: DELETE_MEMBER_FROM_BOARD,
          payload: res.data
        });
      });
  };
};

export const addListInBoard = ({ boardId, listTitle }) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/add-column", { boardId, listTitle })
      .then(res => {
        dispatch({
          type: ADD_LIST,
          payload: res.data
        });
      });
  };
};

export const renameListInBoard = ({ boardId, listTitle, listId }) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/rename-column", { boardId, listTitle, listId })
      .then(res => {
        dispatch({
          type: RENAME_LIST,
          payload: res.data
        });
      });
  };
};

export const reorderList = (boardId, startIndex, endIndex) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/reorder-list", { boardId, startIndex, endIndex })
      .then(res => {
        dispatch({
          type: REORDER_LIST,
          payload: res.data
        });
      });
  };
};

export const deleteListFromBoard = ({ boardId, listId }) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/delete-column", { boardId, listId })
      .then(res => {
        dispatch({
          type: DELETE_LIST,
          payload: res.data
        });
      });
  };
};

export const addNewCardInList = ({ listId, boardId, cardTitle }) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/add-card", { listId, boardId, cardTitle })
      .then(res => {
        dispatch({
          type: ADD_CARD,
          payload: res.data
        });
      });
  };
};

export const reorderCardInList = (boardId, listId, startIndex, endIndex) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/reorder-card", {
        boardId,
        listId,
        startIndex,
        endIndex
      })
      .then(res => {
        dispatch({
          type: REORDER_CARD_LIST,
          payload: res.data
        });
      });
  };
};

export const moveCardInList = (
  boardId,
  sourcelistId,
  destinationlistId,
  source,
  destination
) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/move-card", {
        boardId,
        sourcelistId,
        destinationlistId,
        source,
        destination
      })
      .then(res => {
        dispatch({
          type: MOVE_CARD,
          payload: res.data
        });
      });
  };
};

export const updateCardInList = (boardId, listId, card) => {
  return dispatch => {
    axios
      .post("/api/scrum-board/update-card", { boardId, listId, card })
      .then(res => {
        dispatch({
          type: UPDATE_CARD,
          payload: res.data
        });
      });
  };
};
