import { Divider, Menu } from "antd";
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
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent([e.key]);
    navigate(e?.key);
  };

  return (
    <div>
      <Typography.Title
        level={2}
        style={{
          fontFamily: "Lobster, cursive",
          textAlign: "center",
          color: "#3066BE",
          marginBottom: 10,
        }}
      >
        Çağlar Gelinlik
      </Typography.Title>
      <Typography.Title
        level={5}
        style={{
          fontFamily: "Cabin, sans-serif",
          textAlign: "center",
          color: "#3066BE",
          marginTop: 0,
        }}
      >
        1995'ten bu yana gelinlikte bir numara
      </Typography.Title>
      <Divider style={{ marginBottom: 0 }} />

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
