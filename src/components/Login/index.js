import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css'

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8800/user/", formData);
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  const [loginFormData, setLoginFormData] = useState({
    loginName: "",
    loginPassword: "",
  });

  const handleChangeLogin = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8800/user/login", {
      // const response = await axios.post("http://localhost:8800/user/login", {
      name: loginFormData.loginName,
      password: loginFormData.loginPassword,
    });
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
    navigate("/user");
  };

  return (
    <div className="log-in-create">
      <h2>Log In</h2>
      <div className="log-in">
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="loginName">Name:</label>
        <input name="loginName" id="loginName" onChange={handleChangeLogin} /> 
        <br />
        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          name="loginPassword"
          id="loginpassword"
          onChange={handleChangeLogin}
        />
         <br />
        <input type="submit" />
      </form>
      </div>

      <h2>Create an Account</h2>
      <div className="create-account">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" onChange={handleChange} />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
        </div>
        <hr />
    </div>
  );
};

export default Login;
