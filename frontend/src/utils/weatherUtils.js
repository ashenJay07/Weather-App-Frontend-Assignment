import cityData from "../data/cities.json";
import { WEATHER_API_KEY } from "../constants/constants";

const cityCodes = cityData.List.map((city) => city.CityCode);
const cityCodesString = cityCodes.join(",");

const weatherURLConstructor = (cityCode) => {
  return `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${WEATHER_API_KEY}`;
};

const expireTimeGenerator = (expTimeInMinutes) => {
  return new Date().getTime() + parseInt(expTimeInMinutes) * 60 * 1000;
};

export {
  cityCodes,
  cityCodesString,
  weatherURLConstructor,
  expireTimeGenerator,
};
