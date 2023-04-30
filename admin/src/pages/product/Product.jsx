import { Link, useLocation } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../services/requestMethods'
import ProductUpdate from '../../components/updateProduct/ProductUpdate'
import ProductUpdate2 from '../../components/updateProduct/ProductUpdate2'


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
		<div>
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />

				<div className="product">
					<div className="productTitleContainer mt-4">
						<h1 className="productTitle">Product</h1>
						<Link to="/newproduct">
							<button className="productAddButton">Create</button>
						</Link>
					</div>
					<div className="productTop">
						<div className="productTopLeft">
							{/* need to add pstats to data only one month so no stats currently showing dummy data currenttly */}
							<Chart
								data={productData}
								dataKey="Sales"
								title="Sales Performance"
							/>
						</div>
						<div className="productTopRight">
							<div className="productInfoTop">
								<img src={product.img} alt="" className="productInfoImg" />
								<span className="productName">{product.title}</span>
							</div>
							<div className="productInfoBottom">
								<div className="productInfoItem">
									<span className="productInfoKey">id:</span>
									<span className="productInfoValue">{product._id}</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">sales:</span>
									<span className="productInfoValue">5123</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">active:</span>
									<span className="productInfoValue">yes</span>
								</div>
								<div className="productInfoItem">
									<span className="productInfoKey">in stock:</span>
									<span className="productInfoValue">{product.inStock}</span>
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
