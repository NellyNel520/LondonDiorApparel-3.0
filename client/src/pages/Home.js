import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
// import LogoHeader from '../components/LogoHeader'

const Home = () => {
	return (
		<div>
      {/* <LogoHeader /> */}
			<Slider />
			<Categories />
			<FeaturedProducts />
		</div>
	)
}

export default Home
