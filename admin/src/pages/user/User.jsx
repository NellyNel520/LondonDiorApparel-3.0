import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import PublishIcon from '@mui/icons-material/Publish'

import { Link } from 'react-router-dom'
import './user.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import { updateUser } from '../../redux/apiCalls'
import { useNavigate } from 'react-router'


export default function User({handleLogOut}) {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()
	let navigate = useNavigate()

	const user = useSelector((state) =>
		state.customer.users.find((user) => user._id === id)
	)

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		const customer = {
		...inputs,
		}
		updateUser(id, customer, dispatch)
		navigate('/users')
		navigate(0)
	}







	return (
		<div>
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />

				<div className="user">
					<div className="userTitleContainer">
						<h1 className="userTitle">Edit User</h1>
						<Link to="/newUser">
							<button className="userAddButton">Create</button>
						</Link>
					</div>
					<div className="userContainer">
						<div className="userShow">
							<div className="userShowTop">
								<img
									src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
									alt=""
									className="userShowImg"
								/>
								<div className="userShowTopTitle">
									<span className="userShowUsername">{user.name}</span>
									<span className="userShowUserTitle">Loyal Customer</span>
								</div>
							</div>
							<div className="userShowBottom">
								<span className="userShowTitle">Account Details</span>
								<div className="userShowInfo">
									<PermIdentityIcon className="userShowIcon" />
									<span className="userShowInfoTitle">{user._id}</span>
								</div>
								<div className="userShowInfo">
									<CalendarTodayIcon className="userShowIcon" />
									<span className="userShowInfoTitle">
									{user.createdAt}
									{/* 10.12.1999 */}
									</span>
								</div>
								<span className="userShowTitle">Contact Details</span>
								<div className="userShowInfo">
									<MailOutlineIcon className="userShowIcon" />
									<span className="userShowInfoTitle">
										{user.email}
									</span>
								</div>
								<div className="userShowInfo">
									<PhoneAndroidIcon className="userShowIcon" />
									<span className="userShowInfoTitle">+1 123 456 67</span>
								</div>
								<div className="userShowInfo">
									<LocationSearchingIcon className="userShowIcon" />
									<span className="userShowInfoTitle">New York | USA</span>
								</div>
							</div>
						</div> 

						{/* edit/ UPDATE user */}
						<div className="userUpdate">
							<span className="userUpdateTitle">Edit</span>
							<form className="userUpdateForm">
							<div className="productFormLeft">
						<label>Full Name</label>
						<input
							name="name"
							onChange={handleChange}
							type="text"
							placeholder={user.name}
						/>

						<label>Email </label>
						<input
							name="email"
							onChange={handleChange}
							type="text"
							placeholder={user.email}
						/>
						<label>Phone</label>
						<input
							placeholder="+ 1 123 456 7843"
							// onChange={handleCat}
							type="text"
						/>
						<label>Address</label>
						<input
							name="price"
							placeholder={user.address}
							// onChange={handleChange}
							type="number"
						/>
					

						<button onClick={handleUpdate}
						 className="productButton mt-3 ">
							Update
						</button>
					</div>
							
								
								
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
