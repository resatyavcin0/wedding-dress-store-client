import React, { useState } from "react";
import MainCore from "../core/Main";

//components
import TableComponent from "../components/TableComponent";

//containers
import InvoicePaidModalContainer from "../containers/pendingPayments/InvoicePaidModalContainer";
import AddCostumerModalContainer from "../containers/product/AddCostumerModalContainer";

import { Button, Input, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import AddAppointmentModalContainer from "../containers/appointment/AddAppointmentModalContainer";

const CostumersPage = () => {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [search, setSearch] = useState("");
  const [bringCostumer, setBringCostumer] = useState({});
  const [showCostumerAddModalState, setShowCostumerAddModalState] =
    useState(false);
  const [showAppointmentFormModal, setShowAppointmentFormModal] =
    useState(false);
  const [costu, setCostu] = useState(false);

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
      key: "firstName",
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
      key: "lastName",
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
      key: "primaryPhoneNumber",
    },
    {
      title: "İkincil Telefon Numarası",
      dataIndex: "secondaryPhoneNumber",
      key: "secondaryPhoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Aksiyonlar",
      dataIndex: "actions",
      key: "action",
      render: (text, column) => {
        return (
          <Button
            onClick={() => {
              setShowAppointmentFormModal(true);
              setCostu(column?._id);
            }}
          >
            Randevu Al
          </Button>
        );
      },
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

      <Input
        style={{ marginBottom: 20 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Spin spinning={isLoading}>
        <TableComponent
          columns={columns}
          data={data?.costumers?.filter((data) =>
            data?.firstName.trim().toLowerCase().includes(search.toLowerCase())
          )}
          pagination={false}
        />
      </Spin>
      <InvoicePaidModalContainer
        showInvoiceModal={showInvoiceModal}
        setShowInvoiceModal={setShowInvoiceModal}
        bringCostumer={bringCostumer}
      />
      <AddAppointmentModalContainer
        costu={costu}
        showAppointmentAddModalState={showAppointmentFormModal}
        setShowAppointmentAddModalState={setShowAppointmentFormModal}
      />
    </MainCore>
  );
};

export default CostumersPage;
