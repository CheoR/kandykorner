import React from "react"
import { Link } from "react-router-dom"


export const NavBar = ( props ) => (
 <ul className="navbar">
  <Link className="navbar__link active" to="/">Kandy Korner</Link>
  <Link className="navbar__link" to="/locations">Locations</Link>
  <Link className="navbar__link" to="/customers">Customers</Link>
  <Link className="navbar__link" to="/employees">Employees</Link>
  <Link className="navbar__link" to="/products">Products</Link>
  <Link className="navbar__link" to="/prodotypes">ProductTypes</Link>
 </ul>
) // NavBar
