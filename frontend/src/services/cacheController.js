import cityData from "../data/cities.json";

const cacheCityObjects = (key, value) => {
  localStorage.setItem(key, value);
};

const getCachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export { cacheCityObjects };
