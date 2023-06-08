import React from "react";
import Auth from "../core/Auth";
import { Alert, Button, Form, Input, Space } from "antd";

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Auth
      title="Kaydol"
      subTitle="Lütfen kişisel bilgilerinizi girerek kayıt işleminizi tamamlayınız."
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
          label="İsim"
          name="firstName"
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
          label="Soyisim"
          name="lastName"
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

export default RegisterPage;
