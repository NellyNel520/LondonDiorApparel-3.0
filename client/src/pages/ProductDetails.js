import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${'' /* ${mobile({ padding: '10px', flexDirection: 'column' })} */}
`

const ImgContainer = styled.div`
	flex: 1;
`

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${'' /* ${mobile({ height: '40vh' })} */}
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 20px 40px;
	${'' /* background-color: gray; */}
	height: 90%;
	${'' /* ${mobile({ padding: '10px' })} */}
`

const Title = styled.h1`
	font-weight: 200;
`

const Desc = styled.p`
	margin: 20px 0px;
`

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`

const FilterContainer = styled.div`
	width: 75%;
	margin: 30px 0px;
	display: flex;
	border: 8px white;
	justify-content: space-between;
	${'' /* ${mobile({ width: '100%' })} */}
`

const Filter = styled.div`
	display: flex;
	align-items: center;
`

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${'' /* ${mobile({ width: '100%' })} */}
`

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`

const Button = styled.button`
	padding: 15px;
	border: 2px solid white;
	border-radius: 8px;
	background-color: #0ca2e2;

	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
`

const ProductDetails = () => {
  return (
    <Container className="font-play">
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.postimg.cc/ydkgwnHh/Product-2.png" />
				</ImgContainer>
				<InfoContainer>
					<Title className="text-6xl text-blue-400">Boondocks Tee</Title>

					{/* <div>
						<Rating rating={product.rating} numReviews={product.numReviews} />
					</div> */}

					<Desc className="text-white text-xl">
						

						<p>
							This classic t-shirt is a wardrobe essential. Made from
							high-quality cotton, it's soft, comfortable, and durable. The
							versatile design makes it perfect for any casual occasion.
							Available in a range of colors and sizes to suit your style.
						</p>
					</Desc>
					<Price className="text-white">$25.00</Price>

					<FilterContainer>
						<Filter>
							<FilterTitle className="text-white">Color:</FilterTitle>
							{/* {product.color?.map((c) => (
								<FilterColor  color={c} key={c} onClick={() => setColor(c)} />
							))} */}
							<FilterColor color="white" />
							<FilterColor color="blue" />
							<FilterColor color="red" />
						</Filter>
						<Filter>
							<FilterTitle className="text-white">Size:</FilterTitle>
							<FilterSize>
								{/* {product.size?.map((s) => (
									<FilterSizeOption key={s}>{s}</FilterSizeOption>
								))} */}
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
								<FilterSizeOption>2X</FilterSizeOption>
							</FilterSize>
						</Filter>

						<Filter>
							<FilterTitle className="text-white pr-2">Status: </FilterTitle>
							
								<span className=" text-white border-0 py-2 px-3 bg-green-500 rounded">
									In Stock
								</span>
						
						</Filter>
					</FilterContainer>

					<AddContainer className="text-white">
						<AmountContainer className="text-3xl justify-center">
							<Remove
								className="hover:text-red-500"
								// onClick={() => handleQuantity('dec')}
							/>
							<Amount>1</Amount>
							<Add
								className="hover:text-green-500"
								// onClick={() => handleQuantity('inc')}
							/>
						</AmountContainer>

						{/* {product.inStock > 0 && ( */}
							<button class="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded">
								Add to Cart
							</button>
						{/* )} */}
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			
		</Container>
  )
}

export default ProductDetails