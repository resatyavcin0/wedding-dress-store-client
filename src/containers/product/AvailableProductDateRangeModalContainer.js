import React, { useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import { Calendar } from "antd";
import dayjs from "dayjs";

const disableDayHandler = (selectedValue, arr) => {
  let bolleanValue = undefined;
  let count = 0;
  arr.map((item) => {
    if (count == 0) {
      count++;
      bolleanValue =
        selectedValue?.isAfter(item.firstDate) &&
        selectedValue?.isBefore(item.secondDate);
    } else {
      bolleanValue =
        bolleanValue ||
        (selectedValue?.isAfter(item.firstDate) &&
          selectedValue?.isBefore(item.secondDate));
    }
  });

  return bolleanValue;
};

const AvailableProductDateRangeModalContainer = ({
  showProductAvailableModalState,
  setShowProductAvailableModalState,
}) => {
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2023-06-25"));
  const onSelect = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <ModalComponent
      width={800}
      title="Ürün Müsaitlik Durumu Ekranı"
      openState={showProductAvailableModalState}
      closeModalHandler={() => setShowProductAvailableModalState(false)}
      okButtonLabel={"Tamam"}
      cancelButtonLabel={"Vazgeç"}
    >
      <Calendar
        fullscreen={false}
        onSelect={onSelect}
        disabledDate={(selectedValue) =>
          disableDayHandler(selectedValue, [
            { firstDate: "2023-06-01", secondDate: "2023-06-07" },
            { firstDate: "2023-06-12", secondDate: "2023-06-15" },
            { firstDate: "2023-06-22", secondDate: "2023-06-25" },
          ])
        }
      />
    </ModalComponent>
  );
};

export default AvailableProductDateRangeModalContainer;
