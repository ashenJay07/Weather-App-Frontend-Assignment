import { useState, useEffect } from "react";
import axios from "axios";

// importing components
import SearchBar from "../components/common/searchBar";
import { fetchWeatherData } from "../services/weatherFetcher";

fetchWeatherData();

const Dashboard = () => {
  return (
    <>
      <SearchBar />
    </>
  );
};

export default Dashboard;
