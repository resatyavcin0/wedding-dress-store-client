import React, { Fragment, useEffect, useState } from "react";
import MainCore from "../core/Main";

//containers
import ProductDetailDrawer from "../containers/product/ProductDetailDrawer";
import AddProductModalContainer from "../containers/product/AddProductModalContainer";
import AvailableProductDateRangeModalContainer from "../containers/product/AvailableProductDateRangeModalContainer";

//utils
import { Button, Card, Input, Spin, Tabs, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  const [showProductDetailDrawerState, setShowProductDetailDrawerState] =
    useState(false);
  const [showProductAddModalState, setShowProductAddModalState] =
    useState(false);
  const [showProductAvailableModalState, setShowProductAvailableModalState] =
    useState(false);
  const [typeOfProductState, setTypeOfProductState] = useState("GELINLIK");
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState();

  const { isLoading, data, refetch } = useQuery([typeOfProductState], {
    queryKey: ["products"],
    queryFn: async () =>
      await fetch(
        `http://localhost:8443/product/list?productCategory=${typeOfProductState}`
      ).then((res) => res.json()),
  });

  const openProductDetailDrawer = () => {
    if (product) setShowProductDetailDrawerState(true);
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

      <Input
        style={{ margin: "20px 0" }}
        onChange={(e) => setSearch(e.target.value)}
      />

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

          {data?.data
            ?.filter((data) =>
              data?.productName
                .trim()
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((product, key) => (
              <Fragment key={key}>
                <Card title={product?.productCode}>
                  <div style={{ display: "flex" }}>
                    <a
                      style={{ flex: 1 }}
                      onClick={() => {
                        openProductAvailableModalHandler();
                        openProductDetailDrawer();
                        setProduct(product);
                      }}
                    >
                      {product?.productName}{" "}
                    </a>

                    {!product?.isSent ? (
                      <Tag color="success">Kullanılabilir</Tag>
                    ) : (
                      <Tag color="error">Kullanılamaz</Tag>
                    )}
                  </div>
                </Card>

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

      <ProductDetailDrawer
        showProductDetailDrawerState={showProductDetailDrawerState}
        setShowProductDetailDrawerState={setShowProductDetailDrawerState}
        product={product}
      />

      <AddProductModalContainer
        showProductAddModalState={showProductAddModalState}
        setShowProductAddModalState={setShowProductAddModalState}
        refetch={refetch}
      />
    </MainCore>
  );
};

export default ProductsPage;
