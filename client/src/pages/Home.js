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
      <Products />
    </div>
  )
}

export default Home