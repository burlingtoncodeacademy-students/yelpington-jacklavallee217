import SearchResult from "./SearchResult";

function SearchResults(props) {
  let tempArray = [];

  // Checks if the props.data variable is populated
  if (props.data !== null) {
    return (
      <div id="searchResultBar">
        <div id="searchDiv">
            {
            // Dynamic search input
            }
          <input
            type="search"
            placeholder="Search Restaurants"
            onChange={(evt) => {
              // Compares event.targets id and compares it to each restaurant's JSON object
              props.data.filter((element) => {
                if (
                  element.name.toUpperCase().includes(evt.target.value.toUpperCase()) &&
                  !tempArray.includes(element)
                ) {
                  tempArray.push(element)
                }
                // If search input is empty, empty the array
                if (evt.target.value.length === 0) {
                  tempArray = []
                }
                props.setSearchData(tempArray);
              });
            }}
          />
          <SearchResult searchData={props.searchData}></SearchResult>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchResults;
