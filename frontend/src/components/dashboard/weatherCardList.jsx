import { useState, useEffect } from "react";
import WeatherCard from "../card/weatherCard";

const WeatherCardList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // prettier-ignore
    const existingWeatherData = JSON.parse(localStorage.getItem("weatherData")).data;
    // console.log(existingWeatherData);
    setWeatherData(existingWeatherData.list);
  }, []);

  return (
    <div className="container mt-5">
      <div className="col-sm-9 " style={{ margin: "auto" }}>
        <div className="render-card">
          {weatherData.map((data) => (
            <WeatherCard key={data.name} weatherDate={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCardList;
