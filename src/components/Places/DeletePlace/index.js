import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import NavBar from '../../NavBar';
import axios from 'axios';

const DeletePlace = (props) => {

    console.log("Made it to the Delete Place Component")
    console.log("pId" + props.placeId)

    const navigate = useNavigate();

    useEffect(()=>{
      const delPlace = async () => {
        if (props.placeId) {
          // const response = await axios.delete(
          //   (`https://placeswithbear.herokuapp.com/places/delete/${props.placeId}` || "http://localhost:8800/places")
          // );

          const response = await axios.delete(
            (`http://localhost:8800/places/delete/${props.placeId}`)
          );

          console.log(response);
        }
      };
      delPlace();
      // eslint-disable-next-line
      navigate('/places');
    }, [navigate, props.placeId])

    return (
        <div>

        <h1>Deleted Place</h1>
        </div>
    )

  }

export default DeletePlace;



