import React from "react";

//utils
import { Select, Form, Input, InputNumber, Button } from "antd";

const AddProductForm = ({ form, messageApi }) => {
  const onFinish = (values) => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      id="addProductForm"
      name="basic"
      layout="vertical"
      style={{ margin: "40px 0" }}
      onFinish={onFinish}
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
          options={[
            { value: "KINALIK", label: "KINALIK" },
            { value: "NISANLIK", label: "NİŞANLIK" },
            { value: "GELINLIK", label: "GELİNLİK" },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
