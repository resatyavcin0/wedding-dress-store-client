import React, { useState } from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import { Card, Descriptions, QRCode, Space, Typography } from "antd";

const InvoicePaidModalContainer = ({
  showInvoiceModal,
  setShowInvoiceModal,
}) => {
  return (
    <ModalComponent
      title={"E-Fatura"}
      openState={showInvoiceModal}
      width={800}
      closeModalHandler={() => setShowInvoiceModal(false)}
      okButtonLabel={"Tamam"}
      cancelButtonLabel={"Vazgeç"}
    >
      <Card
        style={{ margin: "20px 0" }}
        title={<QRCode value={"text" || "-"} size={100} />}
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
        <Descriptions
          bordered
          title="Müşteri Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Ödeme Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </Descriptions.Item>
        </Descriptions>
        <Typography.Paragraph disabled>
          Bu fatura bilgi amaçlıdır. Resmi olarak bir geçerliliği bulunmamakla
          beraber, müşteri ve mal sahibinin güven içerisinde alışverişine katkı
          sunmayı amaçlamaktadır.
        </Typography.Paragraph>
      </Card>
    </ModalComponent>
  );
};

export default InvoicePaidModalContainer;
