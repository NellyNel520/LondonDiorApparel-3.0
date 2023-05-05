import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import '../../styles/editUser.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { userRequest } from '../../services/requestMethods'
import { useDispatch } from 'react-redux'



const EditUser = ({user}) => {
  const id = user._id
  const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

  const handleUpdate = async () => {
    const user = {...inputs}
		try {
      await userRequest.put(`users/${id}`, user)
      navigate('/profile')
      // navigate(0)
    } catch {}
	}
	


  return (
    <div className="text-white  h-[100rem]">
    <div className='flex'>
      <Sidebar className="rounded" />

      <div className=' h-[auto] mx-[25%] mt-6'>
					<h1 className="newUserTitle addProductTitle text-3xl text-center mb-6 font-play">
						Edit User Account
					</h1>

					<div className="productBottom rounded ">
						<form className="productForm text-black">
							<div className="productFormLeft">
								<label>Full Name</label>
								<input
									name="name"
									onChange={handleChange}
									type="text"
									placeholder={user.name}
								/>

								<label>Email</label>
								<input
									name="email"
									onChange={handleChange}
									type="email"
									placeholder={user.email}
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
                <label>Phone Number (optional)</label>
								<input
									name="phoneNumber"
									placeholder={user.phoneNumber}
									onChange={handleChange}
									type="text"
								/>
                <label>Address (optional)</label>
								<input
									name="address"
									placeholder={user.address}
									onChange={handleChange}
									type="text"
								/>
								

								<button 
								onClick={handleUpdate}
								className="productButton mt-3 hover:bg-green-500 ">Update</button>
							</div>
						</form>
					</div>
				</div>

    </div>
    </div>
  )
}

export default EditUser