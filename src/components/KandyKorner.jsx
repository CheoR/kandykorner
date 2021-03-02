import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const KandyKorner = ( props ) => (
  <>
  <h1>Kandy Korner</h1>
  <div><p>Hi</p></div>
  <LocationProvider>
    <LocationList />
  </LocationProvider>
  </>
) // KandyKorner
