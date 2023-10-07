import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../NavBar';


const PlacePhoto = (props) => {

// console.log(props.photoRef)
const [data, setData] = useState([]);
const photoRef = "Aap_uED-A4Fq8DGOMw_H-3PxKtdkeSkdC_9iPsVTY_jJBrZvz6HrkwVOmZyc-gsBBEb3j2p6xzajm9tq9iRpSe-xH1uW6nRe8Jbb76V-Hbp7q_tSxrCDGQWjOJPGTG-UmgDuBZWthy6IXKPpziPkzcY4cxE3pHzsciSuHgCXq8ROdQ6D1UM-"

useEffect(() => {
    const getPlaceDetails = async () => {
      const response = await axios.get(`http://localhost:8800/search/photo/${photoRef}`       
      );
      console.log(response);
      setData(response.data);
  }
    getPlaceDetails();
  }, [])

  return (
    <div>
        <NavBar />
        <h1>Place Photo</h1>

    </div>
  )
}

export default PlacePhoto;