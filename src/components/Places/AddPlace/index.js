import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPlace = (props) => {
  const fakeUserId = "62bbf966c4c434b12444023d";

const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get(`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/user/id`,
      const response = await axios.get("http://localhost:8800/user/id",
        {
          headers: {
            "JWT-Token": localStorage.jwtToken,
          },
        }
      );
      console.log(response);
      console.log(response.data.user);
      console.log("+p user ID: " + response.data.user[0]._id);
      // eslint-disable-next-line
      setUserId(response.data.user[0]._id);
    }
    fetchData();
  })

console.log(userId + " userId set")


  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    tags: [""],
    user: `${userId}`,
  });


  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await axios.post("https://placeswithbear.herokuapp.com/places/add", {

    // const response = await axios.post(`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/places/add`, {

    const response = await axios.post("http://localhost:8800/places/add", {

      name: placeFormData.placeName,
      location: {
        street: placeFormData.placeStreet,
        city: placeFormData.placeCity,
        state: placeFormData.placeState,
        zip: placeFormData.placeZip,
      },
      tags: [placeFormData.placeTags],
      user: `${userId}`,
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  return (
    <div className="addPlace">
      <h1 className="addPlaceTitle">Add a place to the database</h1> <hr />

      <form onSubmit={handleSubmit}>
      <div className="addPlaceForm">

        <div>
          <label htmlFor="placeName">Name:</label>
          <input name="placeName" id="placeName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeStreet">Street:</label>
          <input name="placeStreet" id="placeStreet" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeCity">City:</label>
          <input name="placeCity" id="placeCity" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeState">State:</label>
          <input name="placeState" id="placeState" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeZip">Zip:</label>
          <input name="placeZip" id="placeZip" onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="placeTags">
          Tags:
        </label>
        <input
          className="input"
          name="placeTags"
          id="placeTags"
          onChange={handleChange}
        />

</div>




        <div>
          <input className="submitButton" type="submit" />
        </div>
      </div>

      </form>
    </div>
  );
};

export default AddPlace;

