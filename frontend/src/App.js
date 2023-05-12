import "./App.css";
import SearchBar from "./components/dashboard/searchBar";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import WeatherCardsComponent from "./components/dashboard/weatherCardsComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />

      <WeatherCardsComponent />

      <Footer />
    </div>
  );
}

export default App;
