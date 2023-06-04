import React from "react";

import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FilterComponent = ({ onChange }) => {
  return (
    <>
      <Input
        placeholder="Randevulu kişilerde arayınız."
        prefix={<SearchOutlined />}
        size="large"
        style={{ marginBottom: 20 }}
      />
      <Checkbox onChange={onChange}>
        Sadece Taksiti Kalan Kişileri Göster
      </Checkbox>{" "}
    </>
  );
};

export default FilterComponent;
