import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getBackgroundColor, getCachedData } from "../services/cacheController";
import direction_logo from "../assets/images/direction_icon.png";

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const divElement = document.getElementsByClassName("card-color");
    console.log(getBackgroundColor("bgColor"));
    divElement[0].style.backgroundColor = getBackgroundColor("bgColor");

    const data = getCachedData(id);
    setWeatherData(data);
  }, [id]);

  const handleClickEvent = (event) => {
    event.stopPropagation();
    window.history.back(); // moving back to previous page
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col-sm-9 weather-cardview">
          <div
            className="m-3 hover-card card-color"
            // onClick={(event) => handleClickEvent(event, weatherData.id)}
          >
            <div className="card-view">
              <div className="py-3">
                <i
                  className="bi bi-arrow-left"
                  onClick={(event) => handleClickEvent(event)}
                />
              </div>
              <div className="text-center">
                <h4>{`${weatherData.name}, ${weatherData.country}`}</h4>
                <small>{weatherData.dt}</small>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex col-12 text-center col-sm-5 my-5">
                    <div className="col-6 description pb-2">
                      <div>
                        <img
                          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                          alt="icon"
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      {weatherData.description}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center text-center pb-3">
                      <div>
                        <div>
                          <h1>{weatherData.temp}°c</h1>
                        </div>
                        <div>
                          Temp min: {weatherData.temp_min}°c
                          <br />
                          Temp max: {weatherData.temp_max}°c
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dark d-flex justify-content-center py-4"
              // onClick={() => handleClickEvent(weatherData)}
            >
              <div className="d-flex col-12 col-sm-9 my-4">
                <div className="col-4 d-flex justify-content-center font-weight-bold">
                  <div className="text-left">
                    <strong>Pressure: </strong> {weatherData.pressure}hPa
                    <br />
                    <strong>Humidity: </strong>
                    {weatherData.humidity}%
                    <br />
                    <strong>Visibility: </strong>
                    {(weatherData.visibility / 1000).toFixed(1)}km
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center text-center custom-border">
                  <div>
                    <div className="mb-2">
                      <img
                        src={direction_logo}
                        style={{ width: "25px", height: "auto" }}
                        alt="asdf"
                      />
                    </div>
                    <small>
                      <strong>
                        {weatherData.speed}m/s {weatherData.deg} Degree
                      </strong>
                    </small>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div className="text-end">
                    <strong>Sunrise: </strong>
                    {weatherData.sunrise}
                    <br />
                    <strong>Sunset: </strong>
                    {weatherData.sunset}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
