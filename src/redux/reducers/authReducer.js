const initialState = {
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return { ...state, isAuthenticated: true, error: null };
      case "LOGIN_FAILURE":
        return { ...state, error: "Invalid username or password" };
      case "LOGOUT":
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  