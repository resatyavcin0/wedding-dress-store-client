import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Üzgünüz, bu sayfa bulunmamaktadır."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Ana Sayfaya Dön
        </Button>
      }
    />
  );
};

export default NotFound;
