import React, { useEffect, useState } from "react";
import MainCore from "../core/Main";

//containers
import ProductDetailDrawer from "../containers/product/ProductDetailDrawer";
import AddProductModalContainer from "../containers/product/AddProductModalContainer";
import AvailableProductDateRangeModalContainer from "../containers/product/AvailableProductDateRangeModalContainer";

//utils
import { Button, Card, Spin, Tabs } from "antd";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  const [showProductDetailDrawerState, setShowProductDetailDrawerState] =
    useState(false);
  const [showProductAddModalState, setShowProductAddModalState] =
    useState(false);
  const [showProductAvailableModalState, setShowProductAvailableModalState] =
    useState(false);
  const [typeOfProductState, setTypeOfProductState] = useState("GELINLIK");

  const { isLoading, data, refetch } = useQuery([typeOfProductState], {
    queryKey: ["products"],
    queryFn: async () =>
      await fetch(
        `http://localhost:8080/products?productType=${typeOfProductState}`
      ).then((res) => res.json()),
  });

  const openProductDetailDrawer = () => {
    setShowProductDetailDrawerState(true);
  };

  const openProductAddModalHandler = () => {
    setShowProductAddModalState(true);
  };

  const openProductAvailableModalHandler = () => {
    setShowProductAvailableModalState(true);
  };

  const onChangeHandler = (key) => {
    setTypeOfProductState(key);
    refetch();
  };

  const items = [
    {
      key: "GELINLIK",
      label: `Gelinlik`,
    },
    {
      key: "NISANLIK",
      label: `Nişanlık`,
    },
    {
      key: "KINALIK",
      label: `Kınalık`,
    },
  ];

  return (
    <MainCore
      title={"Ürünler"}
      subTitle={
        "Bu sayfada tüm ürün kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <Button
        onClick={openProductAddModalHandler}
        type="primary"
        style={{ margin: "10px 0 20px 0" }}
      >
        Ürün Ekle
      </Button>
      <Tabs defaultActiveKey="1" items={items} onChange={onChangeHandler} />
      <Spin spinning={isLoading}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 340px)",
            justifyContent: "center",
            marginTop: 40,
            gap: 20,
          }}
        >
          {data?.map((product, key) => (
            <Card
              key={key}
              title={product?.productCode}
              extra={
                <>
                  <a onClick={openProductDetailDrawer}>Detay </a>
                  {" |"}
                  <a onClick={openProductAvailableModalHandler}>
                    {" "}
                    Müsaitlik Kontrol
                  </a>
                </>
              }
            >
              {product?.productName}
            </Card>
          ))}
        </div>
      </Spin>
      <ProductDetailDrawer
        showProductDetailDrawerState={showProductDetailDrawerState}
        setShowProductDetailDrawerState={setShowProductDetailDrawerState}
      />
      <AddProductModalContainer
        showProductAddModalState={showProductAddModalState}
        setShowProductAddModalState={setShowProductAddModalState}
      />
      <AvailableProductDateRangeModalContainer
        showProductAvailableModalState={showProductAvailableModalState}
        setShowProductAvailableModalState={setShowProductAvailableModalState}
      />
    </MainCore>
  );
};

export default ProductsPage;
