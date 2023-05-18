import { useState, useEffect } from "react";
import WeatherCard from "../card/weatherCard";

const WeatherCardList = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // prettier-ignore
    var existingWeatherData = JSON.parse(localStorage.getItem("weatherData"));

    if (existingWeatherData) {
      existingWeatherData = existingWeatherData.data.list;
      setWeatherData(existingWeatherData);
    }
  }, []);

  useEffect(() => {
    checkDataAvailablity();
  });

  // filtering weather data object when cards removeing from existing object
  const handleCardList = (weatherDate) => {
    const modifiedWeatherData = weatherData.filter(
      (data) => data !== weatherDate
    );

    const expireTime = JSON.parse(localStorage.getItem("weatherData")).expiry;

    const weatherDateCache = {
      data: {
        list: modifiedWeatherData,
      },
      expiry: expireTime,
    };

    // Updates cached weather data after removing a weather card
    localStorage.setItem("weatherData", JSON.stringify(weatherDateCache));

    // update local weather data
    setWeatherData(modifiedWeatherData);
  };

  const checkDataAvailablity = () => {
    const existingWeatherData = JSON.parse(localStorage.getItem("weatherData"));

    if (!existingWeatherData.data.list.length) setWeatherData(null);
  };

  return (
    <div className="container mt-5">
      {weatherData ? (
        <div className="col-sm-9 " style={{ margin: "auto" }}>
          <div className="render-card">
            {weatherData.map((data) => (
              <WeatherCard
                key={data.name}
                weatherDate={data}
                handleCardList={handleCardList}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="my-5 text-center">
          <h3>Content not available</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherCardList;
