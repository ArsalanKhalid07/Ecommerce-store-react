import React from "react"
import HomePage from "./Pages/HomePage/HomePage-Component";
import {Route , Switch }  from "react-router-dom"
import ShopPage from "./Pages/shop/Shop-Component";
import "./App.css";
import Header from "../src/Components/Header/Header-Component";


function App() {
  return (
    <div >
      <Header />
      <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route exact path="/shop" component={ShopPage}  />
      </Switch>
    </div>
  );
}

export default App;
