import React, { useState } from "react";
import MainCore from "../core/Main";

//utils
import { Button, Card, Tabs } from "antd";
import ProductDetailDrawer from "../containers/product/ProductDetailDrawer";
import AddProductModalContainer from "../containers/product/AddProductModalContainer";

const ProductsPage = () => {
  const [showProductDetailDrawerState, setShowProductDetailDrawerState] =
    useState(false);
  const [showProductAddModalState, setShowProductAddModalState] =
    useState(false);

  const openProductDetailDrawer = () => {
    setShowProductDetailDrawerState(true);
  };

  const openProductAddModalHandler = () => {
    setShowProductAddModalState(true);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Gelinlik`,
    },
    {
      key: "2",
      label: `Nişanlık`,
    },
    {
      key: "3",
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
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 340px)",
          justifyContent: "center",
          marginTop: 40,
          gap: 20,
        }}
      >
        <Card
          title="GT-50"
          extra={<a onClick={openProductDetailDrawer}>Detay Sayfasına Git</a>}
        >
          Yakamoz Prenses Gelinlik
        </Card>
      </div>
      <ProductDetailDrawer
        showProductDetailDrawerState={showProductDetailDrawerState}
        setShowProductDetailDrawerState={setShowProductDetailDrawerState}
      />
      <AddProductModalContainer
        showProductAddModalState={showProductAddModalState}
        setShowProductAddModalState={setShowProductAddModalState}
      />
    </MainCore>
  );
};

export default ProductsPage;
