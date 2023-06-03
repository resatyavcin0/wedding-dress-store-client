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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="İsim"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your username!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

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
            Kaydol
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};

export default RegisterPage;
