import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import logo from '../assets/logo2.mp4'


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({ display: "none" })}
`
const Wrapper = styled.div`
	height: 100%;
  width: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props)=>props.slideIndex * -100}vw);
`

const LogoHeader = () => {
  return (
    // <Container>
    //   <Wrapper className='text-white'>
		<div>

      <video className="w-[100vw] h-[100vh] bg-cover" src={logo} autoPlay loop muted/>
		</div>
    //   </Wrapper>
    // </Container> */}
  )
}

export default LogoHeader