import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
// import { ListItem, UnorderedList } from "@chakra-ui/react";

const Review = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8800/review"

        //   , {
        //     headers: {
        //       "JWT-Token": localStorage.jwtToken
        //     }
        //   }
      );
      console.log(response);
      setReviews(response.data.reviews);
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.log(reviews)}
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Reviews</h1>
      </div>
      <div>
        {reviews?.map((review, index) => {
          return (
      
              <div className="reviews" key={index}>
              
           
                  <h2>{review?.place?.name}</h2>
                  <p>{review?.review}</p>
                  {/* <p>Created by: {review?.user?.name}</p> */}
                  <p>Created at: {review.createdAt}</p>
           
              </div>
   
          );
        })}{" "}
      </div>
      {" "}
    </div>
  );
};

export default Review;
