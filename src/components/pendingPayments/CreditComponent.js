import React from "react";

//utils
import { Button, Card } from "antd";
import { WalletOutlined } from "@ant-design/icons";

const CreditsComponent = ({ credit, openGetPaymentModalHandler }) => {
  return (
    <Card
      title={credit?.name}
      bordered={false}
      style={{
        width: "100%",
      }}
    >
      {!credit?.isFinish && (
        <Button
          onClick={openGetPaymentModalHandler}
          type="primary"
          icon={<WalletOutlined />}
        >
          Ödeme Al
        </Button>
      )}
    </Card>
  );
};

export default CreditsComponent;
