// Chart2.js

import React from "react";
import './main.scss';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Q1",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 750
  },
  {
    name: "Q2",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Q3",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "2021",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Q1",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Q2",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  },
  {
    name: "Q3",
    uv: 1400,
    pv: 680,
    amt: 1000,
    cnt: 580
  }
];


const ChartS = () => {
  return (
    <ResponsiveContainer width="100%" height={183}>
      <ComposedChart
        width="100%"
        height={183}
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={'12px'} />
        {/* <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} /> */}
        <Tooltip />

      
        <Bar dataKey="uv" barSize={10} fill="#4596D1" stackId="stack" radius={[10, 10, 10, 10]}/>
        <Bar dataKey="pv" barSize={10} fill="#FF5151" stackId="stack" radius={[10, 10, 10, 10]}/>
        <Bar dataKey="amt" barSize={10} fill="#FFB547" stackId="stack" radius={[10, 10, 10, 10]}/>
        <Bar dataKey="cnt" barSize={10} fill="#0052B4" stackId="stack" radius={[10, 10, 10, 10]}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ChartS;