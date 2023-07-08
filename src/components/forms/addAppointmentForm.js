import React, { useEffect, useState } from "react";

//utils
import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Switch,
} from "antd";

const AddAppointmentForm = ({
  form,
  istanbulWedding,
  setIstanbulWedding,
  isPackage,
  setIsPackage,
}) => {
  const [datas, setDatas] = useState([]);
  const [typeOfProductState, setTypeOfProductState] = useState("GELINLIK");

  useEffect(() => {
    const a = async () => {
      const c = await fetch(
        `http://localhost:8443/product/list?productCategory=${typeOfProductState}`
      );
      return c.json();
    };

    a().then((data) => {
      setDatas(
        data?.data?.map((item) => {
          return { label: item.productName, value: item._id };
        })
      );
    });

    return () => {
      setDatas([]);
    };
  }, [typeOfProductState]);

  const onFinish = (values) => {
    form.resetFields();
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const switchHandlerPackage = (e) => {
    setIsPackage(e.target.checked);
  };

  const switchHandlerIstanbul = (e) => {
    setIstanbulWedding(e.target.checked);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ margin: "40px 0" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Space size={120} style={{ marginBottom: 20 }}>
        <Space.Compact>
          <Form.Item name="isItUsed">
            <Switch
              style={{ marginRight: 10 }}
              checkedChildren="2. El"
              unCheckedChildren="Sıfır"
            />
          </Form.Item>

          <Form.Item name="isItForRent">
            <Switch checkedChildren="Kiralık" unCheckedChildren="Satılık" />
          </Form.Item>
        </Space.Compact>
        <Space.Compact
          block
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Radio.Group
            defaultValue={typeOfProductState}
            buttonStyle="solid"
            style={{ marginBottom: 12 }}
            onChange={(e) => {
              setTypeOfProductState(e.target.value);
            }}
          >
            <Radio.Button value="GELINLIK">GELİNLİK</Radio.Button>
            <Radio.Button value="NISANLIK">NİŞANLIK</Radio.Button>
            <Radio.Button value="KINALIK">KINALIK</Radio.Button>
          </Radio.Group>

          <Checkbox onChange={switchHandlerPackage}>Ürün paket mi?</Checkbox>
          <Checkbox onChange={switchHandlerIstanbul} style={{ marginTop: 10 }}>
            İstanbul'da tekrar işlem olacak mı?
          </Checkbox>
        </Space.Compact>
      </Space>

      <Form.Item
        label="Ürün"
        name="product"
        rules={[
          {
            required: true,
            message: "Lütfen boş bırakmayınız.",
          },
        ]}
      >
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder="Ürün seçiniz"
          options={[...datas]}
        />
      </Form.Item>

      {isPackage && (
        <>
          <Form.Item label="Paket Gidiş Günü" name="packageDepartureDate">
            <DatePicker placeholder={false} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Paket Geliş Günü" name="packageArrivalDate">
            <DatePicker placeholder={false} style={{ width: "100%" }} />
          </Form.Item>
        </>
      )}
      <Form.Item label="Event Günü" name="eventDate">
        <DatePicker placeholder={false} style={{ width: "100%" }} />
      </Form.Item>

      {istanbulWedding && (
        <Form.Item label="İkinci Event Günü" name="secondEventDate">
          <DatePicker placeholder={false} style={{ width: "100%" }} />
        </Form.Item>
      )}

      <Form.Item label="Birincil Prova Günü" name="firstRehearsalDate">
        <DatePicker placeholder={false} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="İkincil Prova Günü" name="secondRehearsalDate">
        <DatePicker placeholder={false} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Ekstra Not" name="extraNotes">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Toplam Miktar" name="totalAmount">
        <InputNumber prefix="₺" style={{ width: "100%" }} />
      </Form.Item>
    </Form>
  );
};

export default AddAppointmentForm;
