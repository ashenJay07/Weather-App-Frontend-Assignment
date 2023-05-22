import axios from "axios";
import { weatherURLConstructor } from "../utils/weatherURLConstructor";
import errorHandler from "../middlewares/errorHandler";

const fetchWeatherData = async () => {
  try {
    const response = await axios.get(weatherURLConstructor());
    const weatherData = response.data;

    // console.log(weatherData);
  } catch (error) {}
};

export { fetchWeatherData };
