import React from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  const game={
    width: "40%",
    height: "40px",
   }
   
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width' style={game}>
            <img src="./images/logo.webp" alt='' style={game}/>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
