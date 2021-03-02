import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { NavBar } from "./nav/NavBar"

export const KandyKorner = ( props ) => (
  <>
  <Route  render={() => {
    return (
      <>
        <NavBar />
      </>
    )
  }} />
  {/* <h1>Kandy Korner</h1>
  <div><p>Hi</p></div>
  <LocationProvider>
    <LocationList />
  </LocationProvider> */}
  </>
) // KandyKorner
