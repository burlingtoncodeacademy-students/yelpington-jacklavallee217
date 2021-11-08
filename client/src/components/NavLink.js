import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    // Each restaurant's individual link
    <Link to={`/restaurant/${props.data.id}`}>
      <div class="navLink">{props.data.name}</div>
    </Link>
  );
}

export default NavLink;
