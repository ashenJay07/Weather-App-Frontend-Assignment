import { useEffect, useState } from "react";

const ViewWeatherCard = () => {
  const [weatherDate, setWeatherDate] = useState(null);

  useEffect(() => {
    setWeatherDate(JSON.parse(localStorage.getItem("cardViewData")).data);
  }, []);

  const handleClickEvent = () => {
    console.log("clicked");
    window.history.back();
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
              <div className="col-7 mt-0 text-center">
                <div className="col-12">
                  <h5>{weatherDate.name}</h5>
                  <small>{new Date().toLocaleTimeString()}</small>
                </div>
                <div className="col-12 mt-3">
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherDate.weather[0].icon}@2x.png`}
                    alt=""
                    style={{ width: "50px", height: "auto" }}
                  />
                  {weatherDate.weather[0].description}
                </div>
              </div>
              <div className="col-5 text-center">
                <div>
                  <h1>{weatherDate.main.temp}&#8451;</h1>
                </div>
                <div>
                  <small>Temp min: {weatherDate.main.temp_min}</small>
                  <br />
                  <small>Temp max: {weatherDate.main.temp_max}</small>
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
        <div>Boom</div>
      )}
    </div>
  );
};

export default ViewWeatherCard;
