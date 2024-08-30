import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../assets/components/performanceRadarChart.scss';

const PerformanceRadarChart = ({ data }) => {
  const kindLabels = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio'
  };

  const formattedData = data.map(item => ({
    ...item,
    kind: kindLabels[item.kind]
  }));

  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 12 }} />
          <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadarChart;
