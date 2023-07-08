import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { Select, Space } from "antd";
import { useQuery } from "@tanstack/react-query";

const GetPaidForm = () => {
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Ödeme Yapan Kişi" name="username">
        <Input />
      </Form.Item>

      <Form.Item label="Ödeme Tutarı" name="password">
        <InputNumber addonAfter={"₺"} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Ödeme Alan" name="password">
        <Select
          loading={isLoading}
          onChange={handleChange}
          options={data?.map((employee) => ({
            value: employee?.id,
            label: employee?.firstName,
          }))}
        />
      </Form.Item>
    </Form>
  );
};

export default GetPaidForm;
