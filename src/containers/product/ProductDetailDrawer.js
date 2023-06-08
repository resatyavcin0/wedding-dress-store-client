import React from "react";

import DrawerComponent from "../../components/DrawerComponent";
const ProductDetailDrawer = ({
  showProductDetailDrawerState,
  setShowProductDetailDrawerState,
  product,
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
      {product?.productName}
    </DrawerComponent>
  );
};

export default ProductDetailDrawer;
