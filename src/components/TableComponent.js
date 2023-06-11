import { Table } from "antd";

const TableComponent = ({ columns, data }) => {
  return (
    <>
      <Table
        pagination={{
          defaultPageSize: 5,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default TableComponent;
