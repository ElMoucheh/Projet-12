import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../assets/components/scoreChart.scss';

const ScoreChart = ({ score }) => {
  const data = [
    { name: 'completed', value: score },
    { name: 'remaining', value: 1 - score }
  ];

  const COLORS = ['#E60000', '#FFF'];

  return (
    <div className="score-chart">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            startAngle={90}
            endAngle={450}
            innerRadius={70}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-content">
        <p className="score-percentage">{`${(score * 100).toFixed(0)}%`}</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default ScoreChart;
