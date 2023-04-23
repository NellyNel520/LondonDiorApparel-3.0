import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";




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
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  ${'' /* font-size: 24px; */}
  ${'' /* font-weight: 300; */}
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

// const Error = styled.span`
//   color: red;
// `;

const Login = () => {
  let navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { name, email,  });
  };


  return (
 
  <Container className='font-play'>
    <Wrapper>
      <Title className='text-center text-[3rem] text-blue-500'>SIGN IN</Title>
      <Form>
        <Input 
        placeholder='Email' 
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
        placeholder='Password'  
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick} className='rounded'>LOGIN</Button>
        <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
        <Links><Link to={"/register"}>CREATE A NEW ACCOUNT</Link></Links>
      </Form>
    </Wrapper>
  </Container>
 
  )
}

export default Login