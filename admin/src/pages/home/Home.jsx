import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'

export default function Home({handleLogOut}) {
	return (
		<div className="home">
			<Topbar handleLogOut={handleLogOut}/>
			<div className='flex'>
				<Sidebar />
        <div className='cont'>
				  <FeaturedInfo />
				  <Chart
					  data={userData}
					  title="User Analytics"
					  grid
					  dataKey="Active User"
				  />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
			</div>
		</div>
	)
}
