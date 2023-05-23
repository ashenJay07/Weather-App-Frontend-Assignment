import axios from "axios";
import { weatherURLConstructor } from "../utils/weatherURLConstructor";

const fetchWeatherData = async (setError) => {
  try {
    const response = await axios.get(weatherURLConstructor());
    const weatherData = response.data;

    // console.log(weatherData);
  } catch (error) {
    setError(error);
  }
};

export { fetchWeatherData };
