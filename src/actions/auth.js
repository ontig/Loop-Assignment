export const Login = (username, password) => (dispatch) => {
  var isLogin = false;
  if (
    (username === "user1" && password === "password1") ||
    (username === "user2" && password === "password2") ||
    (username === "user3" && password === "password3")
  ) {
    isLogin = true;
  }
  dispatch({ type: "AUTH", payload: isLogin });
  return isLogin;
};

export const Logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT", payload: false });
};
