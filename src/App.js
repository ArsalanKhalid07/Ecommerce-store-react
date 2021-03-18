import React from "react"
import HomePage from "./Pages/HomePage/HomePage-Component";
import {Route , Switch }  from "react-router-dom"
import ShopPage from "./Pages/shop/Shop-Component";
import "./App.css";



function App() {
  return (
    <div >
      <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route exact path="/shop" component={ShopPage}  />
      </Switch>
    </div>
  );
}

export default App;
