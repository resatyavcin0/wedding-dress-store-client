import React, { useState } from "react";

//utils
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Switch,
} from "antd";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AddAppointmentForm = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      <Space size={200} style={{ marginBottom: 20 }}>
        <Space.Compact>
          <Switch
            style={{ marginRight: 10 }}
            checkedChildren="2. El"
            unCheckedChildren="Sıfır"
          />
          <Switch checkedChildren="Kiralık" unCheckedChildren="Satılık" />
        </Space.Compact>
        <Space.Compact block>
          <Checkbox>Ürün paket mi?</Checkbox>
        </Space.Compact>
      </Space>

      <Form.Item
        label="Randevu Açan Eleman"
        name="employee"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Select
          defaultValue={"GELINLIK"}
          options={[
            { value: "KINALIK", label: "KINALIK" },
            { value: "KINALIK", label: "NİŞANLIK" },
            { value: "GELINLIK", label: "GELİNLİK" },
          ]}
        />
      </Form.Item>

      <Form.Item label="Müşteri Adı Soyadı" name="costumer">
        <AutoComplete
          value={value}
          options={anotherOptions}
          style={{ width: "100%" }}
          onSearch={(text) => setAnotherOptions(getPanelValue(text))}
          onChange={onChange}
          placeholder="control mode"
        />
      </Form.Item>

      <Form.Item
        label="Event Günü"
        name="eventDay"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <DatePicker placeholder={false} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="İkincil Prova Günü"
        name="secondRehearsalDate"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <DatePicker placeholder={false} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Ekstra Not"
        name="extraNotes"
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

export default AddAppointmentForm;
