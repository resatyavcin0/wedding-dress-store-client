import React, { useEffect, useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddAppointmentForm from "../../components/forms/addAppointmentForm";

import { useMutation } from "@tanstack/react-query";
import { Button, message } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";

const AddAppointmentModalContainer = ({
  showAppointmentAddModalState,
  setShowAppointmentAddModalState,
  costu,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [Form] = useForm();
  const [formFieldsState, setFormFieldsState] = useState();
  const [istanbulWedding, setIstanbulWedding] = useState(false);
  const [isPackage, setIsPackage] = useState(false);

  const { isLoading, isSuccess, isError, mutateAsync } = useMutation({
    mutationFn: () => {
      return axios.post("http://localhost:8443/appointment/create", {
        ...formFieldsState,
        costumer: costu,
        isPackage,
        istanbulWedding,
      });
    },
  });

  useEffect(() => {
    if (isLoading) {
      messageApi.open({
        type: "loading",
        content: "Verileriniz işleniyor...",
        duration: 0,
      });
    }

    if (isSuccess) {
      messageApi.destroy();
      messageApi.success("Verileriniz başarı ile işlendi");
    }
    if (isError) {
      messageApi.destroy();
      messageApi.error("Hata");
    }
  }, [isLoading, isSuccess, isError]);

  const onSubmitHandler = async () => {
    let a = Form.getFieldValue();
    setFormFieldsState(Form.getFieldValue());
    if (Object.keys(a).length === 0) return "";
    await mutateAsync();
  };
  return (
    <ModalComponent
      width={600}
      title="Randevu Ekleme Ekranı"
      openState={showAppointmentAddModalState}
      closeModalHandler={() => setShowAppointmentAddModalState(false)}
      okButtonLabel={"Randevu Ekle"}
      cancelButtonLabel={"Vazgeç"}
      footer={[
        <Button
          onClick={onSubmitHandler}
          form="addProductForm"
          key="submit"
          htmlType="submit"
          type="primary"
        >
          Randevu Ekle
        </Button>,
      ]}
    >
      {contextHolder}
      <AddAppointmentForm
        form={Form}
        istanbulWedding={istanbulWedding}
        setIstanbulWedding={setIstanbulWedding}
        isPackage={isPackage}
        setIsPackage={setIsPackage}
      />
    </ModalComponent>
  );
};

export default AddAppointmentModalContainer;
