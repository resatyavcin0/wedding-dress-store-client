import { Table } from "antd";

const TableComponent = ({ columns, data }) => {
  return (
    <>
      <Table
        pagination={{
          defaultPageSize: 2,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default TableComponent;
