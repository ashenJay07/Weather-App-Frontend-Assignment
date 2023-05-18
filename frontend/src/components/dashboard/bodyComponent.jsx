import { useState, useEffect } from "react";
import axios from "axios";

import cities from "../../data/cities.json";
import SearchBar from "./searchBar";
import WeatherCardList from "./weatherCardList";
import colorPalette from "../../data/colorPalette.json";

const City = () => {
  const [cityCodes, setCityCodes] = useState([]);
  const [isDataAvailable, setDataAvailability] = useState(false);

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
      // Remove cached data after its expired
      localStorage.removeItem("weatherData");
    }

    if (!localStorage.getItem("weatherData")) {
      // fetching weather data from server using RESTful API
      try {
        const response = await axios.get(
          `${API.url}id=${cityCodeList}&units=metric&appid=${API.key}`
        );
        const weatherData = response.data;

        // assigning color themes for each card
        var i = 0;
        for (let data of weatherData.list) {
          data.bgColor = colorPalette.theme[i];
          i < colorPalette.theme.length - 1 ? ++i : (i = 0);
        }

        // Setting up expire time to 5 Minute
        const expireTime = new Date().setTime(
          new Date().getTime() + 5 * 60 * 1000
        );

        const weatherDate = {
          data: weatherData,
          expiry: expireTime,
        };

        // Cache the weather data
        localStorage.setItem("weatherData", JSON.stringify(weatherDate));

        checkDataAvailablity();
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    const tempCityCode = [];

    for (let city of cities.List) tempCityCode.push(city.CityCode);

    // remove view weather card cached data
    setCityCodes(tempCityCode);
    localStorage.removeItem("cardViewData");
  }, []);

  useEffect(() => {
    const cityCodeList = cityCodes.join();

    if (cityCodeList) fetchWeatherData(cityCodeList);

    checkDataAvailablity();
  });

  const checkDataAvailablity = () => {
    localStorage.getItem("weatherData")
      ? setDataAvailability(true)
      : setDataAvailability(null);
  };

  return (
    <>
      <SearchBar />
      {isDataAvailable ? (
        <WeatherCardList />
      ) : (
        <div className="text-center mt-5">
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
};

export default City;
