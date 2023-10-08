import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
// import AddReview from "../Review/AddReview";
import AddFavorite from "../Favorite/AddFavorite";
// import Filter from "./Filter";

const Places = (props) => {
  console.log("places-user-id: " + props.userId);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // const fakeUserId = "62b5153a18a020243c4bb4a0";
  // const [open, setOpen] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get("http://localhost:8800/places");
      const response = await axios.get(
        // "https://placeswithbear.herokuapp.com/places" ||
        "http://localhost:8800/places",
        {
          headers: {
            "JWT-Token": localStorage.jwtToken,
          },
        }
      );
      console.log("JWT " + localStorage.jwtToken);
      console.log(response);
      setPlaces(response.data.placesList);
    };
    fetchData();
  }, [props.setFavoriteId]);

  const delPost = (data) => {
    props.setDeleteId(data);
  };

  return (
    <div className="places-container">
      {console.log(places)}

      <div className="places-title">
        <h1>PLACES TO GO IN THE DMV</h1>
      </div>
      <hr />

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (


        <div className="place-list">
          {places?.map((place, index) => {
            return (
              <div className="place-card" key={index}>
                <div className="place-title">
                <h2>{place.name}</h2>
                </div>
                <div className="place-address">
                  <p>
                    {place.location.street}
                    <br />
                    {place.location.city}, {place.location.state}{" "}
                    {place.location.zip}
                  </p>
                </div>

                <a href={place.url}>Website</a>

                <div className="place-details">
                  <div className="tags">
                    {place?.tags?.map((tag, index) => {
                      return (
                        <text key={index} className="tag">
                          {tag}
                        </text>
                      );
                    })}
                  </div>
                  {/* LIKES */}

                  <div className="place-favs">
                  <div className="fav-count">
                    <p><span className="fav-heart">💜</span> {place.favorites}</p>
                  </div>
                  <div className="place-fav-btn">
                  <AddFavorite placeId={place._id} userId={props.userId} />
                  </div>
                  </div>

                  {/* //DETAILS */}
                  {/* <div>
                          <a
                            href={`${
                              "https://placeswithbear.herokuapp.com" ||
                              "localhost:8800"
                            }/places/id/${place?._id}`}
                          >
                            Details
                          </a>
                        </div> */}
                </div>
                {/* REVIEWS */}
                {/* <div>
                        <div className="reviewSection">
                        
                              
                                    <h4>Reviews</h4>
                               
                            
                            
                                {place?.reviews?.map((review, index) => {
                                  return (
                                    <div key={index} id="reviews-list">
                                      <p className="reviewText">
                                        💬 {review.review}
                                      </p>
                                      <p className="postedBy">
                                        {" "}
                                        -{" "}
                                        <span className="italic">
                                          {review.user}
                                        </span>
                                      </p>
                                    </div>
                                  );
                                })}
                    
                        </div>
                      </div> */}
                {/* AUTHOR */}
                {/* <div>
              <h3>Posted by</h3>
              <p>{place.user ? place.user : "Unknown"}</p>
            </div> */}

                {/* BUTTONS */}

                {/* REVIEW BTN */}
                <div className="buttonSection">
                  {/* <AddReview
                          placeId={place._id}
                          userId={props.userId}
                        /> */}

                  {/* LIKE BTN */}
          
                  {/* <Button onClick={() => props.setDeleteId(place._id)}>Delete</Button>           */}

                  {/* 
                        <DeletePlace
                          placeId={place._id}
                         /> */}

                  {/* EDIT */}
                  {/* <button
                          title="edit place"
                          className="editBtn"
                          onClick={() => {
                            props.setPlaceUpdateId(place._id);
                          }}
                        >
                          ✏️ edit
                        </button> */}
                  {/* DELETE                       */}
                  <br />
                        <button
                          className="editBtn"
                          title="delete place"
                          onClick={() => {
                            delPost(place._id);
                          }}
                        >
                          ❌ delete
                        </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Places;
