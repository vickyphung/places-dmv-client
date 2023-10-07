import React, { useState } from 'react';
import axios from 'axios';

const UpdateReview = (props) => {

    console.log("Made it to Update Review Component")
    console.log(props.reviewId)

    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await axios.get(`http://localhost:8800/review/id/${props.reviewId}`);
    //     setReviews(response.data.reviews);
    //     console.log(response.data.reviews[0].user)
    //   }
    //   fetchData();
    // }, [props.reviewId])


    const [reviewFormData, setReviewFormData] = useState({
        review: ""
      });

    const handleChange = (event) => {
        setReviewFormData({ ...reviewFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.put(`http://localhost:8800/review/update/${props.reviewId}`, {
            review: reviewFormData.review
        });
        console.log(response);
    }

    return (
        <div>
            <h4>Update Review</h4>
                <form onSubmit={handleSubmit}>                   
                    <label htmlFor="review">Update Review:</label>
                    <input name="review" id="review" onChange={handleChange} />
                    <input type="submit" />
                </form>
                          
        </div>
    )
}

export default UpdateReview;