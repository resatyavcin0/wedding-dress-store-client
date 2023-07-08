import React from "react";
import MainCore from "../core/Main";
import { Badge, Calendar } from "antd";
import moment from "moment";
import "./appointment.css";
import { useQuery } from "@tanstack/react-query";

const AppointmentsPage = () => {
  const { isLoading, data, refetch, isSuccess } = useQuery({
    queryKey: ["appointment"],
    queryFn: async () =>
      await fetch(`http://localhost:8443/appointment/list`).then((res) =>
        res.json()
      ),
  });

  const forFirstRehearsalDate = (value) =>
    data?.data?.filter(
      (item) =>
        moment(item.firstRehearsalDate).toDate().getMonth() === value.month() &&
        moment(item.firstRehearsalDate).toDate().getDate() === value.date() &&
        moment(item.firstRehearsalDate).toDate().getFullYear() === value.year()
    );

  const forSecondRehearsalDate = (value) =>
    data?.data?.filter(
      (item) =>
        moment(item.secondRehearsalDate).toDate().getMonth() ===
          value.month() &&
        moment(item.secondRehearsalDate).toDate().getDate() === value.date() &&
        moment(item.secondRehearsalDate).toDate().getFullYear() === value.year()
    );

  const dateCellRender = (value) => {
    return (
      <ul className="events">
        {forFirstRehearsalDate(value)?.length !== 0 && (
          <Badge color="blue">
            🎃 Prova: {forFirstRehearsalDate(value)?.length}
          </Badge>
        )}

        {forSecondRehearsalDate(value)?.length !== 0 && (
          <Badge color="blue">
            🎃 2. Prova: {forSecondRehearsalDate(value)?.length}
          </Badge>
        )}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date" && !isLoading) return dateCellRender(current);
    return info.originNode;
  };

  const onChangeHandler = (day) => {
    console.log(day);
  };

  return (
    <MainCore
      title={"Randevular"}
      subTitle={
        "Bu sayfada geçmişteki tüm randevular gözükmektedir. İçlerinde aramalar yapabilir ve onları yönetebilirsiniz."
      }
    >
      <Calendar onChange={onChangeHandler} cellRender={cellRender} />
    </MainCore>
  );
};

export default AppointmentsPage;
