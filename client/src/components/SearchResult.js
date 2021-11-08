import { Link } from "react-router-dom";

function SearchResult(props) {
  // If there is search results
  if (props.searchData.length > 0) {
    // For each match return a Link and Div for the restaurant
    let results = props.searchData.map((element) => {
      return (
        <Link to={`/restaurant/${element.id}`}>
          <div class="searchResult">
            <h2>{element.name}</h2>
            <p><i>{element.address}</i></p>
          </div>
        </Link>
      );
    });
    return results;
  } else {
    return null;
  }
}

export default SearchResult;
