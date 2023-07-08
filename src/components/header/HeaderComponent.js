import React from "react";

//3rd-party libraries
import { Avatar, Space, Typography } from "antd";

//styles
import "./Header.css";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Typography.Title className="header-logo__title" level={3}>
        Çağlar Gelinlik
      </Typography.Title>

      <div className="header-user">
        <Avatar className="header-user__avatar" size="large">
          UA
        </Avatar>
        <div>
          <Typography.Title className="header-user__name" level={5}>
            Uğur Ata
          </Typography.Title>
          <Typography.Paragraph className="header-user__role" disabled>
            Satış Danışmanı
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
