export const login = (username, password) => {
    return (dispatch) => {
      if (username === "test" && password === "12345") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
  };
  
  export const logout = () => {
    return { type: "LOGOUT" };
  };
  