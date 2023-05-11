import "./App.css";
import SearchBar from "./components/dashboard/searchBar";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import WeatherCard from "./components/weather/weatherCard";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />

      <div className="container mt-5">
        <div className="col-sm-9 " style={{ margin: "auto" }}>
          <div className="render-card">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
