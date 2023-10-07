import React, { useEffect } from 'react';
import axios from 'axios';

const DeleteReview = (props) => {

    console.log("Made it to the Delete Review Component")
    console.log(props.reviewId)

    useEffect(()=>{
        const delPlace = async () => {
            if (props.reviewId) {
                const response = await axios.delete(`http://localhost:8800/review/delete/${props.reviewId}`)
                console.log(response)
            } 
       }
        delPlace();
      }, [props.reviewId])
  
  




    
    return (
        <div>
        <h1>Delete Review</h1>
        <p>Successfully deleted the review.</p>
        </div>
    )
}

export default DeleteReview;



