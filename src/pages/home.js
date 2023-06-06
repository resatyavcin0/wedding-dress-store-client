import React from "react";
import MainCore from "../core/Main";
import { Card, Col, Row, Statistic, Switch } from "antd";

//icons
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import TableComponent from "../components/TableComponent";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group B", value: 300 },
];

const data2 = [
  {
    name: "Buse Işık",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sevim Kara",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Derya Arı",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Merve Pınaroğlu",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 2.8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const HomePage = () => {
  return (
    <MainCore
      title={"Ana Sayfa"}
      subTitle={"Bu sayfa özelinde istatiklerinizi takip edebilirsiniz."}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic title="Haftalık Kazanç" value={120000} prefix={"₺"} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Geçen Haftaya Göre Randevu Verilme Artışı"
              valueStyle={{ color: "#3f8600" }}
              value={11.28}
              precision={2}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ margin: "20px 0" }}>
        <Col span={12}>
          <Card title="Randevu Türlerinin Oranı">
            <PieChart width={300} height={120}>
              <Pie
                cx={140}
                cy={120}
                data={data}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={renderCustomizedLabel}
                nameKey={"ekwlf"}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Çalışan hangi oranda randevu verdi?">
            <BarChart width={300} height={120} data={data2}>
              <Bar dataKey="pv" fill="#CCC4E9">
                <LabelList
                  fill="#242038"
                  fontWeight={700}
                  dataKey="name"
                  offset={0}
                  position="insideBottom"
                />
              </Bar>
            </BarChart>
          </Card>
        </Col>
      </Row>

      <TableComponent
        columns={[
          {
            title: "Ad Soyad",
            dataIndex: "fullName",
            key: "fullName",
            render: (text) => <a>{text}</a>,
          },
          {
            title: "Hesabı Aktif Mi?",
            dataIndex: "isActiveAccount",
            key: "isActiveAccount",
            render: (text) => <Switch />,
          },
        ]}
        data={[
          {
            key: "1",
            fullName: "John Brown",
            isActiveAccount: false,
          },
        ]}
      />
    </MainCore>
  );
};

export default HomePage;
