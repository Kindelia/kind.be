import $ from "@master/literal";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const data = [
	{
		name: "Addition",
		kind: 100,
		eth: 3,
	},
	{
		name: "Lambda",
		kind: 1000,
		eth: 100,
	},
	{
		name: "Unit store",
		kind: 1000,
		eth: 300,
	},
];

export function KindEfficiencyChart() {
	return (
		<div className="flex flex:col">
			<BarChart
				width={350}
				height={500}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid />
				<XAxis
					axisLine={false}
					tick={false}
					dataKey="name"
					fontFamily="Fira Code"
					fontSize={12}
				/>
				<YAxis
					axisLine={false}
					tick={true}
					dataKey="seconds"
					unit="s"
					fontFamily="Fira Code"
					fontSize={12}
					domain={[0, 100]}
					ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
				/>
				<Tooltip />
				<Bar dataKey="kind" fill="#8fd3ff" />
				<Bar dataKey="eth" fill="#9944ff" />
			</BarChart>
			<div className="flex flex:col gap:12 ml:80 mb:10">
				<p>Efficiency gained</p>
				<p className="f:12 f:italic">Smallest is better</p>
			</div>
			<div className="flex flex:col gap:10 ml:80 mt:10">
				{[
					{ name: "Kind Network", fill: "#8fd3ff" },
					{ name: "Ethereum", fill: "#9944ff" },
				].map((d) => (
					<div className="flex gap:10 ai:center">
						<div className={$`h:20 w:20 bg:${d.fill}`} />
						<p className="f:'Fira Code' f:12">{d.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
