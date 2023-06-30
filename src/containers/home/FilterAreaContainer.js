import React from "react";
import { Col, Row, Select, DatePicker, Button } from "antd";

const FilterAreaContainer = ({
  selectFilterContent,
  setSelectFilterContent,
  selectCostumDate,
  setSelectCostumDate,
  setIsRefetchStatistic,
}) => {
  const selectCostumDateHandler = () => {
    setSelectCostumDate(!selectCostumDate);
  };

  const onChangeHandler = async (key) => {
    setSelectFilterContent(key);
    setIsRefetchStatistic(true);
  };

  const onDatePickerHandler = (dates, dateStrings) => {
    setSelectFilterContent(dateStrings);
    setIsRefetchStatistic(true);
  };

  return (
    <Row
      style={{
        marginBottom: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {!selectCostumDate && (
        <Col>
          <Select
            onChange={onChangeHandler}
            style={{ width: 100 }}
            defaultValue={selectFilterContent}
            options={[
              { value: "daily", label: "Günlük" },
              { value: "monthly", label: "Aylık" },
              { value: "yearly", label: "Yıllık" },
            ]}
          />
        </Col>
      )}

      {selectCostumDate && (
        <Col>
          <DatePicker.RangePicker
            onChange={onDatePickerHandler}
            style={{ width: 300 }}
          />
        </Col>
      )}

      <Col>
        <Button onClick={selectCostumDateHandler} type="primary">
          {selectCostumDate
            ? "Tarihi Kendin Gir"
            : "Belirli Tarih Aralıklarını Seç"}
        </Button>
      </Col>
    </Row>
  );
};

export default FilterAreaContainer;
