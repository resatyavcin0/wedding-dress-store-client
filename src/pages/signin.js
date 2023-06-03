import React from "react";
import Auth from "../core/Auth";
import { Alert, Form, Input, Button } from "antd";

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
      <Alert
        style={{ margin: "30px 0" }}
        message="Bu kullanıcı mevcut değildir. Lütfen kaydolunuz."
        type="error"
        showIcon
      />

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Telefon Numarası"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Lütfen telefon numaranızı boş bırakmayınız!",
            },
          ]}
          hasFeedback
        >
          <Input defaultValue="26888888" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Giriş
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};

export default SigninPage;
