import React, { useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddProductForm from "../../components/forms/addProductForm";
import { Button, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { isError, useMutation } from "@tanstack/react-query";
import axios from "axios";

const AddProductModalContainer = ({
  showProductAddModalState,
  setShowProductAddModalState,
  refetch,
}) => {
  const [Form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [formFieldsState, setFormFieldsState] = useState();

  const { isLoading, isSuccess, isError, mutateAsync } = useMutation({
    mutationFn: () => {
      return axios.post("http://localhost:8080/products", formFieldsState);
    },
  });

  if (isLoading) {
    messageApi.open({
      type: "loading",
      content: "Verileriniz işleniyor...",
      duration: 0,
    });
  }

  const onSubmitHandler = async () => {
    setShowProductAddModalState(false);
    let a = Form.getFieldValue();
    setFormFieldsState(Form.getFieldValue());
    if (Object.keys(a).length === 0) return "";

    await mutateAsync();

    if (isSuccess) {
      messageApi.destroy();
      messageApi.success("Verileriniz başarı ile işlendi").then((data) => {
        refetch();
      });
    }
    if (isError) {
      messageApi.destroy();
      messageApi.error("Hata");
    }
  };

  return (
    <ModalComponent
      title="Ürün Ekleme Ekranı"
      openState={showProductAddModalState}
      closeModalHandler={onSubmitHandler}
      okButtonLabel={"Ürünü Ekle"}
      cancelButtonLabel={"Vazgeç"}
      footer={[
        <Button
          onClick={onSubmitHandler}
          form="addProductForm"
          key="submit"
          htmlType="submit"
          type="primary"
        >
          Ürünü Ekle
        </Button>,
      ]}
    >
      {contextHolder}

      <AddProductForm form={Form} />
    </ModalComponent>
  );
};

export default AddProductModalContainer;
