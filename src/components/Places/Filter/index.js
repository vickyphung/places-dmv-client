import React, { useState } from "react";
import axios from "axios";

function Filter() {
  const [places, setPlaces] = useState([]);

  const dc = async () => {
    const response = await axios.get(
    
        `https://placeswithbear.herokuapp.com/places/state/DC`
    );
    console.log(response);
    setPlaces(response.data.places);
    console.log(response.data);
    // console.log(response.data.results);
  };

  const md = async () => {
    const response = await axios.get(
      `${
        "https://placeswithbear.herokuapp.com" || "localhost:8800"
      }/places/state/MD`
    );
    console.log(response);
    setPlaces(response.data.places);
    console.log(response.data);
    // console.log(response.data.results);
  };

  const va = async () => {
    const response = await axios.get(
      `${
        "https://placeswithbear.herokuapp.com" || "localhost:8800"
      }/places/state/VA`
    );
    console.log(response);
    setPlaces(response.data.places);
    console.log(response.data);
    // console.log(response.data.results);
  };

  return (
    <div className="flex">
      {console.log(places)}

      <div>
        Only show places in:{" "}
        <button className="dcBtn" onClick={dc}>
          DC
        </button>
        <button className="dcBtn" onClick={md}>
          MD
        </button>
        <button className="dcBtn" onClick={va}>
          VA
        </button>
      </div>

      <div>
        {places?.map((place, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{place?.name}</h2>
              {place?.location.street}
              {place?.location.city}
              {place?.location.state}
              <a
                href={`${
                  "https://placeswithbear.herokuapp.com" || "localhost:8800"
                }/places/id/${place?._id}`}
              >
                Link
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
