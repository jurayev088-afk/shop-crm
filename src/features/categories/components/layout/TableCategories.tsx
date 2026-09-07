import React from "react";
import type { TableColumnsType, TableProps } from "antd";
import { useDarkMode } from "../../../../context/DarkMode";
import naushnik from "../../../../assets/svg/naushnik.svg";
import { Table, Avatar, Flex, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";



interface DataType {
  key: React.Key;
  product: string;
  productImage: string;
  createDate: string;
  order: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "key",
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.product.includes(value as string),
  },
  
  {
    title: 'Product',
    dataIndex: 'product',
    render: (_, record) => (
      <Flex align="center" gap={12}>
        <Avatar 
          shape="square" 
          size={48} 
          src={record.productImage} 
          style={{ border: '1px solid #e5e7eb', borderRadius: 8 }}
        />
        <span style={{ fontWeight: 500 }}>{record.product}</span>
      </Flex>
    ),
  },
  {
    title: "Order",
    dataIndex: "order",
  },
  {
    title: "Created Date",
    dataIndex: "createDate",
    filterSearch: true,
  },
  {
    title:"Actions",
    dataIndex:"action",
    render:(_, record)=>(
      <div>
        <Button
        type="text"
        icon={<EditOutlined/>}
        onClick={() => console.log(record.key)}
        />
        <Button
        type="text"
        icon={<DeleteOutlined/>}
        onClick={() => console.log(record.key)}
        />
      </div>
    )
  }
];

const data: DataType[] = [
  {
    key: "1",
    product: "Mens T-Shirt",
    productImage: naushnik,
    createDate: "01-01-2026",
    order:23
  },
  {
    key: "2",
    product: "Mens T-Shirt",
    productImage: naushnik,
    createDate: "01-01-2026",
    order:23
  },
  {
    key: "3",
    product: "Mens T-Shirt",
    productImage: naushnik,
    createDate: "01-01-2026",
    order:23
  },
  {
    key: "4",
    product: "Mens T-Shirt",
    productImage: naushnik,
    createDate: "01-01-2026",
    order:23
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableCategories: React.FC = () => {
  const { isSun, setIsSun } = useDarkMode();
  return (
    <Table<DataType>
      onRow={() => ({
        style: {
          backgroundColor: isSun ? "#000000" : "#ffffff",
          color: isSun ? "white" : "black",
          ["--antd-wave-shadow-color" as any]: "transparent",
        },
      })}
      columns={columns}
      dataSource={data}
      onChange={onChange}
    />
  );
};

export default TableCategories;
