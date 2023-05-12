import { useState, useEffect } from "react";
import axios from "axios";

import cities from "../../data/cities.json";
import SearchBar from "./searchBar";
import WeatherCardList from "./weatherCardList";

const City = () => {
  const [cityCodes, setCityCodes] = useState([]);

  const API = {
    key: "1908882df1b2926636731dcf2f2061eb",
    url: "https://api.openweathermap.org/data/2.5/group?",
  };

  const fetchWeatherData = async (cityCodeList) => {
    var cachedWeatherData = localStorage.getItem("weatherData");

    if (
      cachedWeatherData &&
      new Date().getTime() > JSON.parse(cachedWeatherData).expiry
    ) {
      localStorage.removeItem("weatherData");
    }

    if (!localStorage.getItem("weatherData")) {
      try {
        const response = await axios.get(
          `${API.url}id=${cityCodeList}&units=metric&appid=${API.key}`
        );
        const data = response.data;
        console.log(data);

        const expireTime = new Date().setTime(
          new Date().getTime() + 5 * 60 * 1000
        ); // expire time = 5 min

        const weatherDate = {
          data: data,
          expiry: expireTime,
        };

        // Cache the weather data
        localStorage.setItem("weatherData", JSON.stringify(weatherDate));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    const tempCityCode = [];

    for (let city of cities.List) tempCityCode.push(city.CityCode);

    setCityCodes(tempCityCode);
    localStorage.removeItem("cardViewData");
  }, []);

  useEffect(() => {
    const cityCodeList = cityCodes.join();

    if (cityCodeList) fetchWeatherData(cityCodeList);
  });

  return (
    <>
      <SearchBar />
      <WeatherCardList />
    </>
  );
};

export default City;
