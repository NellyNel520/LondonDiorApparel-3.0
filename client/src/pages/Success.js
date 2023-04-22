import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { userRequest } from '../services/requestMethods'
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";
// import client from /seriveces/api

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 150, 255, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://i.postimg.cc/Hkh6PLXN/LDA-Logo-Blue2nooffset.png') center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 20px;
	${'' /* ${mobile({ width: '75%' })} */}
`

const Success = () => {
	const location = useLocation()
	// should get state with stripe data and products/cart from cart page (make payment)
	console.log(location)
	const data = location.state.stripeData
	const cart = location.state.products
	const currentUser = useSelector((state) => state.user.currentUser)
	const [orderId, setOrderId] = useState(null)
	const dispatch = useDispatch();

	useEffect(() => {
		const createOrder = async () => {
			try {
				const res = await userRequest.post('orders/new', {
					userId: currentUser._id,
					products: cart.products.map((item) => ({
						productId: item._id,
						quantity: item._quantity,
					})),
					amount: cart.total,
					address: data.billing_details.address,
				})
				console.log(res)
				setOrderId(res.data._id)
			} catch {}
		}
		data && createOrder()
		dispatch(clearCart())
		
	}, [cart, data, currentUser])

	let orderConfirmed
	if(orderId) {
		orderConfirmed = (	<Wrapper>
			<div className="flex justify-center text-black`">
				<div className="text-center">
					<div className="text-4xl mb-4 ">Success! </div>
					{/* <div> Your order is being processed. Thank you for shopping with London Dior Apparel */}
					{/* </div> */}
					<div className="text-lg font-play py-3">
						Your order has been created successfully and is being processed.
						Your order number is{' '}
						<span className="text-blue-600 text-[1.5rem]">{orderId}</span>
						<br />
						<div>
							Thank you {currentUser.name} for shopping with <br />
							<span className='font-ari text-3xl'>London Dior Apparel</span>
						</div>
					</div>
					<Link to={'/'}>
						<button className="ml-3 rounded-md border border-transparent bg-blue-500 py-3 px-5 mb-6 text-lg font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-8">
							Go to Homepage
						</button>
					</Link>
				</div>
			</div>
		</Wrapper>)
	}
	
	const error = (
		<Wrapper>
			<div>something went wrong</div>
			<button className='border rounded p-2'>Continue Shopping</button>
		</Wrapper>
	)

	
	


	return (
		<Container> {orderId ? orderConfirmed : error}
		</Container>
	)
}

export default Success
