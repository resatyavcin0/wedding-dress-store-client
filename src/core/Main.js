import React, { useEffect, useState } from "react";

import { Divider, Menu, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import ALL_ROUTES from "../routes";

//components
import HeaderComponent from "../components/header/HeaderComponent";

const MainCore = ({ title, subTitle, children }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(window.location.pathname);

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div>
      <HeaderComponent />
      <Divider style={{ margin: 0 }} />

      <Menu onClick={onClick} selectedKeys={current} mode="horizontal">
        {ALL_ROUTES.map(
          (route) =>
            route.label && (
              <Menu.Item
                style={{ paddingLeft: 32, margin: 0 }}
                icon={route.icon}
                key={route.key}
              >
                {route.label}
              </Menu.Item>
            )
        )}
      </Menu>

      <div style={{ padding: 32 }}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Paragraph
          disabled
          style={{ marginTop: 5, marginBottom: 30 }}
        >
          {subTitle}
        </Typography.Paragraph>
        {children}
      </div>
    </div>
  );
};

export default MainCore;
