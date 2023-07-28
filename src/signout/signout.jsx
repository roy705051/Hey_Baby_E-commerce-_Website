// import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import "./signout.css";

// function Signout() {
//     //const navigate = useNavigate();
//     const history = useHistory();
//     useEffect(() => {   
//         localStorage.removeItem("token", JSON.stringify(Date.now()));
//         //navigate("/"); 
//         history.push("/");
//       }, []);
// }

// export default Signout;
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Signout() {
  const history = useHistory();

  useEffect(() => {
    
    localStorage.removeItem("token");

    
    history.push("/");
  }, []);

  return (
    <div></div>
  );
}

export default Signout;
