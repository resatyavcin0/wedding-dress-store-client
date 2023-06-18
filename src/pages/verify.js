import React, { useState } from "react";
import Auth from "../core/Auth";
import { Alert, Form, Input, Button } from "antd";
import ReactPinInput from "react-pin-input";

const VerifyPage = () => {
  const [disableButton, setDisableButton] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Auth
      title={"Giriş"}
      subTitle={
        "Lütfen telefon numarasınızı BAŞINDA SIFIR olmadan eksiksiz şekilde tuşlayınız."
      }
    >
      <Form
        name="basic"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item style={{ width: "50%" }} name="password" hasFeedback>
          <ReactPinInput
            length={6}
            initialValue=""
            secret
            secretDelay={600}
            onChange={(value) => {
              if (value.length === 6) {
                setDisableButton(false);
              } else {
                setDisableButton(true);
              }
            }}
            type="numeric"
            style={{ display: "flex", justifyContent: "space-between" }}
            inputMode="number"
            inputStyle={{
              borderColor: "gray",
              borderRadius: 6,
              fontSize: 18,
              fontFamily: "Cabin, sans-serif",
              marginBottom: 6,
            }}
            inputFocusStyle={{ borderColor: "#012937" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </Form.Item>

        <Form.Item style={{ width: "50%", marginTop: 8 }}>
          <Button
            disabled={disableButton}
            style={{ height: 50 }}
            type="primary"
            htmlType="submit"
            block
          >
            Doğrula
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};

export default VerifyPage;
