import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateReview from "../Review/UpdateReview";
// import DeleteReview from "../Review/DeleteReview";
// import './style.css'

const User = (props) => {
  const [userInfo, setUserInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/user/id`,
      // const response = await axios.get("http://localhost:8800/user/id",
      
      {
        headers: {
          "JWT-Token": localStorage.jwtToken,
        },
      });
      console.log(response);
      console.log(response.data.user);
      setUserInfo(response.data.user);
      console.log("user ID: " + response.data.user[0]._id);
      // eslint-disable-next-line
      props.setLoggedInId(response.data.user[0]._id);
      props.setUser(response.data.user[0]._id);
    };
    fetchData();
  }, [props]);

  return (
    <div>
      <div>
        {userInfo?.map((user, index) => {
          return (
            <div className="user" key={index}>
              <h1>Hi, {user.name}!</h1>
              <hr></hr>
              <div className="user-info">
                <p>{user.email}</p>
                <p>ID: {user._id}</p>
              </div>
              <div>
                <button onClick={() => navigate("/user/update")}>
                  Update User Information
                </button>

                <br></br>
                <button onClick={() => navigate("/user/delete")}>
                  Delete Account
                </button>

                {/* <button onClick={() => props.setUpdateId(user._id)}>
               Edit User
             </button> */}
              </div>

              <div className="favs">
                <h2>Favorites</h2>
                {user?.favorites?.map((favorite, index) => {
                  return (
                    <div key={index} className="delFav">
                      {favorite}
                      <button
                        onClick={() => props.setRemoveFavoriteId(favorite)}
                      >
                        Remove Favorite
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="reviews">
                <h2>Reviews</h2>
                {user?.reviews?.map((review, index) => {
                  return (
                    <div key={index} className="review">
                      {review}
                      {/* {review.user}
                    {review.place}
                    {review.review} */}
                      <div className="updateRev">
                        <UpdateReview reviewId={review} />
                      </div>{" "}
                      {/* <DeleteReview reviewId={review} /> */}
                      <button onClick={() => props.setReviewDeleteId(review)}>
                        Delete Review
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2>Places Posted</h2>
                {user?.posts?.map((post, index) => {
                  return (
                    <div key={index} className="post">
                      {post}
                      <button onClick={() => props.setDeleteId(post)}>
                        Delete
                      </button>
                      <button onClick={() => props.setUpdateId(post)}>
                        Edit
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
