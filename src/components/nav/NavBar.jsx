import React from "react"

export const NavBar = ( props ) => (
 <ul className="navbar">
  <li className="navbar__link active" to="/">Kandy Korner</li>
  <li className="navbar__link" to="/locations">Locations</li>
  <li className="navbar__link" to="/customers">Customers</li>
  <li className="navbar__link" to="/employees">Employees</li>
  <li className="navbar__link" to="/products">Products</li>
  <li className="navbar__link" to="/prodotypes">ProductTypes</li>
 </ul>
) // NavBar