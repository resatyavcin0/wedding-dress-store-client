import React, { useState } from "react";

import PinInput from "react-pin-input";
import Auth from "../core/Auth";
import { Alert, Typography, Statistic } from "antd";

const PinInputStyleInitialState = {
  borderRadius: 4,
  fontSize: 20,
  border: "1px solid gray",
};
const PinInputStyleFocusState = {};

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

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

      <Statistic.Countdown
        title="Million Seconds"
        value={deadline}
        format="HH:mm:ss:SSS"
      />

      <Typography.Link href="https://ant.design" target="_blank">
        Mesaj Gelmedi mi? tekrar deneyiniz.
      </Typography.Link>
    </Auth>
  );
};

export default VerifyPage;
