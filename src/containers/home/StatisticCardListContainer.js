import React, { Fragment, useEffect, useState } from "react";

//containers
import StaticticCardContainer from "./StaticticCardContainer";

//containers
import PieChartComponent from "../../components/PieChartComponent";
import BarChartComponent from "../../components/BarChartComponent";

//utils
import { Row, Spin, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";

const CARD_TITLE_ENUM = {
  daily: "Günlük",
  monthly: "Aylık",
  yearly: "Yıllık",
};

const StatisticCardListContainer = ({
  selectFilterContent,
  selectCostumDate,
  isRefetchStatistic,
  setIsRefetchStatistic,
}) => {
  const { isLoading, data, refetch, isFetched } = useQuery({
    queryKey: ["statistic"],
    queryFn: async () =>
      await fetch(`http://localhost:8080/statistic`).then((res) => res.json()),
  });

  useEffect(() => {
    refetch();

    return () => setIsRefetchStatistic(false);
  }, [isRefetchStatistic]);

  return (
    <Spin spinning={isLoading}>
      <Row gutter={16}>
        {data
          ?.filter((item) => item?.statisticType === "string")
          ?.map((item, i) => (
            <Fragment key={i}>
              {item?.id === "earning" ? (
                <StaticticCardContainer
                  title={
                    selectCostumDate && typeof selectFilterContent === "object"
                      ? "Belirtilen Tarihlerde" + " " + item?.title
                      : CARD_TITLE_ENUM[selectFilterContent] + " " + item?.title
                  }
                >
                  <Statistic value={item?.value} prefix={"₺"} />
                </StaticticCardContainer>
              ) : (
                <>
                  <StaticticCardContainer
                    title={
                      selectCostumDate &&
                      typeof selectFilterContent === "object"
                        ? "Belirtilen Tarihlerde" + " " + item?.title
                        : CARD_TITLE_ENUM[selectFilterContent] +
                          " " +
                          item?.title
                    }
                  >
                    <Statistic
                      valueStyle={{
                        color: item?.direction === "up" ? "#3f8600" : "#C1292E",
                      }}
                      value={item?.value}
                      precision={2}
                      prefix={
                        item?.direction === "up" ? (
                          <ArrowUpOutlined />
                        ) : (
                          <ArrowDownOutlined />
                        )
                      }
                      suffix="%"
                    />
                  </StaticticCardContainer>
                </>
              )}
            </Fragment>
          ))}
      </Row>

      <Row gutter={16} style={{ margin: "20px 0" }}>
        {data
          ?.filter((item) => item?.statisticType === "array")
          ?.map((item, i) => (
            <Fragment key={i}>
              {item?.id === "ratioAppointmentTypes" ? (
                <StaticticCardContainer
                  title={
                    selectCostumDate && typeof selectFilterContent === "object"
                      ? "Belirtilen Tarihlerde" + " " + item?.title
                      : CARD_TITLE_ENUM[selectFilterContent] + " " + item?.title
                  }
                >
                  <PieChartComponent value={item?.value} />
                </StaticticCardContainer>
              ) : (
                <>
                  <StaticticCardContainer
                    title={
                      selectCostumDate &&
                      typeof selectFilterContent === "object"
                        ? "Belirtilen Tarihlerde" + " " + item?.title
                        : CARD_TITLE_ENUM[selectFilterContent] +
                          " " +
                          item?.title
                    }
                  >
                    <BarChartComponent value={item?.value} />
                  </StaticticCardContainer>
                </>
              )}
            </Fragment>
          ))}
      </Row>
    </Spin>
  );
};

export default StatisticCardListContainer;
