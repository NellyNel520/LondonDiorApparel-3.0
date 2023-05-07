import { Link, useLocation } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../services/requestMethods'
import ProductUpdate from '../../components/updateProduct/ProductUpdate'
import ProductUpdate2 from '../../components/updateProduct/ProductUpdate2'


const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`

export default function Product({ handleLogOut }) {
	const location = useLocation()
	const productId = location.pathname.split('/')[2]
	const [pStats, setPStats] = useState([])

	const product = useSelector((state) =>
		state.product.products.find((product) => product._id === productId)
	)

	console.log(productId)

	const MONTHS = useMemo(
		() => [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Agu',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		[]
	)

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest.get('orders/income?pid=' + productId)
				const list = res.data.sort((a, b) => {
					return a._id - b._id
				})
				list.map((item) =>
					setPStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], Sales: item.total },
					])
				)
			} catch (err) {
				console.log(err)
			}
		}
		getStats()
	}, [productId, MONTHS])
	console.log(pStats)

	console.log(product)
	console.log(product.categories)

	return (
		<div className='w-[100vw]'>
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />

				<div className="product">
					<div className="productTitleContainer mt-4">
						<h1 className="productTitle text-blue-500 pl-6 text-3xl font-play">{product.title}</h1>
						{/* <Link to="/newproduct">
							<button className="productAddButton">Create</button>
						</Link> */}
					</div>
					<div className="productTop">
						<div className="productTopLeft w-[46%] mr-7">
							{/* need to add pstats to data only one month so no stats currently showing dummy data currenttly */}
							<Chart
								data={productData}
								dataKey="Sales" 
								title="Sales Performance"
								
							/>
						</div>
						<div className="productTopRight bg-gray-300 rounded w-[42%]">
							<div className="productInfoTop">
								<img src={product.img} alt="" className="productInfoImg" />
								<span className="productName text-xl text-blue-500">{product.title}</span>
							</div>
							<div className="productInfoBottom">
								<div className="productInfoItem">
									<span className="productInfoKey">Product Id:</span>
									<span className="productInfoValue">{product._id}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Categories:</span>
									<span className="productInfoValue">{product.inStock}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Count In Stock:</span>
									<span className="productInfoValue">{product.inStock}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Price:</span>
									<span className="productInfoValue">yes</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Color(s):</span>
										{product.color?.map((c) => (
											<FilterColor color={c} key={c} />
										))}
									
									{/* <span className="productInfoValue">5123</span> */}
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">Size(s):</span>
									<span className="productInfoValue">yes</span>
								</div>
								
							
							</div>
						</div>
					</div>

					{/* <ProductUpdate product={product} /> */}
					<ProductUpdate2 product={product} />
				</div>
			</div>
		</div>
	)
}
