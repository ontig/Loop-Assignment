// eslint-disable-next-line import/no-anonymous-default-export
export default (auth = false, action) => {
  switch (action.type) {
    case "AUTH":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return auth;
  }
};
