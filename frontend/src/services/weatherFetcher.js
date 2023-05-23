import axios from "axios";

import { weatherURLConstructor } from "../utils/weatherUtils";
import { cacheCityObjects } from "./cacheController";

const fetchWeatherData = async (cityCode, expiresAt, errorHandler) => {
  try {
    const response = await axios.get(weatherURLConstructor(cityCode));
    const weatherData = response.data.list[0];

    const { id, dt, name } = weatherData;
    const { visibility } = weatherData;
    const { country, sunrise, sunset } = weatherData.sys;
    const { temp, temp_min, temp_max, pressure, humidity } = weatherData.main;
    const { description } = weatherData.weather[0];
    const { speed, deg } = weatherData.wind;

    expiresAt = new Date().getTime() + parseInt(expiresAt) * 60 * 1000;

    const data = {
      id,
      dt,
      name,
      visibility,
      country,
      sunrise,
      sunset,
      temp,
      temp_min,
      temp_max,
      pressure,
      humidity,
      description,
      speed,
      deg,
      expiresAt,
    };

    console.log(data);

    cacheCityObjects(cityCode, JSON.stringify(data));
  } catch (error) {
    errorHandler(error);
  }
};

export { fetchWeatherData };
