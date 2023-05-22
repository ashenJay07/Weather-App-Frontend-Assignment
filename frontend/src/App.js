import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Dashboard from "./pages/dashboard";
import WeatherForeCast from "./pages/weatherForecast";
import ErrorBoundary from "./middlewares/errorHandler";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />

        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/weather-forecast" Component={WeatherForeCast} />
        </Routes>

        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
