export const fetchRestaurants = () => (dispatch) => {
  dispatch({ type: "FETCH_ALL" });
};

export const addRestaurants = (data) => (dispatch) => {
  dispatch({ type: "ADD", payload: data });
};

export const deleteRestaurants = (i) => (dispatch) => {
  dispatch({ type: "DELETE", payload: i });
};
