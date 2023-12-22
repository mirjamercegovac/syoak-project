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
    uv: 400, //light blue
    pv: 800, //red
    amt: 1000, //yellow
    cnt: 720
  },
  {
    name: "Q2",
    uv: 500,
    pv: 580,
    amt: 1800,
    cnt: 880
  },
  {
    name: "Q3",
    uv: 800,
    pv: 2500,
    amt: 1200,
    cnt: 1400
  },
  {
    name: "2021",
    uv: 700,
    pv: 2100,
    amt: 1100,
    cnt: 1200
  },
  {
    name: "Q1",
    uv: 700,
    pv: 2300,
    amt: 1100,
    cnt: 1400
  },
  {
    name: "Q2",
    uv: 500,
    pv: 1600,
    amt: 900,
    cnt: 1000
  },
  {
    name: "Q3",
    uv: 700,
    pv: 2300,
    amt: 1100,
    cnt: 1300
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
        {/* <CartesianGrid stroke="#f5f5f5" /> */}
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