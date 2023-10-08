import React, { useState } from "react";
import axios from "axios";

const AddFavorite = (props) => {
  console.log("+fav pID " + props.placeId);
  console.log("+fav uID " + props.userId);

  const [data, setData] = useState([]);

  const fakeUserId = "651fa091601cc9291c8c518b";

  // useEffect(()=> {
  //     const addFav = async () => {
  //         if (props.placeId) {
  //             const response = await axios.put(`http://localhost:8800/user/favorite/add/${props.placeId}`)
  //             console.log(response)
  //             setData(response.data)
  //         }
  //    }
  //     addFav();
  // }, [props.placeId])

  {
    // useEffect(() => {
    const addFav = async () => {
      const response = await axios.put(
        `https://placeswithbear.herokuapp.com/user/favorite/put/${props.userId || fakeUserId}/${props.placeId}`
      );

      // const response = await axios.put(
      //   `http://localhost:8800/user/favorite/put/${props.userId}/${props.placeId}`
      // );

      // const response = await axios.put(
      //   `http://localhost:8800/user/favorite/put/${fakeUserId}/${props.placeId}`
      // );

      console.log(response);
      setData(response.data);
    };

    return (
      <div>
        <button
          className="place-fav-btn"
          title="add a like"
          onClick={() => {
            addFav();
          }}
        ><span className="fav-heart">➕</span> like
        </button>

        {console.log("+fav msg " + data.message)}
      </div>
    );
  }
};
export default AddFavorite;
