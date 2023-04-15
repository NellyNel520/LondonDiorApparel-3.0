import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Newsletter from '../components/Newsletter'
// import LogoHeader from '../components/LogoHeader'

const Home = () => {
	return (
		<div>
      {/* <LogoHeader /> */}
			<Slider />
			<Categories />
			<FeaturedProducts />
			<Newsletter />
		</div>
	)
}

export default Home
