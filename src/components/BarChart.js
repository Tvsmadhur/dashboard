import React from 'react'
import './BarChartStyle.css'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts'

const pdata = [
    {
        name: '1pm',
        machine1: 60,
        machine2: 120
    },
    {
        name: '2pm',
        machine1: 40,
        machine2: 90
    },
    {
        name: '3pm',
        machine1: 61,
        machine2: 75
    },
    {
        name: '4pm',
        machine1: 71,
        machine2: 110
    },
    {
        name: '5pm',
        machine1: 68,
        machine2: 120
    },
    {
        name: '6pm',
        machine1: 78,
        machine2: 108
    },
];
function BarChart() {
    return (

        
        <div className="james">
        <ResponsiveContainer width={1100}  height={600}aspect={5} >
                <LineChart data={pdata} margin={{ left: 250,right:400}}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    
                    <Line dataKey="machine1"
                        stroke="black" activeDot={{ r:4  }} className="www"/>
                    <Line dataKey="machine2"
                        stroke="red" activeDot={{ r: 4}} className="wwb"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
            
        
    )
}

export default BarChart
