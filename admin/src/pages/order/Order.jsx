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
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
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

        {/* update order */}
					<div className="border m-8 w-[30%] p-4 ">
						<div className="font-play text-xl text-center">
							Update Order Status
						</div>
						<form className="updateForm py-4">
							<label>Order Status:</label>
							<select name="status" onChange={handleChange}>
                <option >Select</option>
								<option value="pending">pending</option>
								<option value="approved">approved</option>
								<option value="declined">declined</option>
							</select>
						</form>
						<button onClick={handleUpdate} className="border bg-blue-400 py-1 px-2 rounded hover:text-white">
							Update
						</button>
					</div>

					<div>
						<div className="order border rounded w-[80%] m-8">
							<div className="orderTop py-6 flex border text-xl">
								<div className="px-4">
									<span className="font-bold">Order Number</span>
									<div>
										<span className="text-gray-400">#</span> {order._id}
									</div>
								</div>

								<div className="px-4">
									<span className="font-bold">Date Placed</span>

									<div>{moment(order.createdAt).format('MMM DD, YYYY')}</div>
								</div>

								<div className="px-4">
									<span className="font-bold">Total</span>
									<div>${order.amount.toFixed(2)}</div>
								</div>

								<div className="pl-[8rem]">
									<span className="font-bold">Status</span>
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
