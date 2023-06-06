import React from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddProductForm from "../../components/forms/addProductForm";

const AddProductModalContainer = ({
  showProductAddModalState,
  setShowProductAddModalState,
}) => {
  return (
    <ModalComponent
      title="Ürün Ekleme Ekranı"
      openState={showProductAddModalState}
      closeModalHandler={() => setShowProductAddModalState(false)}
      okButtonLabel={"Ürünü Ekle"}
      cancelButtonLabel={"Vazgeç"}
    >
      <AddProductForm />
    </ModalComponent>
  );
};

export default AddProductModalContainer;
