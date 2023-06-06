import React from "react";

//components
import ModalComponent from "../../components/ModalComponent";
import { Alert, Badge, Card, Descriptions, Space, Typography } from "antd";

const InvoicePaidModalContainer = ({
  showInvoiceModal,
  setShowInvoiceModal,
}) => {
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
        <Descriptions
          bordered
          title="Müşteri Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Ad Soyad">Mehmet Aksu</Descriptions.Item>
          <Descriptions.Item label="Birincil Telefon Numarası">
            +90 (545) 676 ** **
          </Descriptions.Item>
          <Descriptions.Item label="İkincil Telefon Numarası">
            +90 (545) 676 ** **
          </Descriptions.Item>
          <Descriptions.Item label="Adres">
            Mehmet Akif, Kale Cad, Mehmet Akif Mahallesi Fatih Bulv, İpekyolu
            Sk. No:34, 34920 Sultanbeyli/İstanbul
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Ürün Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Ürün Tipi">Gelinlik</Descriptions.Item>
          <Descriptions.Item label="Ürün Kodu">GT-50</Descriptions.Item>
          <Descriptions.Item label="Ürün Fiyatı">3500₺</Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Event Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Event Günü">22/09/2000</Descriptions.Item>
          <Descriptions.Item label="Birincil Prova Günü">
            22/09/2000
          </Descriptions.Item>
          <Descriptions.Item label="İkincil Prova Günü">-</Descriptions.Item>
          <Descriptions.Item label="Ürün Teslim Tarihi">
            22/09/2000
          </Descriptions.Item>
          <Descriptions.Item label="Ürün Veriş Tarihi">
            22/09/2000
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          title="Ödeme Bilgileri"
          size={"small"}
          style={{ marginBottom: 20 }}
        >
          <Descriptions.Item label="Ödeme Durumu">
            <Badge status="processing" text="Devam Ediyor" />
          </Descriptions.Item>
          <Descriptions.Item label="Toplam Tutar">3500₺</Descriptions.Item>
          <Descriptions.Item label="Kapora">1000₺</Descriptions.Item>
          <Descriptions.Item label="Taksitler">
            <Typography.Text strong>1. Taksit:</Typography.Text> Mehmet Aksu -
            1000₺ <br />
            <Typography.Text strong>2. Taksit:</Typography.Text> Mehmet Aksu -
            1000₺ <br />
          </Descriptions.Item>
          <Descriptions.Item label="Kalan Tutar">
            <Typography.Text strong mark>
              3000₺
            </Typography.Text>
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
