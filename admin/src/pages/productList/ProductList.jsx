import './productList.css'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../../redux/apiCalls'

export default function ProductList({ handleLogOut }) {
	// const [data, setData] = useState(productRows)
	const dispatch = useDispatch()
	const products = useSelector((state) => state.product.products)

	useEffect(() => {
		getProducts(dispatch)
	}, [dispatch])

	const handleDelete = (id) => {
		deleteProduct(id, dispatch)
	}

	const columns = [
		{ field: '_id', headerName: 'ID', width: 120 },
		{
			field: 'product',
			headerName: 'Product',
			width: 300,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.img} alt="" />
						{params.row.title}
					</div>
				)
			},
		},
		{ field: 'inStock', headerName: 'Stock', width: 120 },
		{
			field: 'categories',
			headerName: 'Category',
			width: 150,
		},
		{
			field: 'rating',
			headerName: 'Rating',
			width: 120,
		},
		{
			field: 'price',
			headerName: 'Price',
			width: 160,
			renderCell: (params) => {
				return <div>${params.row.price.toFixed(2)}</div>
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/product/' + params.row._id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutlineIcon
							className="productListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				)
			},
		},
	]

	return (
		<div>
			<Topbar handleLogOut={handleLogOut} />
			<div className="flex">
				<Sidebar />

				<div>
					<div className='text-blue-400 text-[4rem] font-abril text-center'>Products</div>

					<div className="productList  bg-gray-300 m-6 rounded">
						<DataGrid
							rows={products}
							disableSelectionOnClick
							columns={columns}
							getRowId={(row) => row._id}
							pageSize={8}
							checkboxSelection
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
