import { useState, useEffect, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";

// importing components
import SearchBar from "../components/common/searchBar";
import { fetchWeatherData } from "../services/weatherFetcher";
import WeatherCard from "../components/weatherCard/weatherCard";
import {
  cacheCityObjects,
  deleteCachedData,
  getAllCachedData,
} from "../services/cacheController";
import { GlobalContext } from "../context/globalState";
import { cityCodesString } from "../utils/weatherUtils";

const Dashboard = () => {
  const { errorHandler } = useContext(GlobalContext);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (getAllCachedData().length === 0) {
      // prettier-ignore
      fetchWeatherData(cityCodesString, errorHandler)
        .then(weatherDataList => cacheCityObjects(weatherDataList));
    }

    if (weatherData.length === 0) {
      setTimeout(() => {
        setWeatherData(getAllCachedData());
      }, 500);
    }
  });

  const closeEvent = (key) => {
    deleteCachedData(key);
    setWeatherData(getAllCachedData());
  };

  return (
    <>
      <SearchBar />

      <div className="container mt-5">
        <div className="col-sm-9 " style={{ margin: "auto" }}>
          <div className="render-card">
            {weatherData.length !== 0 ? (
              weatherData.map((cityData) => (
                <WeatherCard
                  key={cityData.id}
                  weatherData={cityData}
                  closeEvent={closeEvent}
                />
              ))
            ) : (
              <div className="my-5 d-flex justify-content-center">
                <Spinner animation="border" variant="info" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
