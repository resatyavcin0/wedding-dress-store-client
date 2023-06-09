import React from "react";

import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { PAGE_PATHS } from "../utils/pagesPaths";

const NotFound = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(PAGE_PATHS.HOME);
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Üzgünüz, bu sayfa bulunmamaktadır."
      extra={
        <Button type="primary" onClick={onClickHandler}>
          Ana Sayfaya Dön
        </Button>
      }
    />
  );
};

export default NotFound;
