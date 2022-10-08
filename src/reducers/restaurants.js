// eslint-disable-next-line import/no-anonymous-default-export
export default (restaurants = [], action) => {
  switch (action.type) {
    case "DELETE":
      restaurants.splice(action.payload, 1);
      localStorage.setItem("restaurantData", JSON.stringify([...restaurants]));
      return [...restaurants];
    case "FETCH_ALL":
      let data = JSON.parse(localStorage.getItem("restaurantData"));
      console.log(data);
      return data;
    case "ADD":
      restaurants
        ? localStorage.setItem(
            "restaurantData",
            JSON.stringify([...restaurants, action.payload])
          )
        : localStorage.setItem(
            "restaurantData",
            JSON.stringify([action.payload])
          );
      return restaurants ? [...restaurants, action.payload] : [action.payload];
    default:
      return restaurants;
  }
};
