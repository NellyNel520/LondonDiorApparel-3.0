import './widgetLg.css'
import { useEffect, useState } from 'react'
import { userRequest } from '../../services/requestMethods'
import { format } from 'timeago.js'

export default function WidgetLg() {
	const [orders, setOrders] = useState([])

	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get('/orders/all/?new=true')
				setOrders(res.data)
			} catch {}
		}
		getOrders()
	}, [])

	const Button = ({ type }) => {
		return <button className={'widgetLgButton ' + type}>{type}</button>
	}
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Recent Transactions</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr ">
					<th className="widgetLgTh">Customer</th>
					<th className="widgetLgTh">Date</th>
					<th className="widgetLgTh pr-4">Total</th>
					<th className="widgetLgTh">Status</th>
				</tr>
				{orders.map((order) => (
					<tr className="widgetLgTr" key={order._id}>
						<td className="widgetLgUser">
							<img
								src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
								alt=""
								className="widgetLgImg"
							/>
							<span className="widgetLgName pr-4">{order.email}</span>
						</td>
						<td className="widgetLgDate pr-4">{format(order.createdAt)}</td>
						<td className="widgetLgAmount pr-4 text-center">
							${order.amount.toFixed(2)}
						</td>
						<td className="widgetLgStatus">
							<Button type={order.status} />
						</td>
					</tr>
				))}
			</table>
		</div>
	)
}
