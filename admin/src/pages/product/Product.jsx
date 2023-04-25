import { Link, useLocation } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import PublishIcon from '@mui/icons-material/Publish'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../services/requestMethods'
import { updateProduct } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'

export default function Product({ handleLogOut }) {
	const location = useLocation()
	const productId = location.pathname.split('/')[2]
	const [pStats, setPStats] = useState([])

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [img, setImg] = useState('')
	const [category, setCategory] = useState('')
	const [size, setSize] = useState('')
	const [color, setColor] = useState('')
	const [price, setPrice] = useState('')
	const [inStock, setInStock] = useState('')
	const dispatch = useDispatch()

	const product = useSelector((state) =>
		state.product.products.find((product) => product._id === productId)
	)

	console.log(productId)

	const handleUpdate = (e) => {
		e.preventDefault()
		updateProduct(dispatch, {
			title,
			desc,
			img,
			category,
			size,
			color,
			price,
			inStock,
		})
	}

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

					{/* update product form */}
					<div className="productBottom">
						<form className="productForm">
							<div className="productFormLeft">
								<label>Product Name</label>
								<input
									onChange={(e) => setTitle(e.target.value)}
									// onChange={handleUpdate}
									type="text"
									placeholder={product.title}
									// value={formState.title}
								/>

								<label>Product Description</label>
								<input
									// onChange={handleUpdate}
									// value={formState.desc}
									type="text"
									onChange={(e) => setDesc(e.target.value)}
									placeholder={product.desc}
								/>
								<label>Category</label>
								<input
									onChange={(e) => setCategory(e.target.value)}
									placeholder={product.categories}
									// onChange={handleUpdate}
									// value={formState.category}
									type="text"
								/>
								<label>Price</label>
								<input
									onChange={(e) => setPrice(e.target.value)}
									placeholder={product.price}
									// onChange={handleUpdate}
									// value={formState.price}
									type="text"
								/>
								<label>Size(s)</label>
								<input
									onChange={(e) => setSize(e.target.value)}
									placeholder={product.size}
									// onChange={handleUpdate}
									// value={formState.size}
									type="text"
								/>
								<label>Available Color(s)</label>
								<input
									onChange={(e) => setColor(e.target.value)}
									placeholder={product.color}
									// onChange={handleUpdate}
									// value={formState.color}
									type="text"
								/>
								<label>Count In Stock</label>
								<input
									onChange={(e) => setInStock(e.target.value)}
									placeholder={product.inStock}
									// onChange={handleUpdate}
									// value={formState.inStock}
									type="text"
								/>
								{/* <select name="inStock" id="idStock">
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select> */}
								<label>Active</label>
								<select name="active" id="active">
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</div>
							<div className="productFormRight">
								<div className="productUpload">
									<img src={product.img} alt="" className="productUploadImg" />
									<label for="file">
										<PublishIcon />
									</label>
									<input
										onChange={(e) => setImg(e.target.value)}
										// onChange={handleUpdate}
										// value={formState.img}
										type="file"
										id="file"
										style={{ display: 'none' }}
									/>
								</div>
								<button onClick={handleUpdate} className="productButton">
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
