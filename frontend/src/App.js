import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Dashboard from "./pages/dashboard";
import WeatherForeCast from "./pages/weatherForecast";
import ErrorHandler from "./middlewares/errorHandler";
import { GlobalContext } from "./context/globalState.js";

import "./App.css";

function App() {
  const { error } = useContext(GlobalContext);

  return (
    <>
      {!error ? (
        <Router>
          <Header />

          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/weather-forecast/:id" Component={WeatherForeCast} />
          </Routes>

          <Footer />
        </Router>
      ) : (
        <ErrorHandler error={error} />
      )}
    </>
  );
}

export default App;
