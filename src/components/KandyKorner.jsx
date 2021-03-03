import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "../ApplicationViews"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { NavBar } from "./nav/NavBar"

export const KandyKorner = () => (
  <>
  <Route render={() => {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }} />
  </>
) // KandyKorner
