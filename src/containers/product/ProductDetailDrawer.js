import React from "react";

import DrawerComponent from "../../components/DrawerComponent";
import { useQuery } from "@tanstack/react-query";
import { Badge, Calendar, Tag, Typography } from "antd";
import moment from "moment";
const ProductDetailDrawer = ({
  showProductDetailDrawerState,
  setShowProductDetailDrawerState,
  product,
}) => {
  const closeProductDetailDrawerHandler = () => {
    setShowProductDetailDrawerState(false);
  };

  const {
    isLoading,
    data: ewf,
    refetch,
  } = useQuery([], {
    queryKey: ["productssss"],
    queryFn: async () =>
      await fetch(`http://localhost:8443/product/get/${product?._id}`).then(
        (res) => res.json()
      ),
  });

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const activeElement = product?.history.filter((item) => item.isActive[0]);

  console.log(activeElement);
  return (
    <DrawerComponent
      title={"Ürün Detay"}
      closeDrawerHandler={closeProductDetailDrawerHandler}
      showDrawerState={showProductDetailDrawerState}
    >
      <Typography.Title level={3}>{product?.productName}</Typography.Title>

      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        style={{ marginTop: 60 }}
        disabledDate={(currentDate) =>
          currentDate.isAfter(
            moment(
              activeElement.istanbulWedding
                ? activeElement.istanbulWedding
                : activeElement.packageDepartureDate
            )
          ) && currentDate.isBefore(moment(product?.reusableDate))
        }
      />
    </DrawerComponent>
  );
};

export default ProductDetailDrawer;
