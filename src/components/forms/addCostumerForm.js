import React from "react";

//utils
import { Form, Input } from "antd";

const AddCostumerForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ margin: "40px 0" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Müşteri İsmi"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Müşteri Soyismi"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Müşteri Birincil Telefonu"
        name="primaryPhoneNumber"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Müşteri İkincil Telefonu"
        name="secondaryPhoneNumber"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Müşteri Adresi"
        name="address"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default AddCostumerForm;
