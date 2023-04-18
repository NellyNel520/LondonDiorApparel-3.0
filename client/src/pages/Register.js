import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { registerUser } from '../redux/apiCalls'
import { useDispatch } from 'react-redux'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 150, 255, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://i.postimg.cc/Hkh6PLXN/LDA-Logo-Blue2nooffset.png') center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.6);
	border-radius: 20px;
	${mobile({ width: '75%' })}
`

const Title = styled.h1`
	font-size: 3rem;
	font-weight: 300;
`

const Agreement = styled.span`
	font-size: 0.9rem;
	margin: 30px 10px 20px 10px;

	text-align: center;
`

const Register = () => {
	let navigate = useNavigate()
	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [confirmPassword, setConfirmPassword] = useState('')
	// const dispatch = useDispatch()

	const initialState = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	}
	const [formValues, setFormValues] = useState(initialState)

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await registerUser({
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
		})
		setFormValues(initialState)
		navigate('/login')
	}

	return (
		<Container>
			<Wrapper>
				<div className="reg-cont">
					<div className="wrapper-reg">
						<div className="signin col">
							<div className="card-overlay centered">
								<div className="text-center text-5xl font-play  ">
									Create Account{' '}
								</div>
								<form className="flex-wrap font-play" onSubmit={handleSubmit}>
									<div className="input-wrapper text-center">
										<label htmlFor="name" className="pr-2 text-xl">
											Name:
										</label>
										<input
										onChange={handleChange}
											className=" mt-[20px] mr-[10px] p-[10px] rounded "
											name="name"
											type="text"
											placeholder="John Smith"
											value={formValues.name}
											required
										/>
									</div>
									<div className="input-wrapper text-center">
										<label htmlFor="email" className="pr-2 text-xl">
											Email:
										</label>
										<input
										onChange={handleChange}
											className=" mt-[20px] mr-[10px] p-[10px] rounded"
											name="email"
											type="email"
											placeholder="example@example.com"
											value={formValues.email}
											required
										/>
									</div>

									<div className="input-wrapper text-center">
										<label htmlFor="password" className="pr-2 text-xl">
											Password:
										</label>
										<input
								onChange={handleChange}
											className="mt-[20px] mr-[10px] p-[10px] rounded"
											type="password"
											name="password"
											value={formValues.password}
											required
										/>
									</div>
									<div className="input-wrapper text-center">
										<label htmlFor="confirmPassword" className="pr-2 text-xl">
											Confirm Password:
										</label>
										<input
										onChange={handleChange}
											className="mt-[20px] mr-[10px] p-[10px] rounded"
											type="password"
											name="confirmPassword"
											value={formValues.confirmPassword}
											required
										/>
									</div>
									<div className="text-center pt-4 font-play">
										<div className="">
											<span className="font-bold text-lg underline text-blue-800">
												Terms & Conditions:
											</span>{' '}
											By registering for an online account, you agree to our
											terms and conditions, privacy policy, and any other
											relevant policies.
										</div>
									</div>
									<div className="flex justify-center pt-6">
										<button
											disabled={
												!formValues.email || (!formValues.password &&
											formValues.confirmPassword === formValues.password)
											}
											className="ml-3 rounded-md border border-transparent bg-blue-500 py-3 px-5 text-lg font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
										>
											Register
										</button>
									</div>
								</form>
								<div className="flex justify-center text-center ">
									<div className="mt-6">
										<h3 className="font-play text-lg underline mb-2">
											Already a User?
										</h3>
										<Link to="/login">
											<button className="ml-3 rounded-md border border-transparent bg-blue-500 py-3 px-5 text-md font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
												Sign In
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</Container>
	)
}

export default Register
