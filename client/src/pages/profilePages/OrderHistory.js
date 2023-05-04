import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import FullOrderHistory from '../../components/orderHistory/FullOrderHistory'
import '../../styles/userProfile.css'

const OrderHistory = ({user}) => {
	return (
		<div className="text-white  ">
			<div className="flex">
				<Sidebar className="rounded" />

				<main>
				<div className="ml-10 mt-10 text-2xl font-play">Order History</div>

				<div className=" mx-10 mt-6">
						<FullOrderHistory  user={user}/>
					</div>
        </main>
			</div>
		</div>
	)
}

export default OrderHistory
