import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import FullOrderProducts from './FullOrderProducts'
import { userRequest } from '../../services/requestMethods'
import { useEffect, useState } from 'react'

const Product = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 150px;
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

const FullOrderHistory = ({user}) => {
	const id = user._id
	console.log(id)
	const [orders, setOrders] = useState([])


	useEffect(() => {
		const getUsersOrders = async () => {
			try {
				const res = await userRequest.get(`/orders/find/${id}`)
				setOrders(res.data)
			} catch {}
		}
		getUsersOrders()
		console.log(orders)
	}, [])

	return (
		<div>
		{orders.map((order) => (
			<div className='mb-8 py-4'>
					<div className="order border rounded">
						<div className="orderTop py-6 flex border">
							<div className="px-4">
								<span className="font-bold">Order Number</span>
								<div>
									<span className="text-gray-400">#</span> {order._id}
								</div>
							</div>

							<div className="px-4">
								<span className="font-bold">Date Placed</span>

								<div>{order.createdAt}</div>
							</div>

							<div className="px-4">
								<span className="font-bold">Total amount</span>
								<div>${order.amount}</div>
							</div>
						</div>
						<div>
							<FullOrderProducts order={order} />
						</div>
					</div>
				</div>
		
		
			))}
		</div>
	)
}

export default FullOrderHistory
