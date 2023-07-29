import React, { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span  className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/home'>home</Link>
              </li>
              <li>
                <Link to='/allproduct'>All product</Link>
              </li>
              <li>
                <Link to='/home'>track my order</Link>
              </li>
              <li>
                <a href="./contact.html">contact</a>
              </li>
              {/* <li>
                <Link to='/signin'>Sign in</Link>
              </li>
              <li>
                <Link to='/signup'>sign up</Link>
              </li> */}
              {!token && (
                <>
                  <li>
                    <Link to='/signin'>Sign in</Link>
                  </li>
                  <li>
                    <Link to='/signup'>sign up</Link>
                  </li>
                </>
              )}
              {/* Render "Sign out" option if token is found */}
              {token && (
                <li>
                  <Link to='/signout'>sign out</Link>
                </li>
              )}
              
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar


