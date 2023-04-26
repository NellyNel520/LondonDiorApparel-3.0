import './newProduct.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { addProduct } from '../../redux/apiCalls'
import {useDispatch} from 'react-redux'
import PublishIcon from '@mui/icons-material/Publish'
import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function NewProduct({ handleLogOut }) {
	const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };


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
							<button className="productButton mt-3 ">Create</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
