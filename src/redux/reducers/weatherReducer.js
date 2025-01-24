const initialState = {
    data: null,
    error: null,
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_WEATHER_SUCCESS":
        return { ...state, data: action.payload, error: null };
      case "FETCH_WEATHER_FAILURE":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  