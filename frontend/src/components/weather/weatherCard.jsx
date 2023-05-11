const WeatherCard = () => {
  return (
    <div className="col-sm-6 weather-card">
      <div className="m-3">
        <div className="d-flex flex-wrap card-view pb-4">
          <div className="col-12">
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div className="col-7 mt-0 text-center">
            <div className="col-12">
              <h5>Colombo, LK</h5>
              <small>9:37 AM</small>
            </div>
            <div className="col-12 mt-3">{`<Icon> `}Few Clouds</div>
          </div>
          <div className="col-5 text-center">
            <div>
              <h1>7&#8451;</h1>
            </div>
            <div>
              <small>Temp min: </small>
              <br />
              <small>Temp max: </small>
            </div>
          </div>
        </div>
        <div className="dark d-flex py-4">
          <div className="col-4 text-center">
            <small>Pressure: 122343</small>
            <br />
            <small>Humidity: 78%</small>
            <br />
            <small>Visibility: 8.0km</small>
          </div>
          <div className="col-4 text-center custom-border">
            <p>Icon</p>
            <small>4.0m/s 120 Degree</small>
          </div>
          <div className="col-4 text-center">
            <small>Sunrise: 6.05AM</small>
            <br />
            <small>Sunset: 6.05AM</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
