import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

function Markers(props) {
  if (props.data !== null) {
    let restaurantMarkers = props.data.map((item) => {
      return (
        // Marker with dynamically generated coordinates, onClick event recenters the map
        <Marker
          position={[item.lat, item.lon]}
          eventHandlers={{
            click: () => {
              props.setCenter([item.lat, item.lon]);
              props.setZoom(16);
              props.setCurrentRest(item);
            },
          }}
        >
          {
          // Popup shows up when clicking Marker
          }
          <Popup>
            {
            // Links to each restaurant's individual page
            }
            <Link to={`/restaurant/${item.id}`}>
              <h3 class="pageLink">{item.name}</h3>
            </Link>
            <p>phone: (802) {item.phonenumber}</p>
            <p>address: {item.address}</p>
            {
            // Links to each restaurant's website
            }
            <ExternalLink href={item.website}>Visit Website</ExternalLink>
          </Popup>
        </Marker>
      );
    });

    return restaurantMarkers;
  } else {
    return null;
  }
}

export default Markers;
