import React, { useState } from "react";
import axios from "axios";


function Tag() {
    const [results, setResults] = useState([]);
    const [formData, setFormData] = useState("");

    const handleChangeTag = (event) => {
        setFormData(event.target.value);
      };
    
      const handleSubmitTag = async (event) => {
        event.preventDefault();
        const response = await axios.get(
          `${
            "https://placeswithbear.herokuapp.com" || "localhost:8800"
          }/places/tag/${formData}`
        );
        console.log(response);
        setResults(response.data.places);
      };
  return (
    <div>
      <div>
        <h1>Filter Posts by Category</h1>
      </div>
      <div>
        <form className="searchForm" onSubmit={handleSubmitTag}>
          <div>
            <input
              className="searchInput"
              name="query"
              id="query"
              placeholder="Art, Museum, or Park"
              onChange={handleChangeTag}
            />
          </div>
          <div>
            <input className="submit" type="submit" value="🔍Search" />
          </div>
        </form>
      </div>


      <div>
        {results?.map((result, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{result?.name}</h2>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Tag;
