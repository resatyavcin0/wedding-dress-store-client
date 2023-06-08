import React from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import AddAppointmentForm from "../../components/forms/addAppointmentForm";

const AddAppointmentModalContainer = ({
  showAppointmentAddModalState,
  setShowAppointmentAddModalState,
}) => {
  return (
    <ModalComponent
      title="Randevu Ekleme Ekranı"
      openState={showAppointmentAddModalState}
      closeModalHandler={() => setShowAppointmentAddModalState(false)}
      okButtonLabel={"Randevu Ekle"}
      cancelButtonLabel={"Vazgeç"}
    >
      <AddAppointmentForm />
    </ModalComponent>
  );
};

export default AddAppointmentModalContainer;
