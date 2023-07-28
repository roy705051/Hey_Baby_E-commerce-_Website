import React from "react"
import "./style.css"
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import AlertVariousStates from "./checkoutToast";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const token = localStorage.getItem("token");
  const [showAlert, setShowAlert] = useState(false); // State variable to track alert visibility

  const history = useHistory();
  const handleCheckoutClick = async () => {
    try {
      // Create a new cartItem array from the cartData
      const checkoutData= CartItem.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty
      }));
      console.log(checkoutData);

      if (token) {
        // Redirect to the checkout page if a token is found
        
        const response = await fetch("http://localhost:3001/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(checkoutData),
        });

        if (response.ok) {
          console.log("Checkout data posted successfully!");
        } else {
          console.error("Error posting checkout data:", response.statusText);
        }
        history.push("/checkout");
      }else{
        alert("you will be redirecting to sign in page");
        setTimeout(() => {
          history.push("/signin");
        }, 1000); // 1000 milliseconds (1 seconds)

      }
      
    } catch (error) {
      console.error('Error posting checkout data:', error);
    }
    // console.log('going to checkout page')
    // // Redirect to the checkout page (if needed)
    // history.push('/checkout');
  };

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex parent-container'>
          

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list child1 d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details det'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                   
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total child2'>
            <h2>Cart Summary</h2>
            <div className=' d_flex totalprice child3'>
              <h3>Total Price </h3>
              <h3>${totalPrice}.00</h3>
              
              {totalPrice > 0.00 && CartItem.length > 0 ? (
                <button type="button" className="btn btn-outline-warning checkout-button" onClick={handleCheckoutClick}>
                  Check-out
                </button>
              ) : (
                <p>No items in cart</p>
              )}

            </div>
            
          </div>
        </div>
      </section>
    </>
  )
};


export default Cart
