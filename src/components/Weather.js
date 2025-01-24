import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherAction";

const Weather = ({ city }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
