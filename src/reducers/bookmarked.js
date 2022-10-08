// eslint-disable-next-line import/no-anonymous-default-export
export default (bookmarked = [], action) => {
  switch (action.type) {
    case "DELETE_BOOKMARK":
      bookmarked.splice(action.payload, 1);
      localStorage.setItem("bookmarkedData", JSON.stringify([...bookmarked]));
      return [...bookmarked];
    case "FETCH_ALL_BOOKMARK":
      let data = JSON.parse(localStorage.getItem("bookmarkedData"));
      console.log(data);
      return data;
    case "ADD_BOOKMARK":
      bookmarked
        ? localStorage.setItem(
            "bookmarkedData",
            JSON.stringify([...bookmarked, action.payload])
          )
        : localStorage.setItem(
            "bookmarkedData",
            JSON.stringify([action.payload])
          );
      return bookmarked ? [...bookmarked, action.payload] : [action.payload];
    default:
      return bookmarked;
  }
};
