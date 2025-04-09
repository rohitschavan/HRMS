import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const formatted = data?.map(emp => {
            const dateObj = new Date(emp.createdAt);
            const options = { month: 'short', day: '2-digit' }; // e.g., Apr 04
            const formattedDate = dateObj.toLocaleDateString('en-US', options);
            return { date: formattedDate };
        });
    
        const counts = {};
        formatted?.forEach(({ date }) => {
            counts[date] = (counts[date] || 0) + 1;
        });
    
        const finalChartData = Object.keys(counts)
            .sort((a, b) => new Date(a) - new Date(b)) // sort by actual date
            .map(date => ({
                date,
                count: counts[date],
            }));
    
      
        setChartData(finalChartData);
    }, [data]);

    return (
        <div style={{
            widtH:'100%',
            height:'100%'
        }}>
     
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" angle={-45} textAnchor="end" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomLineChart;
