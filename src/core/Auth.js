import React, { Fragment } from "react";
import { Card, Divider, Typography } from "antd";

const Auth = ({ title, subTitle, loading, children }) => {
  return (
    <Card>
      <Fragment>
        <Typography.Title level={2}>{title}</Typography.Title>
        <Typography.Paragraph>{subTitle}</Typography.Paragraph>
      </Fragment>

      <Divider />

      {children}
    </Card>
  );
};

export default Auth;
