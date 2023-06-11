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
  product,
}) => {
  const [selectedValue, setSelectedValue] = useState();

  const onSelect = (newValue) => {
    setSelectedValue(newValue);
  };

  const productDates = () => {
    return product?.leasedDates
      ? product?.leasedDates?.map((pro) => {
          return {
            firstDate: pro?.leasedDate,
            secondDate: dayjs(pro?.leasedDate)
              .add(2, "day")
              .format("YYYY-MM-DD"),
          };
        })
      : [];
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
          disableDayHandler(selectedValue, productDates())
        }
      />
    </ModalComponent>
  );
};

export default AvailableProductDateRangeModalContainer;
