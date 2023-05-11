const Header = () => {
  return (
    <div className="container-fluid header py-5">
      <div className="d-flex justify-content-center">
        <div className="col-sm-3 d-flex justify-content-evenly align-items-center">
          <img src="resources/weather-app-logo.png" alt="Weather App Logo" />
          <h3>Weather App</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
