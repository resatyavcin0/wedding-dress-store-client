import React, { useState } from "react";
import MainCore from "../core/Main";

//components
import TableComponent from "../components/TableComponent";

//containers
import InvoicePaidModalContainer from "../containers/pendingPayments/InvoicePaidModalContainer";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

const CostumersPage = () => {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const openInvoiceModalHandler = () => {
    setShowInvoiceModal(true);
  };

  const columns = [
    {
      title: "İsim",
      dataIndex: "firstName",
      key: "id",
      render: (text, column) =>
        column?.appointments?.length > 0 ? (
          <a onClick={openInvoiceModalHandler}>{text}</a>
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

  const { isLoading, data } = useQuery([], {
    queryKey: ["costumers"],
    queryFn: async () =>
      await fetch(`http://localhost:8080/costumers`).then((res) => res.json()),
  });

  console.log(data);
  return (
    <MainCore
      title={"Müşteriler"}
      subTitle={
        "Bu sayfada tüm müşteri kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <Spin spinning={isLoading}>
        <TableComponent columns={columns} data={data} />
      </Spin>
      <InvoicePaidModalContainer
        showInvoiceModal={showInvoiceModal}
        setShowInvoiceModal={setShowInvoiceModal}
      />
    </MainCore>
  );
};

export default CostumersPage;
