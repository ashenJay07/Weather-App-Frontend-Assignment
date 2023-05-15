import { useState, useEffect } from "react";
import axios from "axios";

import cities from "../../data/cities.json";
import SearchBar from "./searchBar";
import WeatherCardList from "./weatherCardList";

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
        const data = response.data;

        // Setting up expire time
        const expireTime = new Date().setTime(
          new Date().getTime() + 5 * 60 * 1000
        ); // expire time = 5 min

        const weatherDate = {
          data: data,
          expiry: expireTime,
        };

        // Cache the weather data
        localStorage.setItem("weatherData", JSON.stringify(weatherDate));

        checkingDataAvailablity();
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  console.log(isDataAvailable);

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

    checkingDataAvailablity();
  });

  const checkingDataAvailablity = () => {
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
