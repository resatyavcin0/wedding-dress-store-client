import React, { useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import GetPaidForm from "../../components/forms/getPaidForm";

const GetPaidModalContainer = () => {
  const [showGetPaidModal, setShowGetPaidModal] = useState(false);

  return (
    <ModalComponent
      title="Ödeme Ekranı"
      openState={showGetPaidModal}
      setOpenState={setShowGetPaidModal}
      okButtonLabel={"Ödemeyi Gerçekleştir"}
      cancelButtonLabel={"Vazgeç"}
    >
      <GetPaidForm />
    </ModalComponent>
  );
};

export default GetPaidModalContainer;
