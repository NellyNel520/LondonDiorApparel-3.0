import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart bg-gray-300 rounded">
      <h3 className="chartTitle font-play  text-2xl">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#1182F4" />
          <Line type="monotone" dataKey={dataKey} stroke="#1182F4" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#5A5A5A" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
