import React, { useState } from "react";
import MainCore from "../core/Main";
import { Badge, Calendar } from "antd";

import "./appointment.css";
import AddAppointmentModalContainer from "../containers/appointment/AddAppointmentModalContainer";
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event。。....",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const AppointmentsPage = () => {
  const [showAppointmentFormModal, setShowAppointmentFormModal] =
    useState(false);

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const onChangeHandler = (day) => {
    console.log(day);
    setShowAppointmentFormModal(true);
  };

  return (
    <MainCore
      title={"Randevular"}
      subTitle={
        "Bu sayfada geçmişteki tüm randevular gözükmektedir. İçlerinde aramalar yapabilir ve onları yönetebilirsiniz."
      }
    >
      <Calendar onChange={onChangeHandler} cellRender={cellRender} />

      <AddAppointmentModalContainer
        showAppointmentAddModalState={showAppointmentFormModal}
        setShowAppointmentAddModalState={setShowAppointmentFormModal}
      />
    </MainCore>
  );
};

export default AppointmentsPage;
