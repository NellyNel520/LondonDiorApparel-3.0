import './newUser.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import styled from 'styled-components'
import { mobile } from '../../responsive'

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
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 20px;
	${mobile({ width: '75%' })}
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #0ca2e2;
	color: white;
	cursor: pointer;
`

const Links = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
	text-align: center;
`

export default function NewUser({handleLogOut}) {
	return (
		<div className="newUser">
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />
				<Container>
					<Wrapper>
						<h1 className="newUserTitle addProductTitle text-3xl text-center mb-6 font-play">New User</h1>
						<form className="newUserForm pl-[10%] text-center">
							<div className="newUserItem">
								<label>Username</label>
								<input type="text" placeholder="john" />
							</div>
							<div className="newUserItem">
								<label>Full Name</label>
								<input type="text" placeholder="John Smith" />
							</div>
							<div className="newUserItem">
								<label>Email</label>
								<input type="email" placeholder="john@gmail.com" />
							</div>
							<div className="newUserItem">
								<label>Password</label>
								<input type="password" placeholder="password" />
							</div>
							<div className="newUserItem">
								<label>Phone</label>
								<input type="text" placeholder="+1 123 456 78" />
							</div>
							<div className="newUserItem">
								<label>Address</label>
								<input type="text" placeholder="New York | USA" />
							</div>
							<div className="newUserItem">
								<label>Gender</label>
								<div className="newUserGender">
									<input type="radio" name="gender" id="male" value="male" />
									<label for="male">Male</label>
									<input
										type="radio"
										name="gender"
										id="female"
										value="female"
									/>
									<label for="female">Female</label>
									<input type="radio" name="gender" id="other" value="other" />
									<label for="other">Other</label>
								</div>
							</div>
							<div className="newUserItem">
								<label>Active</label>
								<select className="newUserSelect" name="active" id="active">
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</div>
						</form>
							<button className="newUserButton ml-[22%]">Create</button>
					</Wrapper>
				</Container>
			</div>
		</div>
	)
}
