import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Shop from "./components/allproduct/Shop"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Sdata1 from "./components/allproduct/Sdata"

//some chngae
//import Naviga from "./common/header/Search";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";


function App() {
  

  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata
  const { shopItems1 } = Sdata1

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
   
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, newPrice, title }) =>
          category === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      
      ({ img, title, star, reviews, prevPrice, newPrice}) => (
        
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}

        />
      
      )
      
    );
    }
 

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/allproduct' exact>
          <Sidebar  handleChange={handleChange} />
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} addToCart={addToCart}/>
          <Shop  addToCart={addToCart} shopItems={shopItems}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
