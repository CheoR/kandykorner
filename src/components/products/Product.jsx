import React from "react"


export const Product = ({ product }) => (
 <>
  <h2 className="product">{ product.name }</h2>
  <div>
   <p>Price: { product.price }</p>
   <p>Description: { product.description }</p>
  </div>
 </>
)
