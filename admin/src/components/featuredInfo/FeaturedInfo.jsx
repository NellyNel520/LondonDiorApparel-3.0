import "./featuredInfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useEffect, useState } from "react";
import { userRequest } from '../../services/requestMethods'


export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[0].total * 100) / res.data[1].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  console.log(income)

  


  return (
    <div className="featured">
      <div className="featuredItem bg-gray-300  ">
        <span className="featuredTitle ">Revanue</span>
        <div className="featuredMoneyContainer ">
          <span className="featuredMoney">${income[0]?.total.toFixed(2)}</span>
          <span className="featuredMoneyRate">

            {/* -11.4% <ArrowDownwardIcon className="featuredIcon negative"/> */}
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownwardIcon className="featuredIcon negative" />
            ) : (
              <ArrowUpwardIcon className="featuredIcon" />
            )}


          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem bg-gray-300">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem bg-gray-300">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpwardIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
