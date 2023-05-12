import { useState, useEffect } from "react";
import WeatherCard from "../card/weatherCard";
import colorPalette from "../../data/colorPalette.json";

const WeatherCardList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // prettier-ignore
    const existingWeatherData = JSON.parse(localStorage.getItem("weatherData")).data.list;
    // console.log(existingWeatherData);

    var i = 0;
    for (let data of existingWeatherData) {
      data.bgColor = colorPalette.theme[i];
      i < colorPalette.theme.length - 1 ? ++i : (i = 0);
    }

    setWeatherData(existingWeatherData);
  }, []);

  const handleCardList = (weatherDate) => {
    const modifiedWeatherData = weatherData.filter(
      (data) => data !== weatherDate
    );
    setWeatherData(modifiedWeatherData);
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
        ""
      )}
    </div>
  );
};

export default WeatherCardList;
