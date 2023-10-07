import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../NavBar";

const FindPlace = (props) => {
  const [results, setResults] = useState([]);

  const [formData, setFormData] = useState("22312");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://placeswithbear.herokuapp.com/findplace/${formData}`
    );
    console.log(response);
    setResults(response.data.candidates);
  };

  return (
    <div>
      <NavBar />
      <h1>Find Place From Text Search Form</h1>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          name="input"
          id="input"
          placeholder="enter place name"
          onChange={handleChange}
        />
        <input className="submitBtn" type="submit" value="🔍" />
      </form>
      {console.log(results)}

      <div>
        {results?.map((candidate, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{candidate.name}</h2>
              <h3>Location</h3>
              <p>{candidate.formatted_address}</p>

              <div className="tags">
                <h3>Tags</h3>
                {candidate?.types?.map((type, index) => {
                  return (
                    <div key={index} className="tag">
                      <p>{type}</p>
                    </div>
                  );
                })}
              </div>

              <button onClick={() => props.setDetailsId(candidate.place_id)}>
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FindPlace;
