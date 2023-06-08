import React from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddCostumerForm from "../../components/forms/addCostumerForm";

const AddCostumerModalContainer = ({
  showCostumerAddModalState,
  setShowCostumerAddModalState,
}) => {
  return (
    <ModalComponent
      title="Müşteri Ekleme Ekranı"
      openState={showCostumerAddModalState}
      closeModalHandler={() => setShowCostumerAddModalState(false)}
      okButtonLabel={"Müşteriyi Ekle"}
      cancelButtonLabel={"Vazgeç"}
    >
      <AddCostumerForm />
    </ModalComponent>
  );
};

export default AddCostumerModalContainer;
