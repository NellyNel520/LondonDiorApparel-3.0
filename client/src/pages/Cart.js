import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { mobile } from "../responsive";
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import StripeCheckout from 'react-stripe-checkout'
// import { useHistory } from "react-router";

const KEY = process.env.STRIPE_KEY



const Container = styled.div`
	${'' /* background-color: white; */}
`

const Wrapper = styled.div`
	padding: 1rem 1rem 4rem 1rem;
	${mobile({ padding: "10px" })}
`

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	${
		'' /* background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"}; */
	}
	${'' /* background-color: blue; */}
`

const TopTexts = styled.div`
	${mobile({ display: 'none' })}
`
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
	flex: 3;
`

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
	width: 200px;
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

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightblue;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`

const SummaryTitle = styled.h1`
	font-weight: 200;
`

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`

const Cart = () => {
	const cart = useSelector((state) => state.cart)
	const [quantity, setQuantity] = useState(1)
	const [stripeToken, setStripeToken] = useState(null)
	let navigate = useNavigate()
	// const history = useHistory();


	const handleQuantity = (type) => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1)
		} else {
			setQuantity(quantity + 1)
		}
	}

	const onToken = (token) => {
		setStripeToken(token)
	}
	console.log(stripeToken)

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const response = await axios.post(
					`${BASE_URL}/checkout/payment`,
					{
						tokenId: stripeToken.id,
						amount: cart.total * 100,
					}
				)
				console.log(response.data)
				navigate('/success')
				// history.push("/success", {
				//   stripeData: response.data,
				//   products: cart,
				// })
			} catch (err) {
				console.log(err)
			}
		}
		stripeToken && makeRequest()
	}, [stripeToken, cart.total, navigate])

  return (
    <Container className="text-white font-play">
			<Wrapper>
				<Title className="text-xl text-blue-400">YOUR CART</Title>
				<Top>
					<TopButton className="bg-white text-blue-400 hover:bg-blue-400 hover:text-white rounded">
						<Link to={'/products/'}>
							<button>CONTINUE SHOPPING</button>
						</Link>
					</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(12)</TopText>
					</TopTexts>

					<StripeCheckout
						name="London Dior Apparel"
						image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
						billingAddress
						shippingAddress
						description={`Your total is $${cart.total}`}
						amount={cart.total * 100}
						token={onToken}
						stripeKey={KEY}
					>
						<TopButton
							type="field"
							className="bg-blue-400 rounded text-black hover:text-white"
						>
							CHECKOUT NOW
						</TopButton>
						</StripeCheckout>

				</Top>
				<Bottom>
					<Info>
						<Hr />
						{cart.products.map((product) => (
							<Product className="mt-8 mb-8">
								<ProductDetail>
									<Image src={product.img} />
									<Details className="text-xl">
										<ProductName>
											<b className="text-blue-400">Product: </b>
											{product.title}
										</ProductName>
										<ProductId>
											<b className="text-blue-400">ID:</b> {product._id}
										</ProductId>
										<div className='flex'>
											<b className="text-blue-400 pr-3">Color:</b>
											<ProductColor className="mt-2" color={product.color} />
										</div>
										<ProductSize>
											<b className="text-blue-400">Size:</b> {product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add className="hover:text-green-500"
								onClick={() => handleQuantity('inc')}/>
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove className="hover:text-red-500"
								onClick={() => handleQuantity('dec')} />
									</ProductAmountContainer>
									<ProductPrice>
									${product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
							))}

              
						

						<Hr />
					</Info>
					<Summary>
						<SummaryTitle className="text-2xl text-blue-400">
							ORDER SUMMARY
						</SummaryTitle>
						<SummaryItem className="text-xl">
							<SummaryItemText>Subtotal:</SummaryItemText>
							<SummaryItemPrice>${cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping:</SummaryItemText>
							<SummaryItemPrice>$6.25</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount:</SummaryItemText>
							<SummaryItemPrice>-$6.25</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText type="total" className="text-blue-400 text-xl">
								Total:
							</SummaryItemText>
							<SummaryItemPrice>${cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name="London Dior Apparel"
							image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
							billingAddress
							shippingAddress
							description={`Your total is $${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}
						>
						
							<Button className="hover:bg-[#0ca2e2] border rounded">
								CHECKOUT
							</Button>
							</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
		</Container>
  )
}

export default Cart