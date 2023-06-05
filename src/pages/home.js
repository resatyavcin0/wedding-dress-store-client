import React from "react";
import MainCore from "../core/Main";
import { Card, Col, Row, Statistic } from "antd";

//icons
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomePage = () => {
  return (
    <MainCore
      title={"Ana Sayfa"}
      subTitle={"Bu sayfa özelinde istatiklerinizi takip edebilirsiniz."}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic title="Haftalık Kazanç" value={120000} prefix={"₺"} />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Geçen Haftaya Göre Randevu Verilme Artışı"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          labelLine="false"
          label={() => <p>wergf </p>}
          nameKey={"ekwlf"}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </MainCore>
  );
};

export default HomePage;
