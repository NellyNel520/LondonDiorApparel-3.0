import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  

`;

const Announcement = ({ user }) => {
  let userOptions 
  if (user) {
    userOptions = (
<div className='h-10 bg-blue-400 text-white flex justify-center text-2xl font-play pt-2 '>Welcome <span className='text-black pl-1 pr-1 text-2xl'> {user.name}!</span> Enjoy Free Shipping on your<span className='text-black pl-2 text-2xl'>1st Order!</span></div>
    )
  }
const publicOptions = (
<div className='h-10 bg-blue-400 text-white flex justify-center text-xl font-play pt-2 '>Free Shipping on Orders Over<span className='text-black pl-2 text-2xl'>$50.00</span></div>
)
  return (
    <Container>{user ? userOptions : publicOptions}</Container>
  )
}

export default Announcement