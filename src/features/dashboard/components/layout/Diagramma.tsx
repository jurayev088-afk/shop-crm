import { Area, AreaChart, CartesianGrid, createHorizontalChart, Tooltip, XAxis, YAxis } from 'recharts';

type MockDataType = {
    label:string,
    x:number,
    y:number
}

const data:MockDataType[] = [
    {label:"Dush", x:30, y:25},
    {label:"Sesh", x:25, y:25},
    {label:"Chor", x:40, y:25},
    {label:"Pay", x:80, y:35},
    {label:"Ju", x:30, y:25},
    {label:"Sha", x:40, y:45},
    {label:"Yak", x:30, y:25},
]

const Typed = createHorizontalChart<MockDataType, string, number>()({ Area, AreaChart, XAxis, YAxis, Tooltip });

// #endregion
const AreaChartExample = ({ isAnimationActive = true }) => (
  <Typed.AreaChart
    style={{ width: '100%', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid />
    <Typed.XAxis dataKey="label" />
    <Typed.YAxis width="auto" />
    <Tooltip />
    <Typed.Area
      type="monotone"
      dataKey="x"
      stroke="#8884d8"
      activeDot={{ stroke: '#8884d8' }}
      fillOpacity={1}
      fill="url(#colorUv)"
      isAnimationActive={isAnimationActive}
      animationBegin={200}
      animationDuration={1300}
    />
    <Typed.Area
      type="monotone"
      dataKey="y"
      stroke="#82ca9d"
      activeDot={{ stroke: '#82ca9d' }}
      fillOpacity={1}
      fill="url(#colorPv)"
      isAnimationActive={isAnimationActive}
    />
  </Typed.AreaChart>
);

export default AreaChartExample;