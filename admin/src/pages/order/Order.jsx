import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import moment from 'moment'
import OrderProducts from './OrderProducts'
import './order.css'
import { updateOrder } from '../../redux/apiCalls'
import { useNavigate } from 'react-router'
import EditIcon from '@mui/icons-material/Edit'

export default function Order() {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [status, setStatus] = useState('')
	const dispatch = useDispatch()
	let navigate = useNavigate()

	const order = useSelector((state) =>
		state.order.orders.find((order) => order._id === id)
	)

	const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}

	const handleChange = (e) => {
		setStatus((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		const order = {
			...status,
		}
		updateOrder(id, order, dispatch)
		navigate('/orders')
		navigate(0)
	}

	return (
		<div>
			<Topbar />
			<div className="flex">
				<Sidebar />

				<div className="main">
					<div className="flex">
						{/* update order */}
						<div className="border bg-gray-300 rounded m-8 w-[30%] p-4 font-play ">
							<div className="font-play text-xl text-center">Order Status</div>
							<form className="updateForm py-4 ">
								<label className="text-lg">
									<EditIcon className="text-blue-400" />
									 Status:
								</label>
								<select name="status" onChange={handleChange}>
									<option>Select</option>
									<option value="pending">pending</option>
									<option value="approved">approved</option>
									<option value="declined">declined</option>
								</select>
							</form>
							<button
								onClick={handleUpdate}
								className="border bg-blue-400 py-2 px-3 rounded hover:text-white hover:bg-green-400 "
							>
								Update
							</button>
							<div></div>
						</div>

						<div className='border bg-gray-300 rounded m-8 w-[30%] p-4 font-play'>
							<div className='text-center text-xl'>Shipping Info</div>
							<div className='orderShowInfo'>
								Address: <span className='orderShowInfoTitle'> {order.address.line1}</span>
							</div>
							<div className='mt-[-1rem]'>
								City: <span className='orderShowInfoTitle'> {order.address.city}</span>
							</div>
							<div className='mt-[]'>
								State: <span className='orderShowInfoTitle'> {order.address.state}</span>
							</div>
							<div className='mt-[]'>
								ZipCode: <span className='orderShowInfoTitle'> {order.address.postal_code}</span>
							</div>
							<div className='mt-[]'>
								Country: <span className='orderShowInfoTitle'> {order.address.country}</span>
							</div>

						</div>
					</div>

					<div>
						<div className="order border rounded w-[80%] m-8">
							<div className="orderTop bg-gray-300 rounded py-6 flex border text-xl">
								<div className="px-4">
									<span className="font-bold text-blue-500">Order Number</span>
									<div>
										<span className="text-blue-500 text-2xl">#</span> {order._id}
									</div>
								</div>

								<div className="px-6">
									<span className="font-bold text-blue-500">Date Placed</span>

									<div>{moment(order.createdAt).format('MMM DD, YYYY')}</div>
								</div>

								<div className="px-4">
									<span className="font-bold text-blue-500">Total</span>
									<div>${order.amount.toFixed(2)}</div>
								</div>

								<div className="pl-[8rem]">
									<span className="font-bold  text-blue-500">Status:</span>
									<div>
										<Button type={order.status} />
									</div>
								</div>
							</div>
							<div>
								<OrderProducts order={order} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
