import React, { useState } from "react";
import axios from "axios";


function Name() {
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `${
        "https://placeswithbear.herokuapp.com" || "localhost:8800"
      }/places/name/${formData}`
    );
    console.log(response);
    setPlaces(response.data[0]);
    console.log(response.data);
    // console.log(response.data.results);

  };
  return (
    <div>
      {console.log(places)}

      <div>
        <h1>Filter Posts by Name</h1>
      </div>
      <div>
        <form className="searchForm" onSubmit={handleSubmit}>
          <div>
            <input
              className="searchInput"
              name="query"
              id="query"
              placeholder="Name of Place"
              onChange={handleChange}
            />
          </div>
          <div>
            <input className="submit" type="submit" value="🔍Search" />
          </div>
        </form>
      </div>


      <div>
        {/* {places?.map((result, index) => {
          return (
            <div className="searchResults" key={index}>
              {console.log(places)}
              <h2>{result?.name}</h2>
            </div>
          );
        })} */}

      </div>

    </div>
  );
}

export default Name;