import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../../redux/apiCalls'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function UserList({ handleLogOut }) {
	const [data, setData] = useState(userRows)
	const dispatch = useDispatch()
	const users = useSelector((state) => state.customer.users)

	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])

	// const handleDelete = (id) => {
	//   setData(data.filter((item) => item.id !== id));
	// };

	const handleDelete = (id) => {
		deleteUser(id, dispatch)
	}

	const columns = [
		{ field: '_id', headerName: 'ID', width: 150 },
		{
			field: 'user',
			headerName: 'Name',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userListUser">
						{/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
						<AccountCircleIcon className="userListImg" />
						{params.row.name}
					</div>
				)
			},
		},

		{ field: 'email', headerName: 'Email', width: 200 },
		{
			field: 'isAdmin',
			headerName: 'Admin',
			width: 200,
		},
		// {
		//   field: "transaction",
		//   headerName: "Transaction Volume",
		//   width: 160,
		// },
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/user/' + params.row._id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutlineIcon
							className="userListDelete"
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
					<div className="text-blue-400 text-[4rem] font-abril text-center">
						Users
					</div>

					<div className="userList bg-gray-300 m-6 rounded">
						<DataGrid
							rows={users}
							getRowId={(row) => row._id}
							disableSelectionOnClick
							columns={columns}
							pageSize={8}
							checkboxSelection
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
