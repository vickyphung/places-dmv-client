import React, { useEffect } from 'react';
import axios from 'axios';

const RemoveFavorite = (props) => {

    console.log("Made it to the Delete Favorite Component")
    console.log(props.placeId)

    // const userId = "62b5153a18a020243c4bb4a0";

    useEffect(()=>{
        const addFav = async () => {
            if (props.placeId) {
                const response = await axios.put(`http://localhost:8800/user/favorite/remove/${props.userId}/${props.placeId}`)
                console.log(response)
            } 
       }
        addFav();
    }, [props.placeId, props.userId])

    return (
        <div>
            <h1>Delete Favorite Place</h1>
            <p>Successfully deleted favorite.</p>
        </div>
    )
}

export default RemoveFavorite;