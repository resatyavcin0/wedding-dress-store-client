import React, { useState } from "react";
import MainCore from "../core/Main";

//components
import TableComponent from "../components/TableComponent";

//containers
import InvoicePaidModalContainer from "../containers/pendingPayments/InvoicePaidModalContainer";
import AddCostumerModalContainer from "../containers/product/AddCostumerModalContainer";

import { Button, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";

const CostumersPage = () => {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [bringCostumer, setBringCostumer] = useState({});
  const [showCostumerAddModalState, setShowCostumerAddModalState] =
    useState(false);

  const openInvoiceModalHandler = (column) => {
    setBringCostumer(column);
    setShowInvoiceModal(true);
  };

  const openCostumerAddModalHandler = () => {
    setShowCostumerAddModalState(true);
  };

  const columns = [
    {
      title: "İsim",
      dataIndex: "firstName",
      key: "id",
      render: (text, column) =>
        column?.appointments?.length > 0 ? (
          <a onClick={() => openInvoiceModalHandler(column)}>{text}</a>
        ) : (
          text
        ),
    },
    {
      title: "Soyisim",
      dataIndex: "lastName",
      key: "id",
      render: (text, column) =>
        column?.appointments?.length > 0 ? (
          <a onClick={openInvoiceModalHandler}>{text}</a>
        ) : (
          text
        ),
    },
    {
      title: "Birincil Telefon Numarası",
      dataIndex: "primaryPhoneNumber",
      key: "id",
    },
    {
      title: "İkincil Telefon Numarası",
      dataIndex: "secondaryPhoneNumber",
      key: "id",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "id",
    },
  ];

  const { isLoading, data, refetch } = useQuery([], {
    queryKey: ["costumers"],
    queryFn: async () =>
      await fetch(`http://localhost:8443/costumer/costumer-list`).then((res) =>
        res.json()
      ),
  });

  return (
    <MainCore
      title={"Müşteriler"}
      subTitle={
        "Bu sayfada tüm müşteri kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <Button
        style={{ marginBottom: 20 }}
        type="primary"
        onClick={openCostumerAddModalHandler}
      >
        Müşteri Ekle
      </Button>

      <AddCostumerModalContainer
        showCostumerAddModalState={showCostumerAddModalState}
        setShowCostumerAddModalState={setShowCostumerAddModalState}
        refetch={refetch}
      />
      <Spin spinning={isLoading}>
        <TableComponent columns={columns} data={data?.costumers} />
      </Spin>
      <InvoicePaidModalContainer
        showInvoiceModal={showInvoiceModal}
        setShowInvoiceModal={setShowInvoiceModal}
        bringCostumer={bringCostumer}
      />
    </MainCore>
  );
};

export default CostumersPage;
