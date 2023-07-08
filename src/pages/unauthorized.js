import React from "react";

//3rd-party libraries
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

//utilities
import { PAGE_PATHS } from "../utils/pagesPaths";

const Unauthorized = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(PAGE_PATHS.LOGIN);
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle="Üzgünüz, bu sayfaya yetkiniz bulunmamaktadır."
      extra={
        <Button type="primary" onClick={onClickHandler}>
          Giriş Sayfasına Dön
        </Button>
      }
    />
  );
};

export default Unauthorized;
