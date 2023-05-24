import { useNavigate } from "react-router-dom";
import { deleteCachedData } from "../../services/cacheController";

const WeatherCard = ({ weatherData, closeEvent }) => {
  const navigate = useNavigate();

  //   const handleClickEvent = (weatherData) => {
  //     navigate(`/view-weather-card/${weatherData.id}`);
  //   };

  const handleCloseEvent = (key) => {
    closeEvent(key);
  };

  return (
    <div className="col-sm-6 weather-card">
      <div className="m-3 hover-card">
        <div
          className="d-flex flex-wrap card-view pb-4"
          style={{ backgroundColor: "pink" }}
        >
          <div className="col-12 d-flex flex-row-reverse ">
            <i
              className="bi bi-x"
              style={{ fontSize: "30px", marginRight: "10px" }}
              onClick={() => handleCloseEvent(weatherData.id)}
            ></i>
          </div>
          <div
            className="col-7 mt-0 text-center"
            // onClick={() => handleClickEvent(weatherData)}
          >
            <div className="col-12">
              <h5>{`${weatherData.name}, ${weatherData.country}`}</h5>
              <small>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className="col-12 mt-3">{weatherData.description}</div>
          </div>
          <div
            className="col-5 text-center"
            // onClick={() => handleClickEvent(weatherData)}
          >
            <div>
              <h1>{weatherData.temp}&#8451;</h1>
            </div>
            <div>
              <small>Temp min: {weatherData.temp_min}</small>
              <br />
              <small>Temp max: {weatherData.temp_max}</small>
            </div>
          </div>
        </div>
        <div
          className="dark d-flex py-4"
          //   onClick={() => handleClickEvent(weatherData)}
        >
          <div className="col-4 text-center">
            <small>Pressure: {weatherData.pressure}</small>
            <br />
            <small>Humidity: {weatherData.humidity}%</small>
            <br />
            <small>Visibility: {weatherData.visibility / 1000}km</small>
          </div>
          <div className="col-4 text-center custom-border">
            <i className="bi bi-cursor-fill" style={{ fontSize: "25px" }}></i>
            <br />
            <small>4.0m/s 120 Degree</small>
          </div>
          <div className="col-4 text-center">
            <small>
              Sunrise:{" "}
              {new Date(weatherData.sunrise * 1000).toLocaleTimeString()}
            </small>
            <br />
            <small>
              Sunset: {new Date(weatherData.sunset * 1000).toLocaleTimeString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
