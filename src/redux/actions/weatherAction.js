import axios from "axios";

export const fetchWeather = (city) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    );
    dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
  }
};
