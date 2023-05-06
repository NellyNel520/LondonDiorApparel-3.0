import './orderList.css'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/apiCalls'
import { format } from 'timeago.js'

export default function OrderList({ handleLogOut }) {
	// const [data, setData] = useState(productRows);
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.order.orders)

  const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}

	useEffect(() => {
		getOrders(dispatch)
	}, [dispatch])

	// const handleDelete = (id) => {
	//   setData(data.filter((item) => item.id !== id));
	// };

	const columns = [
		{ field: '_id', headerName: 'Order ID', width: 100 },
		{
			field: 'email',
			headerName: 'User',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img
							className="productListImg"
							src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
							alt=""
						/>
						{params.row.email}
					</div>
				)
			},
		},
		{
			field: 'createdAt',
			headerName: 'Date',
			width: 200,
			renderCell: (params) => {
				return <div>{format(params.row.createdAt)}</div>
			},
		},
		{
			field: 'amount',
			headerName: 'Total',
			width: 160,
      renderCell: (params) => {
        return <div>${params.row.amount.toFixed(2)}</div>
      }
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 120,
      renderCell: (params) => {
        return <div><Button type={params.row.status}/></div>
      }
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
						{/* <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
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
				<div className="productList">
					<DataGrid
						rows={orders}
						disableSelectionOnClick
						columns={columns}
						getRowId={(row) => row._id}
						pageSize={8}
						checkboxSelection
					/>
				</div>
			</div>
		</div>
	)
}
