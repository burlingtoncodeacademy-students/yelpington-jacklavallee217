import { Link } from "react-router-dom";

function Logo(props) {
    return (
        // Links to index page and displays logo
        <Link to="/"><h1 id="logoTitle">Yelpington</h1></Link>
    )
}

export default Logo