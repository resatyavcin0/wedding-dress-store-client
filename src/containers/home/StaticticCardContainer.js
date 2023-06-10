import { Card, Col } from "antd";
import React from "react";

const StaticticCardContainer = ({ children, title }) => {
  return (
    <Col span={12}>
      <Card title={title}>{children}</Card>
    </Col>
  );
};

export default StaticticCardContainer;
