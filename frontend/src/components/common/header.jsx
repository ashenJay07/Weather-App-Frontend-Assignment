import logo from "../../assets/images/weather-app-logo.png";

const Header = () => {
  return (
    <div className="container-fluid header py-5">
      <div className="d-flex justify-content-center">
        <div className="col-sm-2 d-flex justify-content-evenly align-items-center">
          <img src={logo} alt="Weather App Logo" />
          <div className="d-flex align-items-end page-title">Weather App</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
