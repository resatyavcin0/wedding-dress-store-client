import React, { useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import GetPaidForm from "../../components/forms/getPaidForm";

const GetPaidModalContainer = ({ showGetPaidModal, setShowGetPaidModal }) => {
  return (
    <ModalComponent
      title="Ödeme Ekranı"
      openState={showGetPaidModal}
      closeModalHandler={() => setShowGetPaidModal(false)}
      okButtonLabel={"Ödemeyi Gerçekleştir"}
      cancelButtonLabel={"Vazgeç"}
    >
      <GetPaidForm />
    </ModalComponent>
  );
};

export default GetPaidModalContainer;
