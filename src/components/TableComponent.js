import { Table } from "antd";

const TableComponent = ({ columns, data, pagination }) => {
  return (
    <>
      <Table pagination={pagination} columns={columns} dataSource={data} />
    </>
  );
};

export default TableComponent;
