import React from "react"
import ShopCart from "./ShopCart"
import "./ptylee.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>

          <div className='contentWidt'>
            <div className='product-content  grid1'>
            <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
