import React from "react";

//utils
import { Select, Form, Input, InputNumber } from "antd";

const AddProductForm = () => {
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
        label="Ürün İsmi"
        name="productName"
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
        label="Ürün Kodu"
        name="productCode"
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
        label="Ürün Sayısı"
        name="productCount"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Ürün Kategorisi"
        name="productCategory"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Select
          defaultValue={"GELINLIK"}
          onChange={handleChange}
          options={[
            { value: "KINALIK", label: "KINALIK" },
            { value: "KINALIK", label: "NİŞANLIK" },
            { value: "GELINLIK", label: "GELİNLİK" },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
