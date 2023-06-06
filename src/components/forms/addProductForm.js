import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { Select, Space } from "antd";
import { useQuery } from "@tanstack/react-query";

const AddProductForm = () => {
  const { isLoading, data } = useQuery([], {
    queryKey: ["employees"],
    queryFn: async () =>
      await fetch(`http://localhost:8080/employees`).then((res) => res.json()),
  });

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
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Ödeme Yapan Kişi"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ödeme Tutarı"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <InputNumber addonAfter={"₺"} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Ödeme Alan"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Select
          defaultValue="lucy"
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
