import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<div className="container text-white justify-center">
			<div className="main">
				<h2 className="text-center text-6xl mt-[4rem] ml-[4rem] mb-5 font-ari text-blue-400">
					About Us
				</h2>
				<div>
					<div className="about-container flex ml-[7rem] text-left mt-[3rem] p-6 pb-[10rem] text-lg font-play">
						<img
							alt="logo"
							className="w-[45%]"
							src="https://i.postimg.cc/5tQscMm2/LDA-Logo-Blue1.png"
						/>
						<div className="text-center">
							<p>
								At our store, we believe that fashion should be accessible,
								affordable, and fun for everyone. We are dedicated to providing
								high-quality t-shirts that are not only comfortable to wear but
								also reflect your unique style and personality.
								<br />
								<br />
								We take pride in offering a wide range of designs, colors, and
								sizes to suit every taste and preference. From classic graphic
								tees to trendy statement pieces, we have something for everyone.
								Our t-shirts are made from premium materials to ensure maximum
								comfort, durability, and style.
								<br />
								<br />
								Our team is passionate about fashion and committed to providing
								exceptional customer service. We strive to make your shopping
								experience as seamless and enjoyable as possible. We are always
								on the lookout for new trends and designs to keep our collection
								fresh and exciting.
								<br />
								<br />
								Thank you for choosing our store for your t-shirt needs. We look
								forward to serving you and helping you find the perfect t-shirt
								to express your unique style.
							</p>
							<Link to={'/products'}>
								<button className="bg-white text-blue-400 py-2 px-2 mt-6 hover:bg-blue-400 hover:text-white rounded">
									SHOP NOW
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
