import React from 'react'
import { Link } from 'react-router-dom'
import Priceformat from '../../../Helpers/Priceformat'

function Product(realproduct) {
  const {id, name,image,price,category}= realproduct
  return (
    <>
    <Link to={`/singleproduct/${id}`}>
      <figure>
        <img src={image} alt={name}/>
        <figcaption>{category}</figcaption>
      </figure>
      <div className="carddata">
        <h3>{name}</h3>
        <p>{<Priceformat price={price}/>}</p>
      </div>
    </Link>
    </>
  )
}

export default Product