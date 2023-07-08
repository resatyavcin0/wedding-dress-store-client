import React from "react";

//utils
import { BarChart, Bar, XAxis } from "recharts";

const BarChartComponent = ({ value }) => {
  return (
    <BarChart width={300} height={120} data={value}>
      <Bar dataKey="value" fill="#8390FA" />
      <XAxis dataKey="name" />
    </BarChart>
  );
};

export default BarChartComponent;
