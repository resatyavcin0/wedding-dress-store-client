import React from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddProductForm from "../../components/forms/addProductForm";
import { Button } from "antd";

const AddProductModalContainer = ({
  showProductAddModalState,
  setShowProductAddModalState,
}) => {
  // const { isLoading, data } = useQuery([], {
  //   queryKey: ["employees"],
  //   queryFn: async () =>
  //     await fetch(`http://localhost:8080/products`).then((res) => res.json()),
  // });

  const onSubmitHandler = (values) => {
    setShowProductAddModalState(false);
    console.log(values);
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
        >
          Ürünü Ekle
        </Button>,
      ]}
    >
      <AddProductForm onSubmitHandler={onSubmitHandler} />
    </ModalComponent>
  );
};

export default AddProductModalContainer;
