import { DEFAULT_EXPIRE_TIME } from "../constants/constants";
import cityData from "../data/cities.json";
import { cityCodes, expireTimeGenerator } from "../utils/weatherUtils";

const cacheCityObjects = async (weatherDataList) => {
  for (const dataSet of weatherDataList) {
    const { id, dt, name } = dataSet;
    const { visibility } = dataSet;
    const { country, sunrise, sunset } = dataSet.sys;
    const { temp, temp_min, temp_max, pressure, humidity } = dataSet.main;
    const { description } = dataSet.weather[0];
    const { speed, deg } = dataSet.wind;

    var { ExpiresAt } = cityData.List.filter(
      (data) => parseInt(data.CityCode) === id
    )[0];

    const expTime = ExpiresAt ? ExpiresAt : DEFAULT_EXPIRE_TIME;
    const expiresAt = expireTimeGenerator(expTime);

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

    localStorage.setItem(data.id, JSON.stringify(data));
  }
};

const getCachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getAllCachedData = () => {
  const weatherData = [];

  cityCodes.forEach((cityCode) => {
    const data = getCachedData(cityCode);
    if (data) weatherData.push(data);
  });

  return weatherData;
};

const deleteCachedData = (key) => {
  localStorage.removeItem(key);
};

export { cacheCityObjects, getCachedData, getAllCachedData, deleteCachedData };
