import React from "react"
import { Route } from "react-router-dom"

import { LocationList } from "./components/locations/LocationList"
import { LocationProvider } from "./components/locations/LocationProvider"
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
  </>
 )
}  // ApplicationView