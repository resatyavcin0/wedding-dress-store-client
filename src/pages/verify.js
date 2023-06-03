import React, { useState } from "react";

import PinInput from "react-pin-input";
import Auth from "../core/Auth";
import { Alert, Typography } from "antd";

const PinInputStyleInitialState = {
  borderRadius: 4,
  fontSize: 20,
  border: "1px solid gray",
};
const PinInputStyleFocusState = {};

const VerifyPage = () => {
  const [loading, setLoading] = useState(false);
  const onChangeHandler = (value, index) => {};
  const onCompleteHandler = (value, index) => {
    if (value) {
      setLoading(true);
    }
  };
  return (
    <Auth
      title="Doğrulama"
      subTitle="  Lütfen telefonunuza gelen 6 haneli doğrulama kodunu eksiksiz
    giriniz!"
      loading={loading}
    >
      <Alert
        style={{ margin: "30px 0" }}
        message="Girdiğiniz doğrulama kodu yanlıştır. Lütfen tekrar deneyiniz."
        type="error"
        showIcon
      />

      <Alert
        style={{ margin: "30px 0" }}
        message="Sistemde kaydınız bulunmaktadır fakat giriş yapamazsınız. Ancak yöneticiniz sizi onaylarsa giriş yapabilirsiniz. Lütfen yöneticinizden onaylamasını rica ediniz."
        type="warning"
        showIcon
      />

      <PinInput
        length={6}
        secret
        secretDelay={500}
        onChange={onChangeHandler}
        type="numeric"
        inputMode="number"
        inputStyle={PinInputStyleInitialState}
        inputFocusStyle={PinInputStyleFocusState}
        onComplete={onCompleteHandler}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />

      <Typography.Title level={4} style={{ marginTop: 20 }}>
        Kalan: 00:30
      </Typography.Title>

      <Typography.Link href="https://ant.design" target="_blank">
        Mesaj Gelmedi mi? tekrar deneyiniz.
      </Typography.Link>
    </Auth>
  );
};

export default VerifyPage;
