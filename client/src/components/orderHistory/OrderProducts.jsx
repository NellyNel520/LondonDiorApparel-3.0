import React from 'react'
import { useEffect, useState } from 'react'
import Product  from './Product'

const OrderProducts = ({order}) => {

  const products = order.products
  console.log(products)
  return (
    <div>
    {products.map((product) => (

    
				<Product product={product}/>
          ))}
    </div>
  )
}

export default OrderProducts