
import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";



function Signout() {
  const history = useHistory();
  useEffect(() => {
    if (window.confirm('You want to Logout ?')) {
    const token=localStorage.removeItem("token");
    history.push("/home"); 
    console.log("token")
    }
  }, []);

  return (
    <div></div>
  );
}

export default Signout;
