import { useNavigate } from "react-router-dom";

import { cacheBackgroundColor } from "../../services/cacheController";
import direction_logo from "../../assets/images/direction_icon.png";

const WeatherCard = ({ weatherData, closeEvent }) => {
  const navigate = useNavigate();

  const handleClickEvent = (event, id) => {
    cacheBackgroundColor("bgColor", event.currentTarget.style.backgroundColor);

    navigate(`/weather-forecast/${id}`);
  };

  const handleCloseEvent = (event, key) => {
    event.stopPropagation();
    closeEvent(key);
  };

  return (
    <div className="col-sm-6 weather-card">
      <div
        className="m-3 hover-card card-color"
        onClick={(event) => handleClickEvent(event, weatherData.id)}
      >
        <div className="d-flex flex-wrap card-view pb-4">
          <div className="col-12 d-flex flex-row-reverse">
            <i
              className="bi bi-x my-0"
              onClick={(event) => handleCloseEvent(event, weatherData.id)}
            ></i>
          </div>
          <div className="col-6 text-center">
            <div className="col-12 pt-1">
              <h5>{`${weatherData.name}, ${weatherData.country}`}</h5>
              <small>{weatherData.dt}</small>
            </div>
            <div className="col-12 mt-2">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="icon"
              />
              <strong>{weatherData.description}</strong>
            </div>
          </div>
          <div className="col-6 text-center">
            <div>
              <h1>{weatherData.temp}°c</h1>
            </div>
            <div>
              <small>Temp min: {weatherData.temp_min}°c</small>
              <br />
              <small>Temp max: {weatherData.temp_max}°c</small>
            </div>
          </div>
        </div>
        <div
          className="dark d-flex py-4"
          // onClick={() => handleClickEvent(weatherData)}
        >
          <div className="col-4 d-flex justify-content-center">
            <div className="text-start">
              <small>
                <strong>Pressure: </strong>
                {weatherData.pressure}hPa
              </small>
              <br />
              <small>
                <strong>Humidity: </strong>
                {weatherData.humidity}%
              </small>
              <br />
              <small>
                <strong>Visibility: </strong>
                {(weatherData.visibility / 1000).toFixed(1)}km
              </small>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center text-center custom-border">
            <div>
              <div className="mb-2">
                <img src={direction_logo} alt="wind" />
              </div>
              <small>
                {weatherData.speed}m/s {weatherData.deg} Degree
              </small>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="text-end">
              <small>
                <strong>Sunrise: </strong>
                {weatherData.sunrise}
              </small>
              <br />
              <small>
                <strong>Sunset: </strong>
                {weatherData.sunset}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
