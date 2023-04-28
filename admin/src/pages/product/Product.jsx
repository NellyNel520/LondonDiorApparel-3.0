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
import {
	getStorage, 
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'

export default function Product({ handleLogOut }) {
	const location = useLocation()
	const productId = location.pathname.split('/')[2]
	const [pStats, setPStats] = useState([])
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [cat, setCat] = useState([])
	const [color, setColor] = useState([])
	const [size, setSize] = useState([])
	const dispatch = useDispatch()

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

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	const handleCat = (e) => {
		setCat(e.target.value.split(','))
	}
	const handleColor = (e) => {
		setColor(e.target.value.split(','))
	}
	const handleSize = (e) => {
		setSize(e.target.value.split(','))
	}

	const handleClick = (e) => {
		e.preventDefault()
		const fileName = new Date().getTime() + file.name
		const storage = getStorage(app)
		const storageRef = ref(storage, fileName)
		const uploadTask = uploadBytesResumable(storageRef, file)

		// Register three observers:
		// 1. 'state_changed' observer, called any time the state changes
		// 2. Error observer, called on failure
		// 3. Completion observer, called on successful completion
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				console.log('Upload is ' + progress + '% done')
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused')
						break
					case 'running':
						console.log('Upload is running')
						break
					default:
				}
			},
			(error) => {
				// Handle unsuccessful uploads
			},
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log('File available at', downloadURL)
					const product = {
						...inputs,
						img: downloadURL,
						categories: cat,
						size: size,
						color: color,
					}
					console.log(product)
					updateProduct(product, productId, dispatch)
				})
			}
		)
	}


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



					{/* update product form */}
					<div className="productBottom">
						<form className="productForm">
							<div className="productFormLeft">
								<label>Product Name</label>
								<input
									name="title"
									onChange={handleChange}
									type="text"
									placeholder={product.title}
								/>

								<label>Product Description</label>
								<input
									name="desc"
									type="text"
									onChange={handleChange}
									placeholder={product.desc}
								/>
								<label>Category</label>
								<input
									onChange={handleCat}
									placeholder={product.categories}
									name="categories"
									type="text"
								/>
								<label>Price</label>
								<input
									onChange={handleChange}
									placeholder={product.price}
									name="price"
									type="number"
								/>
								<label>Size(s)</label>
								<input
									// onChange={handleChange}
									onChange={handleSize}
									placeholder={product.size}
									name="size"
									type="text"
								/>
								<label>Available Color(s)</label>
								<input
									onChange={handleColor}
									placeholder={product.color}
									name="color"
									type="text"
								/>
								<label>Count In Stock</label>
								<input
									name="inStock"
									placeholder={product.inStock}
									onChange={handleChange}
									type="number"
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
							<div className="productFormRight ">
								<h3>Image</h3>
								<img src={product.img} alt="" className="productUploadImg" />
								<div className="productUpload">
									<label for="file">{/* <PublishIcon /> */}</label>
									<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
								/>
								</div>
								<button onClick={handleClick} className="productButton">
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
