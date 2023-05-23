import { useState, useEffect, useContext } from "react";
import axios from "axios";

// importing components
import SearchBar from "../components/common/searchBar";
import { fetchWeatherData } from "../services/weatherFetcher";
import { GlobalContext } from "../context/globalState";

const Dashboard = () => {
  const { setError } = useContext(GlobalContext);
  fetchWeatherData(setError);

  return (
    <>
      <SearchBar />
    </>
  );
};

export default Dashboard;
