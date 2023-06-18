import React from "react";
import Auth from "../core/Auth";
import { Alert, Form, Input, Button } from "antd";
import ReactPinInput from "react-pin-input";

const SigninPage = () => {
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
        <Form.Item
          style={{}}
          name="password"
          rules={[
            {
              required: true,
              message: "Lütfen boş bırakmayınız!",
            },
          ]}
          hasFeedback
        ></Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};

export default SigninPage;
