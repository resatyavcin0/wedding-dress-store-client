import React from "react";
import MainCore from "../core/Main";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const AppointmentsPage = () => {
  const localizer = momentLocalizer(moment);
  return (
    <MainCore
      title={"Randevular"}
      subTitle={
        "Bu sayfada geçmişteki tüm randevular gözükmektedir. İçlerinde aramalar yapabilir ve onları yönetebilirsiniz."
      }
    >
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </MainCore>
  );
};

export default AppointmentsPage;
