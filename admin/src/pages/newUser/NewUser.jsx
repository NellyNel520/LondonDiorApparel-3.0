import './newUser.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { registerUser } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const NewUser = ({ handleLogOut }) => {
	const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	console.log(inputs)

	const handleClick = (e) => {
		e.preventDefault()
		const user = {
			...inputs
		}
		console.log(user)
		registerUser(user, dispatch)
	}
	return (
		<div className="newUser">
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />
				<div>
					<h1 className="newUserTitle addProductTitle text-3xl text-center mb-6 font-play">
						New User
					</h1>

					<div className="productBottom">
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
								className="productButton mt-3 ">Create</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NewUser
