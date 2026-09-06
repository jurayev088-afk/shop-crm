import React from "react";
import type { TableColumnsType, TableProps } from "antd";
import { useDarkMode } from "../../../../context/DarkMode";
import naushnik from "../../../../assets/svg/naushnik.svg";
import { Table, Avatar, Flex } from 'antd';
import type { ColumnsType } from 'antd/es/table';

enum Status {
  delivered = "Delivered",
  pending = "Pending",
  shipped = "Shipped",
  cancelled = "Cancelled",
}

interface DataType {
  key: React.Key;
  orderId: string;
  product: string;
  productImage: string;
  date: string;
  price: string;
  payment: string;
  status: Status;
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
    title: "Order Id",
    dataIndex: "orderId",
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
    title: "Date",
    dataIndex: "date",
    filterSearch: true,
  },
  {
    title: "Price",
    dataIndex: "price",
    filterSearch: true,
  },
  {
    title: "Payment",
    dataIndex: "payment",
    filterSearch: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    filterSearch: true,
  },
];

const data: DataType[] = [
  {
    key: "1",
    orderId: "#12345",
    product: "Mens T-Shirt",
    productImage: naushnik,
    date: "01-01-2026",
    price: "49.99",
    payment: "Paid",
    status: Status.delivered,
  },
  {
    key: "2",
    orderId: "#12345",
    productImage: naushnik,
    product: "John Brown",
    date: "01-01-2026",
    price: "49.99",
    payment: "Paid",
    status: Status.pending,
  },
  {
    key: "3",
    orderId: "#12345",
    productImage: naushnik,
    product: "John Brown",
    date: "01-01-2026",
    price: "49.99",
    payment: "Paid",
    status: Status.shipped,
  },
  {
    key: "4",
    orderId: "#12345",
    productImage: naushnik,
    product: "John Brown",
    date: "01-01-2026",
    price: "49.99",
    payment: "Paid",
    status: Status.cancelled,
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

const OrderManagementTable: React.FC = () => {
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

export default OrderManagementTable;
