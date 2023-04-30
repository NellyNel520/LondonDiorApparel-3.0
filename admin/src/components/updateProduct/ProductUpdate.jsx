import React from "react";
import { useEffect, useState } from 'react'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";


export default function ProductUpdate({product}) {

  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
	const [cat, setCat] = useState([])
	const [color, setColor] = useState([])
	const [size, setSize] = useState([])
  const dispatch = useDispatch()
  const id = product._id
  console.log(id)

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

  const handleUpdate = (e) => {
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
					updateProduct(id, product, dispatch)
          
				})
			}
		)
	}

  return (
    <div>Update form
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
									onChange={handleChange}
								
									type="text"
									placeholder={product.desc}
								/>
								<label>Categories</label>
								<input
									placeholder={product.categories}
									onChange={handleCat}
									
									type="text"
								/>
								<label>Price</label>
								<input
									name="price"
									placeholder={product.price}
									onChange={handleChange}
								
									type="number"
								/>
								<label>Size(s)</label>
								<input
									name="size"
									placeholder={product.size}
									onChange={handleSize}
									
									type="text"
								/>
								<label>Available Color(s)</label>
								<input
									name="color"
									placeholder={product.color}
									onChange={handleColor}
									
									type="text"
								/>
								<label>Count In Stock</label>
								<input
									name="inStock"
									placeholder={product.inStock}
									onChange={handleChange}
									
									type="number"
								/>

								<label for="file">Image</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
								/>
								<button 
                onClick={handleUpdate}
                className="productButton mt-3 ">
									Create
								</button>
							</div>
						</form>
            <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="w-[80%]" />
            </div>
            
          </div>
					</div>
    </div>
  )
}