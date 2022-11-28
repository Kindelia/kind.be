import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    core: 1,
    haskell: 70,
    kind: 42,
  },
  {
    core: 2,
    haskell: 70,
    kind: 22,
  },
  {
    core: 3,
    haskell: 70,
    kind: 12,
  },
  {
    core: 4,
    haskell: 70,
    kind: 8,
  },
];

export function FirstChart() {
  return (
    <div className="flex flex:col">
      <div className="flex flex:col gap:12 ml:80 mb:10">
        <p>Sorting a very large list</p>
        <p className="f:12 f:italic">Smallest is fastest</p>
      </div>
      <LineChart width={400} height={340} data={data}>
        <CartesianGrid />
        <XAxis axisLine={false} tick={false} dataKey="core" label="cores" />
        <YAxis unit="s" fontFamily="Fira Code" fontSize={12} />
        <Tooltip />
        <Line
          name="haskell"
          unit="s"
          type="monotone"
          dataKey="haskell"
          stroke="#9832e4"
          strokeWidth={2}
          activeDot={{
            stroke: "#9832e4",
            strokeWidth: 12,
          }}
          dot={{
            stroke: "#9832e4",
            strokeWidth: 6,
          }}
        />
        <Line
          name="kind"
          unit="s"
          type="monotone"
          dataKey="kind"
          stroke="#EF97E9"
          strokeWidth={2}
          activeDot={{
            stroke: "#EF97E9",
            strokeWidth: 12,
          }}
          dot={{
            stroke: "#EF97E9",
            strokeWidth: 6,
          }}
        />
      </LineChart>
      <div className="flex flex:col gap:10 ml:80 mt:10">
        <div className="flex gap:10 ai:center">
          <div className="h:20 w:20 bg:#EF97E9" />
          <p className="f:'Fira Code'">HVM Kind Machine</p>
        </div>
        <div className="flex gap:10 ai:center">
          <div className="h:20 w:20 bg:purple" />
          <p className="f:'Fira Code'">
            Haskell Compiler (Used by
            <br /> Kaspersky, Oracle, Tesla and others)
          </p>
        </div>
      </div>
    </div>
  );
}
