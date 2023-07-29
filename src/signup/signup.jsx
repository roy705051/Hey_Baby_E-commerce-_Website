import React from "react";
import { useState } from 'react';
//import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  //const navigate = useNavigate();
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch("http://localhost:8080/users");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      //console.log(data);
      const userExists = data.some((user) => user.email === email);
      //console.log(userExists);
      if (userExists) {
        throw new Error('Email already exists');
      }

      const newUser = { name,email, password, id: data.length + 1 };
      data.push(newUser);

      const saveResponse = await fetch("http://localhost:8080/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!saveResponse.ok) {
        throw new Error('Failed to save data');
      }
      console.log('User signup successfully:', newUser);
      //localStorage.setItem("token", JSON.stringify(Date.now()));
      //this.end("/signin");
      //Link("/signin");
      history.push('/signin');
      console.log('User signup successfully:', newUser);
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('');
    }
  };

  return (
    <div className="signupmain" >
      <form onSubmit={handleSignUp} className="grandpar" id="formboxLogin">
        <h2 className="grand">SIGN UP</h2>
        <div className="inputbox">
        <span className="icon"><ion-icon></ion-icon></span>
         
          <input
          placeholder=" Enter your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="inputbox">
        <span className="icon"><ion-icon></ion-icon></span>
        
          <input
          placeholder=" Enter your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputbox">
        <span className="icon"><ion-icon></ion-icon></span>
          <input
            type="password"
            value={password}
            placeholder=" Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btnt">
        <button type="submit" class="btn btn-light btttn">Sign Up</button>
        {error && <p>{error}</p>}
        </div><br/>
        <div className="login_register">
          <p>
            already account
          <Link to={"/signin"}>    
          <h3>Signin</h3>
          </Link>  
          </p>        
        </div>
      </form>
    </div>
  );
};

export default Signup;
