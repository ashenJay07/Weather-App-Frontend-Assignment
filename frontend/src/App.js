import "./App.css";
import SearchBar from "./components/dashboard/searchBar";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import City from "./components/dashboard/weatherCardsComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />

      <City />

      <Footer />
    </div>
  );
}

export default App;
