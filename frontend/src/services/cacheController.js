import { DEFAULT_EXPIRE_TIME } from "../constants/constants";
import cityData from "../data/cities.json";
import {
  cityCodes,
  dateFormatter,
  expireTimeGenerator,
  timeFormatter,
} from "../utils/weatherUtils";
import _ from "lodash";

const cacheCityObjects = async (weatherDataList) => {
  for (const dataSet of weatherDataList) {
    const { id, dt, name, visibility } = dataSet;
    const { country, sunrise, sunset } = dataSet.sys;
    const { temp, temp_min, temp_max, pressure, humidity } = dataSet.main;
    const { description, icon } = dataSet.weather[0];
    const { speed, deg } = dataSet.wind;

    var { ExpiresAt } = cityData.List.filter(
      (data) => parseInt(data.CityCode) === id
    )[0];

    const expTime = ExpiresAt ? ExpiresAt : DEFAULT_EXPIRE_TIME;
    const expiresAt = expireTimeGenerator(expTime);

    const formattedSunrise = timeFormatter(sunrise);
    const formattedSunset = timeFormatter(sunset);
    const formattedDateTime = `${timeFormatter(dt)}, ${dateFormatter(dt)}`;

    const data = {
      id,
      dt: formattedDateTime,
      name,
      visibility,
      country,
      sunrise: formattedSunrise,
      sunset: formattedSunset,
      temp: _.toInteger(temp),
      temp_min: _.toInteger(temp_min),
      temp_max: _.toInteger(temp_max),
      pressure,
      humidity,
      description: _.capitalize(description),
      speed,
      deg,
      icon,
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

const cacheBackgroundColor = (key, value) => {
  localStorage.setItem(key, value);
};

const getBackgroundColor = (key) => {
  return localStorage.getItem(key);
};

export {
  cacheCityObjects,
  getCachedData,
  getAllCachedData,
  deleteCachedData,
  cacheBackgroundColor,
  getBackgroundColor,
};
