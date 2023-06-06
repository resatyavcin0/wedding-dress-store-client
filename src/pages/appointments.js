import React, { useMemo } from "react";
import MainCore from "../core/Main";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// // import moment from "moment";
// import "moment/locale/tr";

// const localizer = momentLocalizer();

const AppointmentsPage = () => {
  return (
    <MainCore
      title={"Randevular"}
      subTitle={
        "Bu sayfada geçmişteki tüm randevular gözükmektedir. İçlerinde aramalar yapabilir ve onları yönetebilirsiniz."
      }
    >
      {/* <Calendar
        // localizer={localizer}
        // events={["09/06/2023"]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      /> */}
    </MainCore>
  );
};

export default AppointmentsPage;
