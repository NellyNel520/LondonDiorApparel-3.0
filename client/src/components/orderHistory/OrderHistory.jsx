import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Product = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 150px;
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`

const OrderHistory = () => {
	return (
		<div>
			<div className="order border">
				<div className="orderTop py-6 flex border">
					<div className="px-4">
						<span className="font-bold">Order Number</span>
						<div>
							<span className="text-gray-400">#</span> 13232
						</div>
					</div>

					<div className="px-4">
						<span className="font-bold">Date Placed</span>
						<div>Jul, 6th, 2022</div>
					</div>

					<div className="px-4">
						<span className="font-bold">Total amount</span>
						<div>$160.00</div>
					</div>
				</div>

				<div className="flex ">
					<Product className="mt-8 mb-8">
						<ProductDetail>
							<Image
								className="ml-3"
								src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
							/>
							<Details className="text-xl">
								<ProductName>
									<b className="text-blue-400">Product Name </b>
									{/* {product.title} */}
								</ProductName>
								<div className="">
									{/* <b className="text-blue-400">ID:</b> */}
									Are you a minimalist looking for a compact carry option? The
									Micro Backpack is the perfect size for your essential everyday
									carry items. Wear it like a backpack or carry it like a
									satchel for all-day use.
									{/* {product._id} */}
								</div>
								<div className="flex">
									<b className="text-blue-400 pr-3">Color:</b>
									<ProductColor
										className="mt-2"
										// color={product.color}
									/>
								</div>
								<ProductSize>
									<b className="text-blue-400">Size:</b>
									{/* {product.size} */}
								</ProductSize>
							</Details>
						</ProductDetail>
						<PriceDetail>
							<ProductAmountContainer>
								<ProductAmount>2</ProductAmount>
							</ProductAmountContainer>

							<ProductPrice>
								$40.00
								{/* ${product.price * product.quantity} */}
							</ProductPrice>
							<br />
						</PriceDetail>
					</Product>
				</div>
				<div className="ml-[75%]">
					<button className="mr-4">View Product</button>
					<span>|</span>
					<button className="ml-4">Buy Again</button>
				</div>
				<Hr />

				{/* second product */}
				<div className="flex ">
					<Product className="mt-8 mb-8">
						<ProductDetail>
							<Image
								className="ml-3"
								src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
							/>
							<Details className="text-xl">
								<ProductName>
									<b className="text-blue-400">Product Name </b>
									{/* {product.title} */}
								</ProductName>
								<div className="">
									{/* <b className="text-blue-400">ID:</b> */}
									Are you a minimalist looking for a compact carry option? The
									Micro Backpack is the perfect size for your essential everyday
									carry items. Wear it like a backpack or carry it like a
									satchel for all-day use.
									{/* {product._id} */}
								</div>
								<div className="flex">
									<b className="text-blue-400 pr-3">Color:</b>
									<ProductColor
										className="mt-2"
										// color={product.color}
									/>
								</div>
								<ProductSize>
									<b className="text-blue-400">Size:</b>
									{/* {product.size} */}
								</ProductSize>
							</Details>
						</ProductDetail>
						<PriceDetail>
							<ProductAmountContainer>
								<ProductAmount>2</ProductAmount>
							</ProductAmountContainer>

							<ProductPrice>
								$40.00
								{/* ${product.price * product.quantity} */}
							</ProductPrice>
							<br />
						</PriceDetail>
					</Product>
				</div>
				<div className="ml-[75%]">
					<button className="mr-4">View Product</button>
					<span>|</span>
					<button className="ml-4">Buy Again</button>
				</div>
			</div>
		</div>
	)
}

export default OrderHistory
