import React from "react";

//utils
import { Button, Card, Space, Tag } from "antd";
import { PrinterOutlined, WalletOutlined } from "@ant-design/icons";

const CreditsComponent = ({
  credit,
  openGetPaymentModalHandler,
  openInvoiceModalHandler,
}) => {
  return (
    <Card
      title={credit?.name}
      bordered={false}
      style={{
        width: "100%",
      }}
      extra={
        credit?.isFinish ? (
          <Tag color="green"> TAMAMLANDI</Tag>
        ) : (
          <Tag color="red"> TAMAMLANMADI</Tag>
        )
      }
    >
      {!credit?.isFinish ? (
        <Space>
          <Button
            onClick={openGetPaymentModalHandler}
            type="primary"
            icon={<WalletOutlined />}
          >
            Ödeme Al
          </Button>
          <Button onClick={openInvoiceModalHandler} icon={<PrinterOutlined />}>
            Ödeme Geçmişi
          </Button>
        </Space>
      ) : (
        <Button onClick={openInvoiceModalHandler} icon={<PrinterOutlined />}>
          Ödeme Geçmişi
        </Button>
      )}
    </Card>
  );
};

export default CreditsComponent;
