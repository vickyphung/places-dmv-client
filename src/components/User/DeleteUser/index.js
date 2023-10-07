import React, { useEffect } from 'react';
import axios from 'axios';

const DeleteUser = (props) => {

    console.log("Made it to the Delete User Component")

    useEffect(()=>{
        const delUser = async () => {
                const response = await axios.delete(`http://localhost:8800/user/delete`
                , {
                    headers: {
                      "JWT-Token": localStorage.jwtToken
                    }
                  }
                )
                console.log(response)
       }
        delUser();
      }, )
  
    return (
        <div>
        <h1>Delete User</h1>
        <p>"data.message"</p>
        </div>
    )
}
export default DeleteUser;



