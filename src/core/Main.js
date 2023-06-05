import { Menu } from "antd";
import React, { useState } from "react";
import { Typography } from "antd";
import ALL_ROUTES from "../routes";
import { useNavigate } from "react-router-dom";

const MainCore = ({ title, subTitle, children }) => {
  const items = ALL_ROUTES.map(
    (route) =>
      route.label && {
        label: route?.label,
        key: route?.key,
        icon: route?.icon,
      }
  );

  console.log(items);
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent([e.key]);
    navigate(e?.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[...current]}
        mode="horizontal"
        items={items}
      />

      <div style={{ padding: 30 }}>
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
