import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../NavBar";

const UpdatePlace = (props) => {
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const updatePlace = async () => {
      // const response = await axios.get(`http://localhost:8800/places/id/${props.placeId}`

      const response = await axios.get(
        `${
          "https://placeswithbear.herokuapp.com" || "localhost:8800"
        }/places/id/${props.placeId}`

        //  , {
        //    headers: {
        //      "JWT-Token": localStorage.jwtToken
        //    }
        //  }
      );
      console.log(response);
      setPlace(response.data);
    };
    updatePlace();
  }, [props.placeId]);

  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    tags: [""],
  });

  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await axios.put(`http://localhost:8800/places/update/${props.placeId}`, {

    const response = await axios.put(
      `${
        "https://placeswithbear.herokuapp.com" || "localhost:8800"
      }/places/update/${props.placeId}`,
      {
        name: placeFormData.placeName,
        location: {
          street: placeFormData.placeStreet,
          city: placeFormData.placeCity,
          state: placeFormData.placeState,
          zip: placeFormData.placeZip,
        },
        tags: [placeFormData.placeTags],
      }
    );
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  return (
    <div>
      {console.log(place)}

      {place?.map((place, index) => {
        return (
          <div>
            <NavBar />
            <div className="updatePlaceForm">
              <h1>Update {place.name}</h1>

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="placeName">Name:</label>
                  <input
                    name="placeName"
                    placeholder={place.name}
                    id="placeName"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="placeStreet">Street:</label>
                  <input
                    name="placeStreet"
                    id="placeStreet"
                    placeholder={place.location.street}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="placeCity">City:</label>
                  <input
                    name="placeCity"
                    id="placeCity"
                    placeholder={place.location.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="placeState">State:</label>
                  <input
                    name="placeState"
                    id="placeState"
                    placeholder={place.location.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="placeZip">Zip:</label>
                  <input
                    name="placeZip"
                    id="placeZip"
                    placeholder={place.location.zip}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="placeTags">Tags:</label>
                  <input
                    name="placeTags"
                    id="placeTags"
                    placeholder={place.tags}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpdatePlace;
