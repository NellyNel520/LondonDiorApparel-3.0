import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import '../../styles/App.css'
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../../services/requestMethods'


export default function Home({handleLogOut}) {
	const [userStats, setUserStats] = useState([]);

	const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

	useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
		console.log(userStats)
  }, [MONTHS]);

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
