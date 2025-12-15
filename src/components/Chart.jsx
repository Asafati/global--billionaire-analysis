import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const colors = {
  Technology: '#8884d8',
  'E-commerce': '#82ca9d',
  'Luxury Goods': '#ffc658',
  Finance: '#ff7f50',
  Others: '#a4de6c'
};

const Chart = ({ data, onBarClick }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        <Legend />
        {Object.keys(colors).map((key) => (
          <Bar
            key={key}
            dataKey="netWorth"
            fill={colors[key] || colors['Others']}
            name={key}
            isAnimationActive={false}
            onClick={(bar) => onBarClick && onBarClick(bar.id)} // klik highlight
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart;
