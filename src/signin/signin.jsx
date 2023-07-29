import React from "react";
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./signin.css";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();
  const history = useHistory();
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
  
    try 
    {
      const response = await fetch("http://localhost:8080/users");
      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }

      const data = await response.json();
      //const users = data.users;
      //console.log(users);
      const user = data.find((u) => u.email === email && u.password === password);
      console.log(user);
      if (!user) 
      {
        setError('Invalid email or password');
      } 
      else 
      {
        console.log('Sign-in successful');
        localStorage.setItem("token", JSON.stringify(Date.now()));
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        //Link("/");
        history.push("/home");
      }
    } 
    catch(err)
    {
      setError('');
    }
  };

  return (
    <div className="signinmain" >
      <form onSubmit={handleSignIn} className="grandpar" id="formboxLogin">
        <h2 className="grand">SIGN IN</h2>
        <div className="inputbox">
        <span className="icon"><ion-icon></ion-icon></span>
         
          <input
          placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
        <div className="inputbox">
        <span className="icon"><ion-icon></ion-icon></span>
          <input
           placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remv">
        <div className="rememberMe">
        Remember me <input type="checkbox" />
        </div>
        </div>
        <br /><br />
        <div className="btnt">
        <button type="submit" className="btn btn-light btttn" id="signin">Sign In</button>
        {error && <p>{error}</p>}
        </div>
        <br/>
        <div className="login_register">
          <p>don't have account<Link to={"/signup"}><h4>signup</h4></Link></p>         
        </div>
      </form>
    </div>
  );
};

export default Signin;
