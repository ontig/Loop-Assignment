export const fetchBookmarks = () => (dispatch) => {
  dispatch({ type: "FETCH_ALL_BOOKMARK" });
};

export const addBookmark = (data) => (dispatch) => {
  dispatch({ type: "ADD_BOOKMARK", payload: data });
};

export const deleteBookmark = (i) => (dispatch) => {
  console.log(i);
  dispatch({ type: "DELETE_BOOKMARK", payload: i });
};
