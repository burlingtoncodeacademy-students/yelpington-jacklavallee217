import { useState } from 'react'

import { MapContainer, Popup, TileLayer, ZoomControl} from "react-leaflet";
import ChangeView from "./ChangeView";
import Markers from './Markers';


function Map(props) {


  return (
    // Full screen map on index page
    <div id="mapContainer">
      <MapContainer
        center={props.center}
        zoom={props.zoom}
        zoomControl={false}
        style={{ height: "100vh", width: "100vw" }}
      >
        {
        // Adjusts the zoom controls to the bottom right of the screen  
        }
        <ZoomControl position="bottomright"></ZoomControl>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {
        // Used for rendering each restaurants individual marker
        }
        <Markers data={props.data} zoom={props.zoom} setZoom={props.setZoom} center={props.center} setCenter={props.setCenter} banner={props.banner} setBanner={props.setBanner} currentRest={props.currentRest} setCurrentRest={props.setCurrentRest}></Markers>
      </MapContainer>
    </div>
  );
}

export default Map;