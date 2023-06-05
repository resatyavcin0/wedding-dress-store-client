import { Table } from "antd";
import FilterComponent from "./pendingPayments/FilterComponent";

const TableComponent = ({ columns, data }) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <FilterComponent onChange={onChange} />
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default TableComponent;
