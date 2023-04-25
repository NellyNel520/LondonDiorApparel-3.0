import { useState } from 'react'
import styled from "styled-components";
import './login.css'
import { mobile } from "../../responsive";
import { useNavigate } from 'react-router-dom'
// import { SignInUser } from '../services/Auth'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/apiCalls'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 150, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://i.postimg.cc/Hkh6PLXN/LDA-Logo-Blue2nooffset.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0ca2e2;
  color: white;
  cursor: pointer;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;


const Login = () => {
	let navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    navigate("/home")
  };
 
	

	return (
    <Container>
      <Wrapper>
    <div>
		<div className="signin-cont font-play flex">
			<div className="signin-wrapper">
				<div className="text-center text-5xl text-blue-500 font-bold font-play pb-[2rem]">
					SIGN IN
				</div>
				<form className="flex-wrap font-play">
					<div className="text-center justify-center">
						<div className="flex justify-center input-wrapper text-xl pb-3">
							<label htmlFor="email" className="pr-2">
								Email:
							</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								type="email"
								placeholder="example@example.com"
								// value={formValues.email}
								required
							/>
						</div>
						<div className="flex input-wrapper justify-center text-center text-xl pb-5">
							<label htmlFor="password" className="pr-2">
								Password:
							</label>
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="password"
								// value={formValues.password}
								required
							/>
						</div>
						<button 
              onClick={handleClick}
              
							className="ml-3 rounded-md border border-transparent bg-blue-500 py-3 px-5 mb-6 text-lg font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Sign In
						</button>
						<div className='text-bold underline hover:text-blue-600'>FORGOT YOUR PASSWORD?</div>
						<Link to={"/register"}>
							<div className='text-bold underline hover:text-blue-600'>CREATE A NEW ACCOUNT</div>
						</Link>
					</div>
				</form>
			</div>
		</div>
    </div>
      </Wrapper>
    </Container>
	)
}

export default Login
