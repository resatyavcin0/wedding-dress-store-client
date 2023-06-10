import React, { useState } from "react";
import MainCore from "../core/Main";

//containers
import FilterAreaContainer from "../containers/home/FilterAreaContainer";
import StatisticCardListContainer from "../containers/home/StatisticCardListContainer";

const HomePage = () => {
  const [selectCostumDate, setSelectCostumDate] = useState(false);
  const [selectFilterContent, setSelectFilterContent] = useState("daily");
  const [isRefetchStatistic, setIsRefetchStatistic] = useState(false);

  return (
    <MainCore
      title={"Ana Sayfa"}
      subTitle={"Bu sayfa özelinde istatiklerinizi takip edebilirsiniz."}
    >
      <FilterAreaContainer
        selectFilterContent={selectFilterContent}
        setSelectFilterContent={setSelectFilterContent}
        selectCostumDate={selectCostumDate}
        setSelectCostumDate={setSelectCostumDate}
        setIsRefetchStatistic={setIsRefetchStatistic}
      />
      <StatisticCardListContainer
        selectCostumDate={selectCostumDate}
        selectFilterContent={selectFilterContent}
        isRefetchStatistic={isRefetchStatistic}
        setIsRefetchStatistic={setIsRefetchStatistic}
      />
    </MainCore>
  );
};

export default HomePage;
