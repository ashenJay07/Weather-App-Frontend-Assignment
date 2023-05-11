import "./App.css";
import SearchBar from "./components/dashboard/searchBar";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
