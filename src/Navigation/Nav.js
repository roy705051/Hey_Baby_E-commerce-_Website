
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    
    <nav>
      <div className="nav-container">
        <input
       // style={{width:"28px"}}
          className="input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      <div className="profile-container">
        <a href="#">
         
        </a>
        <a href="">
          
        </a>
        <a href="">
         
        </a>
      </div>
    </nav>
  );
};

export default Nav;
