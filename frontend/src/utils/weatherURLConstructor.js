import cityData from "../data/cities.json";
import { WEATHER_API_KEY } from "../constants/constants";

const cityCodes = cityData.List.map((city) => city.CityCode);
const cityCodesString = cityCodes.join(",");

const weatherURLConstructor = () => {
  return `https://api.openweathermap.org/data/2.5/group?id=${cityCodesString}&units=metric&appid=${WEATHER_API_KEY}`;
};

export { weatherURLConstructor };
