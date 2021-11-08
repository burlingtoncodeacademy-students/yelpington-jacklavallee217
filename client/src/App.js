import React, { useEffect, useState } from "react"

import "./App.css"

import Map from "./components/Map"
import Nav from "./components/Nav"
import Logo from "./components/Logo"
import SearchResult from "./components/SearchResult"
import SearchResults from "./components/SearchResults"

function App() {

  // State Variables
  const [data, setData] = useState(null)
  const [searchData, setSearchData] = useState([])
  const [center, setCenter] = useState([44.48, -73.212])
  const [zoom, setZoom] = useState(15)
  const [currentRest, setCurrentRest] = useState(null)

  // Grabs restaurant.json
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    <div>
      <header>
        <Logo></Logo>
        {
        // Old nav bar 
        }
        {/* <Search data={data} searchData={searchData} setSearchData={setSearchData}></Search>         */}
        {/* <Nav
          data={data}
          center={center}
          setCenter={setCenter}
          zoom={zoom}
          setZoom={setZoom}
          banner={banner}
          setBanner={setBanner}
          currentRest={currentRest}
          setCurrentRest={setCurrentRest}
        ></Nav> */}
      </header>
      {
      // Displays search matches in aside
      }
      <SearchResults data={data} searchData={searchData} setSearchData={setSearchData}></SearchResults>
      {
      // Main pages map
      }
      <Map
        data={data}
        center={center}
        setCenter={setCenter}
        zoom={zoom}
        setZoom={setZoom}
        currentRest={currentRest}
        setCurrentRest={setCurrentRest}
      ></Map>
    </div>
  );
}

export default App;
