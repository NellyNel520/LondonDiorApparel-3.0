import './newProduct.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { addProduct } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import PublishIcon from '@mui/icons-material/Publish'
import { useState } from 'react'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase'

export default function NewProduct({ handleLogOut }) {
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [cat, setCat] = useState([])
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	const handleCat = (e) => {
		setCat(e.target.value.split(','))
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
					// const product = { ...inputs, img: downloadURL, categories: cat };
					// addProduct(product, dispatch);
				})
			}
		)
	}

	console.log(file)
	return (
		<div className="newProduct ">
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />

				<div>
					<h1 className="addProductTitle text-3xl text-center mb-6 font-play">
						New Product
					</h1>

					<div className="productBottom">
						<form className="productForm">
							<div className="productFormLeft">
								<label>Product Name</label>
								<input
									onChange={handleChange}
									type="text"
									placeholder="new shirt"
									// value={formState.title}
								/>

								<label>Product Description</label>
								<input
									onChange={handleChange}
									// value={formState.desc}
									type="text"
									placeholder="nice shirt"
								/>
								<label>Category</label>
								<input
									placeholder="t-shirt"
									onChange={handleCat}
									// value={formState.category}
									type="text"
								/>
								<label>Price</label>
								<input
									placeholder="$20.00"
									onChange={handleChange}
									// value={formState.price}
									type="number"
								/>
								<label>Size(s)</label>
								<input
									placeholder="m,l"
									onChange={handleChange}
									// value={formState.size}
									type="text"
								/>
								<label>Available Color(s)</label>
								<input
									placeholder="blue"
									onChange={handleChange}
									// value={formState.color}
									type="text"
								/>
								<label>Count In Stock</label>
								<input
									placeholder="12"
									onChange={handleChange}
									// value={formState.inStock}
									type="text"
								/>

								<label for="file">Image</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
								/>
								<button onClick={handleClick} className="productButton mt-3 ">
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
