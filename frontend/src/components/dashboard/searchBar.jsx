const SearchBar = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="col-sm-4 search-bar">
          <form className="d-flex" role="search" >
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Add City
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
