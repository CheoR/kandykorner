import React from "react"
import { Route } from "react-router-dom"

import { LocationList } from "./components/locations/LocationList"
import { LocationProvider } from "./components/locations/LocationProvider"
import { ProductList } from "./components/products/ProductList"
import { ProductProvider } from "./components/products/ProductProvider"
import { Home } from "./Home"


export const ApplicationViews = () => {
 return (
  <>
   <Route exact path="/">
    <Home />
   </Route>

   <LocationProvider>
    <Route exact path="/locations">
     <LocationList />
    </Route>
    </LocationProvider>

  <ProductProvider>
   <Route exact path="/products">
    <ProductList />
   </Route>
  </ProductProvider>
  </>
 )
}  // ApplicationView