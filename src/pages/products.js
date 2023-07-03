import React, { Fragment, useEffect, useState } from "react";
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
        `http://localhost:8443/product/groupByCategory?productCategory=${typeOfProductState}`
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
          {data?.data?.length === 0 && "Ürün Bulunmamaktadır."}

          {data?.data?.map((product, key) => (
            <Fragment key={key}>
              <Card title={product?.productCode}>
                <a onClick={openProductAvailableModalHandler}>
                  {" "}
                  {product?.productName[0]}({product?.count})
                </a>
              </Card>

              {/* <ProductDetailDrawer
                showProductDetailDrawerState={showProductDetailDrawerState}
                setShowProductDetailDrawerState={
                  setShowProductDetailDrawerState
                }
                product={product}
              /> */}

              {/* <AvailableProductDateRangeModalContainer
                showProductAvailableModalState={showProductAvailableModalState}
                setShowProductAvailableModalState={
                  setShowProductAvailableModalState
                }
                product={product}
              /> */}
            </Fragment>
          ))}
        </div>
      </Spin>

      <AddProductModalContainer
        showProductAddModalState={showProductAddModalState}
        setShowProductAddModalState={setShowProductAddModalState}
        refetch={refetch}
      />
    </MainCore>
  );
};

export default ProductsPage;
