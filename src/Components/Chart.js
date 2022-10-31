import React,{ Fragment} from 'react'
import { Typography,Stack } from '@mui/material';
import styles from '../CSS_modules/Components/Chart.module.css'
import {AreaChart,Area , XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    month: "Fabraury",total:1200
  },
  {
    month: 'March',total:1100

  },

  {month:'April',total:800},
  {
    month: 'May',total:900
  },
  {
    month: 'June',total:870
  },
  {
    month: 'July',total:700
  },
  {
    month: 'August',total:900
  },
  {
    month: 'September',total:500
  },
];
function Chart({title}) {
  return (
    <Fragment>
    <Stack className={`${styles.chart} `} style={{height:"100%"}}>
    <Typography >{title}</Typography>
    <ResponsiveContainer width="100%" height={350} >
    <AreaChart  data={data} className="gray_chart"
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="month" />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  </AreaChart>
   </ResponsiveContainer></Stack>
    </Fragment>
  )
}

export default Chart