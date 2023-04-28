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

export default function User({handleLogOut}) {
	const location = useLocation()
	const userId = location.pathname.split('/')[2]
	const dispatch = useDispatch()


	const user = useSelector((state) =>
		state.customer.users.find((user) => user._id === userId)
	)







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
									src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
						<div className="userUpdate">
							<span className="userUpdateTitle">Edit</span>
							<form className="userUpdateForm">
								<div className="userUpdateLeft">
									<div className="userUpdateItem">
										<label>Username</label>
										<input
											type="text"
											placeholder="annabeck99"
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Full Name</label>
										<input
											type="text"
											placeholder="Anna Becker"
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Email</label>
										<input
											type="text"
											placeholder="annabeck99@gmail.com"
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Phone</label>
										<input
											type="text"
											placeholder="+1 123 456 67"
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Address</label>
										<input
											type="text"
											placeholder="New York | USA"
											className="userUpdateInput"
										/>
									</div>
								</div>
								<div className="userUpdateRight">
									<div className="userUpdateUpload">
										<img
											className="userUpdateImg"
											src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
											alt=""
										/>
										<label htmlFor="file">
											<PublishIcon className="userUpdateIcon" />
										</label>
										<input type="file" id="file" style={{ display: 'none' }} />
									</div>
									<button className="userUpdateButton">Update</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
