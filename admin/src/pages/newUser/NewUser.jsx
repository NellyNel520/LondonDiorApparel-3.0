import './newUser.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar' 
import '../../styles/App.css'
import { registerUser } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewUser = ({ handleLogOut }) => {
	let navigate = useNavigate()
	const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	console.log(inputs)

	// axios call successful but not navigating to users page 
	const handleClick = (e) => {
		e.preventDefault()
		const user = {
			...inputs
		}
		console.log(user)
		registerUser(dispatch, user);
		navigate("/users")
		

	}
	return (
		<div className="newUser">
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />
				<div className='w-[80vw]'>
					<h1 className="newUserTitle addProductTitle text-[4rem] text-center mb-6 font-play text-blue-400">
						New User
					</h1> 

					<div className="newProductBottom bg-gray-300 rounded w-[45%] mx-[28%] font-play text-xl">
						<form className="productForm">
							<div className="productFormLeft">
								<label>Full Name</label>
								<input
									name="name"
									onChange={handleChange}
									type="text"
									placeholder="John Doe"
								/>

								<label>Email</label>
								<input
									name="email"
									onChange={handleChange}
									type="email"
									placeholder="jDoe@email.com"
								/>
								<label>Password</label>
								<input
									placeholder="Password"
									// name='password'

									type="text"
								/>
								<label>Confirm Password</label>
								<input
									name="password"
									placeholder="Confirm Password"
									onChange={handleChange}
									type="text"
								/>
								<label>Admin</label>
								<select name="isAdmin" onChange={handleChange}>
									<option value="false">No</option>
									<option value="true">Yes</option>
								</select>

								<button 
								onClick={handleClick}
								className="border p-3 bg-blue-400 rounded text-xl hover:bg-green-400 text-white mt-3 ">Create</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NewUser
