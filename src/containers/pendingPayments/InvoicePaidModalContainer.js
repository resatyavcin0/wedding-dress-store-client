import React, { useEffect } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import {
  Alert,
  Badge,
  Card,
  Checkbox,
  Descriptions,
  Space,
  Spin,
  Switch,
  Typography,
} from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Tabs } from "antd";
import { useState } from "react";
import moment from "moment";
import axios from "axios";

const InvoicePaidModalContainer = ({
  showInvoiceModal,
  setShowInvoiceModal,
  bringCostumer,
}) => {
  const [selectedAppointment, setSelectedAppointment] = useState();

  const { data: dataAppointment } = useQuery([selectedAppointment], {
    queryKey: ["dşwkefnm"],
    queryFn: async () =>
      await fetch(
        `http://localhost:8443/appointment/get/${selectedAppointment}`
      ).then((res) => res.json()),
  });

  const findActive = () =>
    dataAppointment?.data?.product?.history?.find((item) => item.isActive);

  console.log(findActive());

  const { isLoading, isSuccess, isError, mutateAsync } = useMutation({
    mutationFn: () => {
      return axios.patch(
        `http://localhost:8443/product/receive/${
          dataAppointment?.data?.product?._id
        }/${findActive()._id}`
      );
    },
  });

  useEffect(() => {
    setSelectedAppointment(bringCostumer?.appointments?.[0]);
  }, [showInvoiceModal, selectedAppointment]);

  const onChange = (key) => {
    setSelectedAppointment(key);
  };
  return (
    <ModalComponent
      title={"E-ÇAĞLAR DETAY GÖRÜNTÜLEME"}
      openState={showInvoiceModal}
      width={900}
      closeModalHandler={() => setShowInvoiceModal(false)}
      okButtonLabel={"Tamam"}
      cancelButtonLabel={"Vazgeç"}
    >
      <Card
        style={{ margin: "20px 0" }}
        title={"ÇAĞLAR GELİNLİK VE KUAFÖR"}
        extra={
          <Space direction="vertical" style={{ maxWidth: 300 }}>
            <Typography.Title level={5}>ÇAĞLAR GELİNLİK</Typography.Title>
            <Typography.Paragraph level={5}>
              Mehmet Akif, Kale Cad, Mehmet Akif Mahallesi Fatih Bulv, İpekyolu
              Sk. No:34, 34920 Sultanbeyli/İstanbul
            </Typography.Paragraph>
          </Space>
        }
      >
        <Checkbox onChange={() => mutateAsync()}>Ürün Teslim Alındı</Checkbox>
        <Tabs
          items={bringCostumer?.appointments?.map((item, i) => {
            return { key: item, label: `${i + 1}. Randevu` };
          })}
          onChange={onChange}
        />
        <Descriptions
          bordered
          title="Müşteri Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Ad Soyad">
            {bringCostumer?.firstName} {bringCostumer?.lastName}
          </Descriptions.Item>
          <Descriptions.Item label="Birincil Telefon Numarası">
            {bringCostumer?.primaryPhoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="İkincil Telefon Numarası">
            {bringCostumer?.secondaryPhoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Adres">
            {bringCostumer?.address}
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Ürün Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Ürün Tipi">
            {dataAppointment?.data?.product?.productCategory}{" "}
          </Descriptions.Item>
          <Descriptions.Item label="Ürün Adı">
            {dataAppointment?.data?.product?.productName}{" "}
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Event Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Event Günü">
            {moment(dataAppointment?.data?.eventDate).format("DD/MM/YYYY")}
          </Descriptions.Item>
          <Descriptions.Item label="Birincil Prova Günü">
            {moment(dataAppointment?.data?.firstRehearsalDate).format(
              "DD/MM/YYYY"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="İkincil Prova Günü">
            {moment(dataAppointment?.data?.secondRehearsalDate).format(
              "DD/MM/YYYY"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Ürün Veriş Tarihi">
            {moment(dataAppointment?.data?.packageArrivalDate).format(
              "DD/MM/YYYY"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Ürün Alış Tarihi">
            {moment(dataAppointment?.data?.packageDepartureDate).format(
              "DD/MM/YYYY"
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Toplam Tutar">
            {dataAppointment?.data?.totalAmount}₺
          </Descriptions.Item>
        </Descriptions>

        <Alert
          type="warning"
          showIcon
          message={
            "Bu detay bilgisi amaçlıdır. Resmi olarak bir geçerliliği bulunmamakla beraber, müşteri ve mal sahibinin güven içerisinde alışverişine katkı sunmayı amaçlamaktadır."
          }
        />
      </Card>
    </ModalComponent>
  );
};

export default InvoicePaidModalContainer;
