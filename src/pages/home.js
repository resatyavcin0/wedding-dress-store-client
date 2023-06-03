import React from "react";
import MainCore from "../core/Main";
import { Card, Col, Row, Statistic } from "antd";

//icons
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <MainCore
      title={"Ana Sayfa"}
      subTitle={"Bu sayfa özelinde istatiklerinizi takip edebilirsiniz."}
    >
      <Row>
        <Col span={12}>
          <Statistic
            title="Haftalık Toplam Hesap"
            value={112893}
            precision={2}
          />
        </Col>
      </Row>
      <Row gutter={16}>
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
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </MainCore>
  );
};

export default HomePage;
