import axios from "axios";
import React, { useState, useEffect } from "react";

const AddFromMaps = (props) => {

// let fakeUserId = "62bbf966c4c434b12444023d";
const [userId, setUserId] = useState([]);

useEffect(() => {
  const fetchId = async () => {
    const response = await axios.get(
      `https://placeswithbear.herokuapp.com/user/id`,
      {
        headers: {
          "JWT-Token": localStorage.jwtToken,
        },
      }
    );
    console.log(response);
    setUserId(response.data.user[0]._id);
    console.log(response.data.user[0]._id);
  };
  fetchId();
}, []);

  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    url: "",
    phone: "",
    tags: [""],
    user: `${userId}`
  });

  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await axios.post("https://placeswithbear.herokuapp.com/places/add", {

    const response = await axios.post(`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/places/add`, {

    // const response = await axios.post(`http://localhost:8800/places/add`, {

      // name: placeFormData.name,
      name:  `${props.placeName}`,
      location: {
        street: `${props.postFormData[0].short_name} ${props.postFormData[1].short_name}`,
        city: `${props.postFormData[3].short_name}`,
        state: `${props.postFormData[4].short_name}`,
        // zip: `${props.postFormData[6].short_name}`,
      },
      url:  `${props.url}`,
      tags: [placeFormData.placeTags]
      // user: `${fakeUserId}`
    });
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
    console.log("addFrm JWT " + response.data.jwtToken)
  };

  return (
    <div className="addFromMaps">
      <form className="addFromMapsForm" onSubmit={handleSubmit}>
        {/* <label className="nameLabel" htmlFor="placeName">
          Name:
        </label>
        <input
          className="nameInput"
          name="name"
          id="name"
          onChange={handleChange}
        /> */}
        <label className="nameLabel" htmlFor="placeTags">
          Tags:
        </label>
        <input
          className="nameInput"
          name="placeTags"
          id="placeTags"
          onChange={handleChange}
        />
        <button className="subBtn" type="submit">+add</button>
      </form>
    </div>
  );
};

export default AddFromMaps;
