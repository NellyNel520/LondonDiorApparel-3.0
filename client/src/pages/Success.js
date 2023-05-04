import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { userRequest } from '../services/requestMethods'
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
	console.log(location)
	const data = location.state.stripeData
	const cart = location.state.products
	const currentUser = useSelector((state) => state.user.currentUser)
	const [orderId, setOrderId] = useState(null)
 
	useEffect(() => {
		const createOrder = async () => {
			try {
				const res = await userRequest.post('/orders/new', {
					userId: currentUser._id,
					products: cart.products.map((item) => ({
						productId: item._id,
						quantity: item.quantity,
						title: item.title,
						desc: item.desc,
						img: item.img,
						color: item.color,
						size: item.size,
					})),
					amount: cart.total,
					address: data.billing_details.address,
				})
				console.log(res)
				setOrderId(res.data._id)
			} catch {}
		}
		data && createOrder()
	}, [cart, data, currentUser])

	return (
		<Container>
			<Wrapper>
				<div className="flex justify-center text-black `">
					<div className="text-center">
						<div className="text-[5rem] mb-4 text-blue-500 font-ari">
							Success!{' '}
						</div>
						<div className="text-xl">
							<span className="font-bold">{currentUser.name},</span>
							{orderId
								? ` Order has been created successfully. Your order number is `
								: `Successfull. Your order is being prepared...`}
							<div className="text-blue-500 mt-2 underline">{orderId}</div>
						</div>

						<Link to={'/'}>
							<button className="ml-3 rounded-md border border-transparent bg-blue-500 py-3 px-5 mb-6 text-lg font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-8">
								Go to Homepage
							</button>
						</Link>
					</div>
				</div>
			</Wrapper>
		</Container>
	)
}

export default Success
