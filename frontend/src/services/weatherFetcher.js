import axios from "axios";
import { weatherURLConstructor } from "../utils/weatherUtils";

const fetchWeatherData = async (cityCode, errorHandler) => {
  try {
    const response = await axios.get(weatherURLConstructor(cityCode));
    const weatherDataList = response.data.list;

    return weatherDataList;
  } catch (error) {
    errorHandler(error);
  }
};

export { fetchWeatherData };
