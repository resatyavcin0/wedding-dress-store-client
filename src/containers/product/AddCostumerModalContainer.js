import React, { useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddCostumerForm from "../../components/forms/addCostumerForm";
import { useMutation } from "@tanstack/react-query";
import { Button, message } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";

const AddCostumerModalContainer = ({
  showCostumerAddModalState,
  setShowCostumerAddModalState,
  refetch,
}) => {
  const [Form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [formFieldsState, setFormFieldsState] = useState();

  const { isLoading, isSuccess, isError, mutateAsync } = useMutation({
    mutationFn: () => {
      return axios.post("http://localhost:8080/costumers", formFieldsState);
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
    setShowCostumerAddModalState(false);
    let a = Form.getFieldValue();
    setFormFieldsState(Form.getFieldValue());
    if (Object.keys(a).length === 0) return "";
    await mutateAsync();

    if (isSuccess) {
      messageApi.destroy();
      messageApi.success("Verileriniz başarı ile işlendi").then(() => {
        refetch();
      });
    }
    if (isError) {
      messageApi.destroy();
      messageApi.error("Hata").then(() => {
        refetch();
      });
    }
  };
  return (
    <ModalComponent
      title="Müşteri Ekleme Ekranı"
      openState={showCostumerAddModalState}
      closeModalHandler={onSubmitHandler}
      okButtonLabel={"Müşteriyi Ekle"}
      cancelButtonLabel={"Vazgeç"}
      footer={[
        <Button
          onClick={onSubmitHandler}
          form="addCostumerForm"
          key="submit2"
          htmlType="submit"
          type="primary"
        >
          Müşteriyi Ekle
        </Button>,
      ]}
    >
      {contextHolder}

      <AddCostumerForm form={Form} />
    </ModalComponent>
  );
};

export default AddCostumerModalContainer;
