import React from 'react'
import { userRequest } from '../../services/requestMethods'
import { useEffect, useState } from 'react'
import OrderProducts from './OrderProducts'



const LatestOrder = ({ user }) => {
	// const [orders, setOrders] = useState([])
	const id = user._id
	console.log(id)
	const [orders, setOrders] = useState([])
	

	useEffect(() => {
		const getUsersOrders = async () => {
			try {
				const res = await userRequest.get(`/orders/find/${id}/?new=true`)
				setOrders(res.data)
			} catch {}
		}
		getUsersOrders()
		console.log(orders)
	}, [])
 
	return (
		<div>
			{orders.map((order) => (
				<div className="order border">
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

				<OrderProducts order={order}/>
				</div>
			))}
		</div>
	)
}

export default LatestOrder
