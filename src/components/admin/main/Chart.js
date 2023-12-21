import React from "react";
import './main.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '', Total: 200 },
    { name: 'JAN', Total: 200 },
    { name: 'FEB', Total: 300 },
    { name: 'MAR', Total: 150 },
    { name: 'APR', Total: 100 },
    { name: 'MAY', Total: 200 },
    { name: 'JUN', Total: 300 },
    { name: 'JUL', Total: 290 },
    { name: '', Total: 250 },
]

const Chart = () => {

  return (
   <div className="chart">
    <ResponsiveContainer width="100%" height={100}>
          <LineChart
            width={500}
            height={100}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            
            <XAxis dataKey="name" axisLine={{stroke: "#ffffff33"}} tickLine={false} tick={{ fill:"#ffffff33"}} fontSize={'8px'} />
            <Tooltip />
            
            <Line 
                type="monotone" 
                dataKey="Total" 
                stroke="#fff" 
                fill="url(#total)"
                strokeWidth={2}
                dot={(props) =>
                    props.payload.name === 'JUN' ? (
                        <g>
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={4}  
                          fill="#fff"
                        />
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={8}  
                          fill="none"
                          stroke="#ffffff33"
                          strokeWidth={2}
                        />
                      </g>
                    ) : null
                  } />
          </LineChart>
        </ResponsiveContainer>
   </div>
  );
};

export default Chart;