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
        message="Sistemde bir hata oluştu. Lütfen tekrar deneyiniz."
        type="error"
        showIcon
      />

      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Kullanıcı Adı"
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen boş bırakmayınız!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Şifre"
          name="password"
          rules={[
            {
              required: true,
              message: "Lütfen boş bırakmayınız!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kaydol
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};

export default SigninPage;
