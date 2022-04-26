import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

async function adminloginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
const cardStyles = {
  container: {
    textAlign: "left",
    flexDirection: 'center',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    height: 400,
    width: 400,
    boxShadow: "0 0 3px 10px #cec7c759",
    padding: 20,
   
    borderRadius: 20,
  },

};

export default function AdminLogin({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await adminloginUser({
      username,
      password
    });
    setToken(token);
  }
        return (
          
            <form style={cardStyles.container} className="flex justify-content max-w-xs mx-auto mt-5" onSubmit={handleSubmit}>
                
                 <div className="login-wrapper">
                   <div class="text-center">
                <h4 className="">ERS Admin Login</h4>
                <br></br>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={e => setUserName(e.target.value)}className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}  className="form-control" placeholder="Enter password" />
                </div>
<br></br>

<Link to="/AdminPage" type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Link>

                </div>
            </form>
        );
    }


    AdminLogin.propTypes = {
        setToken: PropTypes.func.isRequired

};