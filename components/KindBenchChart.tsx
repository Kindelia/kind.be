import $ from "@master/literal";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{
		name: "Kind",
		seconds: 80,
		fill: "#c0f9ff",
	},
	{
		name: "Coq",
		seconds: 55,
		fill: "#8fd3ff",
	},
	{
		name: "Agda",
		seconds: 25,
		fill: "#8faeff",
	},
	{
		name: "Idris",
		seconds: 15,
		fill: "#9944ff",
	},
];

export function KindBenchChart() {
	return (
		<div className="flex flex:col">
			<div className="flex flex:col gap:12 ml:80 mb:10">
				<p>Time to verify a large proof</p>
				<p className="f:12 f:italic">Smallest is fastest</p>
			</div>
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
				<Bar dataKey="seconds" fill="#8884d8" />
			</BarChart>
			<div className="flex flex:col gap:10 ml:80 mt:10">
				{data.map((d) => (
					<div className="flex gap:10 ai:center">
						<div className={$`h:20 w:20 bg:${d.fill}`} />
						<p className="f:'Fira Code' f:12">{d.name} Language</p>
					</div>
				))}
			</div>
		</div>
	);
}
