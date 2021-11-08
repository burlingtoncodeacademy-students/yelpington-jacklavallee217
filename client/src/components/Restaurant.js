import { useEffect, useState } from "react";
import { MapContainer, TileLayer, ZoomControl, Marker} from "react-leaflet";
import { ExternalLink } from "react-external-link";
import Logo from "./Logo";


function Restaurant(props) {
  // State variable for restaurants info
  const [data, setData] = useState(null);

  // Grabs the restaurant's id from URL
  let id = document.location.pathname.split("/")[2];
  console.log(id);

  // Grabs the correct JSON object from restaurant.json
  useEffect(() => {
    fetch("/restaurant/" + id)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // Checks if the data variable is populated
  if (data !== null) {
    return (
    <div>
      {
      // Yelpington Logo, links to index page
      }
      <Logo></Logo>
      <div id="restContainer">
        {
        // Restaurants info
        }
        <div id="infoContainer">
            <h1>{data.name}</h1>
            <p>{data.address}</p>
            <p>(802) {data.phonenumber}</p>
            <p>{data.hours}</p>
            <ExternalLink href={data.website}>Visit Website</ExternalLink>

        </div>
        {
        // Restaurants location on the map
        }
        <div id="restMapContainer">
            <MapContainer
                center={[data.lat, data.lon]}
                zoom={18}
                zoomControl={false}
                style={{ height: "50vh", width: "50vw" }}>
                <ZoomControl position="bottomright"></ZoomControl>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[data.lat, data.lon]}></Marker>
            </MapContainer>
        </div>
      </div>
      {
      // Restaurant's comments
      }
      <div id="commentSection">
          {
          // Each mapped out comment
          }
          <h2>Comments:</h2>
            {data.notes.map((element) => {
            return <p>{element}</p>;
            })}
      </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Restaurant;
