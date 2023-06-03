import React, { Fragment } from "react";
import { Card, Spin, Divider, Typography } from "antd";

const Auth = ({ title, subTitle, loading, children }) => {
  return (
    <Card>
      <Fragment>
        <Typography.Title level={2}>{title}</Typography.Title>
        <Typography.Paragraph>{subTitle}</Typography.Paragraph>
      </Fragment>

      <Divider />

      <Spin spinning={loading}>{children}</Spin>
    </Card>
  );
};

export default Auth;
