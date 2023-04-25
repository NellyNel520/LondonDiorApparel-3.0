import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useEffect, useState } from 'react'
import { userRequest } from '../../services/requestMethods'
export default function WidgetSm() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get('/users/?new=true')
				setUsers(res.data)
			} catch {}
		}
		getUsers()
		// console.log(users)
	}, [])

	return (
		<div className='flex'>
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{users.map(user => (

				<li className="widgetSmListItem" key={user._id}>
					<img
						src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
					/>
					<div className="widgetSmUser mr-2">
						<span className="widgetSmUsername">{user.name}</span>
						<span className="widgetSmUserTitle">{user.email}</span>
					</div>
					<button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" />
						Display
					</button>
				</li>
				))}
			</ul>
		</div>
		</div>
	)
}
