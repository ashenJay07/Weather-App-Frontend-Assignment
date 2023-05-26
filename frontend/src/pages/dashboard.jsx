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
  expiredCachedData,
  deleteBackgroundColor,
} from "../services/cacheController";
import { GlobalContext } from "../context/globalState";
import { cityCodesString, colorProvider } from "../utils/weatherUtils";

const Dashboard = () => {
  const { errorHandler } = useContext(GlobalContext);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const expCityCodes = expiredCachedData();
    if (getAllCachedData().length === 0 || expCityCodes) {
      const cityCodes = !expCityCodes ? cityCodesString : expCityCodes;

      // prettier-ignore
      fetchWeatherData(cityCodes, errorHandler)
        .then(weatherDataList => cacheCityObjects(weatherDataList))
        .catch(error => console.log(error))
    }

    if (weatherData.length === 0) {
      setTimeout(() => {
        setWeatherData(getAllCachedData());
      }, 500);
    }

    colorProvider();
    deleteBackgroundColor("bgColor");
  });

  const closeEvent = (key) => {
    deleteCachedData(key);
    setWeatherData(getAllCachedData());
  };

  return (
    <>
      <SearchBar />

      <div className="container mt-5 dashboard">
        <div className="col-sm-9 dashboard-frame">
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
              <div className="my-5 col-12 d-flex justify-content-center">
                <Spinner
                  className="spinner"
                  animation="border"
                  variant="info"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
