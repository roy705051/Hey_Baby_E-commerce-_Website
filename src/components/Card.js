import React, { useState } from "react"
import Products from "../Products/Products";
import { colors } from "@mui/material";
import "./stylee.css"
const Card = ({ img, title, newPrice,reviews}) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  
  return (
    <>
    <div className='box'>
    <div className='product mtop'>
      <section className="card">
      <div className='img'>
      <span className='discount'>{reviews}% Off</span>
        <img src={img} alt={title} className="card-img" />
        <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
          </div>
          </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className='product-details'>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                </div>
          <section className="card-price">
            <div className="price">
              {"$"+newPrice}
            </div>
            <button class="faa">
            <i className='fa fa-plus'></i>
            </button>
          </section>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default Card;
