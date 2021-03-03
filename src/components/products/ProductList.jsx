import React, { useContext, useEffect } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"


export const ProductList = () => {

 const { products, getProducts } = useContext(ProductContext)

 useEffect(() => {
  getProducts() 
 }, []) // useEffect

 return (
  <>
   <h2>Products</h2>
   <article className="products">
    {
     products.map(product => <Product key={ product.id } product={ product } />)
    }
   </article>
  </>
 ) // return
} // ProductList
