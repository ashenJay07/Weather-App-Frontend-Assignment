import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Dashboard from "./pages/dashboard";
import WeatherForeCast from "./pages/weatherForecast";

import { GlobalContext } from "./context/globalState.js";
import ErrorHandler from "./middlewares/errorHandler";

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
