import React from "react";

import DrawerComponent from "../../components/DrawerComponent";
const ProductDetailDrawer = ({
  showProductDetailDrawerState,
  setShowProductDetailDrawerState,
}) => {
  const closeProductDetailDrawerHandler = () => {
    setShowProductDetailDrawerState(false);
  };
  return (
    <DrawerComponent
      title={"Ürün Detay"}
      closeDrawerHandler={closeProductDetailDrawerHandler}
      showDrawerState={showProductDetailDrawerState}
    >
      kwefnwe
    </DrawerComponent>
  );
};

export default ProductDetailDrawer;
