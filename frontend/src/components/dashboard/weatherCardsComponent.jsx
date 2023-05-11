import { useState, useEffect } from "react";
import axios from "axios";

import cities from "../../data/cities.json";
import WeatherCard from "../card/weatherCard";

const City = () => {
  const [cityCodes, setCityCodes] = useState([]);

  const API = {
    key: "1908882df1b2926636731dcf2f2061eb",
    url: "https://api.openweathermap.org/data/2.5/group?",
  };

  const getWeatherData = async (cityCodeList) => {
    try {
      const response = await axios.get(
        `${API.url}id=${cityCodeList}&units=metric&appid=${API.key}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      const tempCityCode = [];

      for (let city of cities.List) tempCityCode.push(city.CityCode);

      setCityCodes(tempCityCode);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const cityCodeList = cityCodes.join();

    if (cityCodeList) getWeatherData(cityCodeList);
  });

  return (
    <div className="container mt-5">
      <div className="col-sm-9 " style={{ margin: "auto" }}>
        <div className="render-card">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default City;
