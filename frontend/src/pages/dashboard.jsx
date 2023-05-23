import { useState, useEffect, useContext } from "react";
import axios from "axios";

// importing components
import cityData from "../data/cities.json";
import SearchBar from "../components/common/searchBar";
import { fetchWeatherData } from "../services/weatherFetcher";
import { GlobalContext } from "../context/globalState";

const Dashboard = () => {
  const { errorHandler } = useContext(GlobalContext);

  cityData.List.forEach((city) => {
    const ExpiresAt = city.ExpiresAt ? city.ExpiresAt : 5;
    fetchWeatherData(city.CityCode, ExpiresAt, errorHandler);
  });

  return (
    <>
      <SearchBar />
    </>
  );
};

export default Dashboard;
