import React from "react";

//utils
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      textAnchor={x > cx ? "start" : "end"}
      style={{
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {name}
    </text>
  );
};

const PieChartComponent = ({ value }) => {
  return (
    <PieChart width={400} height={120}>
      <Pie
        cx={145}
        cy={120}
        data={value}
        startAngle={180}
        endAngle={0}
        innerRadius={50}
        outerRadius={90}
        paddingAngle={2}
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {value.map((entry, index) => {
          return (
            <Cell
              key={`cell-${index}`}
              index={index}
              fill={COLORS[index % COLORS.length]}
            />
          );
        })}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
