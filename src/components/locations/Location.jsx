import React from "react"

export const Location = ({ location }) => (
 <section className="location">
  <h2 className="location__name">{ location.name }</h2>
  <div className="location__details">
   <p>Address: { location.address }</p>
   <p>SqFt: { location.footage }</p>
   <p>Handicap Accessible: { location.handicapAccessible ? "Yes" : "No" } </p> 
  </div>

 </section>
)