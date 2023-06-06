import React from "react";

//utils
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FilterComponent = () => {
  return (
    <>
      <Input
        placeholder="Randevulu kişilerde arayınız."
        prefix={<SearchOutlined />}
        size="large"
        style={{ marginBottom: 20 }}
      />
    </>
  );
};

export default FilterComponent;
