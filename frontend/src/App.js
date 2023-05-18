import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import BodyComponent from "./components/dashboard/bodyComponent";
import ViewWeatherCard from "./components/dashboard/viewWeatherCard";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<BodyComponent />} />
          <Route path="/weather-dashboard" element={<BodyComponent />} />
          <Route path="/view-weather-card/:id" element={<ViewWeatherCard />} />
        </Routes>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
