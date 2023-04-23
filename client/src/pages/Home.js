import React from 'react'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Products from '../components/Products'
// import LogoHeader from '../components/LogoHeader'

const Home = () => {
  return (
    <div>
      {/* <LogoHeader /> */}
      <Slider /> 
      <Categories />
      <div className='text-white text-[4rem] font-play text-center'>Featured Products</div>
      <Products />
    </div>
  )
}

export default Home