import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateUser = (props) => {

    const [data, setData] = useState([]);
const navigate = useNavigate();
    const [userFormData, setUserFormData] = useState({
        name: "",
        email: ""

      });

    const handleChange = (event) => {
        setUserFormData({ ...userFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.put(`http://localhost:8800/user/update/${props.userId}`, {
        name: userFormData.userName,
        email: userFormData.userEmail
    });
    console.log(response);
    setData(response.data)
    navigate('/user')
    }

    return(
        <div>
            <div>        
                <h1>Update User</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">Name:</label>
                    <input name="userName" id="userName"  onChange={handleChange} />
                    <label htmlFor="userEmail">Email:</label>
                    <input name="userEmail" id="userEmail"  onChange={handleChange} />
                    <input type="submit" />
                </form>
                <p>{data.message}</p>
            </div>
        </div>
    )
}

export default UpdateUser;