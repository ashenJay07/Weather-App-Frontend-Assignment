import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewWeatherCard = () => {
  const [weatherDate, setWeatherDate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // accessing cached data from local storage
    var tempWeatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (tempWeatherData) {
      tempWeatherData = tempWeatherData.data.list;

      const cityWeatherData = tempWeatherData.filter(
        (data) => data.id === parseInt(id)
      );
      setWeatherDate(cityWeatherData[0]);
    }
  }, [id]);

  const handleClickEvent = () => {
    window.history.back(); // moving back to previous page
  };

  return (
    <div className="col-sm-7 mb-4" style={{ margin: "auto" }}>
      {weatherDate ? (
        <div className="col-sm-12 weather-cardview">
          <div className="m-3">
            <div
              className="d-flex flex-wrap card-view pb-4"
              style={{ backgroundColor: `${weatherDate.bgColor}` }}
            >
              <div className="col-12">
                <i
                  className="bi bi-arrow-left"
                  style={{
                    fontSize: "30px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleClickEvent}
                ></i>
              </div>
              <div className="col-12">
                <div className="col-sm-6" style={{ margin: "auto" }}>
                  <div className="col-12 text-center mb-4">
                    <h2>{weatherDate.name}</h2>
                    <small>{new Date().toLocaleTimeString()}</small>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="col-6 mt-0 text-center">
                      <div className="col-12 mt-3 pb-3">
                        <div className="col-12">
                          <img
                            src={`https://openweathermap.org/img/wn/${weatherDate.weather[0].icon}@2x.png`}
                            alt=""
                            style={{ width: "100px", height: "auto" }}
                          />
                        </div>
                        <div className="col-12">
                          {weatherDate.weather[0].description}
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-center d-flex align-items-end justify-content-center viewcard pb-3">
                      <div>
                        <div className="col-12">
                          <h1>{weatherDate.main.temp}&#8451;</h1>
                        </div>
                        <div>
                          <small className="col-12">
                            Temp min: {weatherDate.main.temp_min}
                          </small>
                          <br />
                          <small className="col-12">
                            Temp max: {weatherDate.main.temp_max}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dark d-flex py-4">
              <div className="col-4 text-center">
                <small>Pressure: {weatherDate.main.pressure}</small>
                <br />
                <small>Humidity: {weatherDate.main.humidity}%</small>
                <br />
                <small>Visibility: {weatherDate.visibility / 1000}km</small>
              </div>
              <div className="col-4 text-center custom-border">
                <i
                  className="bi bi-cursor-fill"
                  style={{ fontSize: "25px" }}
                ></i>
                <br />
                <small>4.0m/s 120 Degree</small>
              </div>
              <div className="col-4 text-center">
                <small>
                  Sunrise:{" "}
                  {new Date(
                    weatherDate.sys.sunrise * 1000
                  ).toLocaleTimeString()}
                </small>
                <br />
                <small>
                  Sunset:{" "}
                  {new Date(weatherDate.sys.sunset * 1000).toLocaleTimeString()}
                </small>
              </div>
            </div>
            <div>
              <small>{`Last data update's timespan: ${new Date(
                weatherDate.dt * 1000
              ).toLocaleTimeString()}`}</small>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 text-center">
          <h3>Content not available</h3>
        </div>
      )}
    </div>
  );
};

export default ViewWeatherCard;
