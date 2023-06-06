import React, { useState } from "react";
import MainCore from "../core/Main";

//components
import TableComponent from "../components/TableComponent";

//containers
import InvoicePaidModalContainer from "../containers/pendingPayments/InvoicePaidModalContainer";

const CostumersPage = () => {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const openInvoiceModalHandler = () => {
    setShowInvoiceModal(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a onClick={openInvoiceModalHandler}>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  return (
    <MainCore
      title={"Müşteriler"}
      subTitle={
        "Bu sayfada tüm müşteri kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <TableComponent columns={columns} data={data} />
      <InvoicePaidModalContainer
        showInvoiceModal={showInvoiceModal}
        setShowInvoiceModal={setShowInvoiceModal}
      />
    </MainCore>
  );
};

export default CostumersPage;
