import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { Link } from 'react-router-dom' 
import '../orderList/orderList.css'


const ProductCont = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 50vw;
  width: 70vw;
  

	${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 10rem;
	height: 17rem;
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`

const OrderProducts = ({order}) => {
  const products = order.products
  

  return (
    <div>
     
   {products.map((product) => (

      
   
<div>
    <div className="flex ">
      <ProductCont className="mt-8 mb-8 px-[1rem]">
        <ProductDetail>
          <Image
            className="ml-3"
            // src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
            src={product.img}
          
          />
          <Details className="text-lg">
            <ProductName>
              <b className="text-blue-400 text-2xl">
              {/* Product Name */}
              {product.title}
            
              </b>
            
            </ProductName>
            <div className="w-[100%] flex-wrap mr-3rem]">
              {/* <b className="text-blue-400">ID:</b> */}
              {/* {product.desc} */}
              {/* Are you a minimalist looking for a compact carry option? The
              Micro Backpack is the perfect size for your essential everyday
              carry items. Wear it like a backpack or carry it like a
              satchel for all-day use. */}
              
            </div>
            <div className="flex">
              <b className="text-blue-400 pr-3">Color:</b>
              <ProductColor
                className="mt-2"
                color={product.color}
              />
            </div>
            <ProductSize>
              <b className="text-blue-400">Size: </b>
              {product.size}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <ProductAmount>
            <span>qty: </span>
            {product.quantity}
            </ProductAmount>
          </ProductAmountContainer>

          <ProductPrice>
            
            {/* ${product.price * product.quantity} */}
          </ProductPrice>
          <br />
        </PriceDetail>
      </ProductCont>
    </div>
    <div className="ml-[75%] mb-4">
      <Link to={`/product/${product.productId}`}><button className="mr-4 hover:text-white border bg-blue-400 rounded p-2">View Product</button></Link>
      
  
    </div>
    <Hr />
  </div>
      
))}
    </div>
  )
}

export default OrderProducts