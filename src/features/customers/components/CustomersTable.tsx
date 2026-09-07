import React from "react";
import type { TableColumnsType, TableProps } from "antd";
import { useDarkMode } from "../../../context/DarkMode";
import { Button, Table } from "antd";
import { DeleteOutlined, MessageOutlined } from "@ant-design/icons";
import { DeleteIcon } from "lucide-react";

enum Status {
  active = "Active",
  inactive = "Inactive",
  vip = "VIP",
}

interface DataType {
  key: React.Key;
  customerId: string;
  name: string;
  phone: string;
  orderCount: string;
  totalSpend: string;
  status: Status;
}


const columns: TableColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "key",
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
  },
  {
    title: "Customer Id",
    dataIndex: "customerId",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    filterSearch: true,
  },
  {
    title: "Order Count",
    dataIndex: "orderCount",
    filterSearch: true,
  },
  {
    title: "Total Spend",
    dataIndex: "totalSpend",
    filterSearch: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    filterSearch: true,
  },
  {
    title: "Actions",
    dataIndex: "action",
    render: (_, record) => (
      <div className="flex">
        <Button
          type="text"
          icon={<MessageOutlined />}
          onClick={() => console.log("Message clicked for:", record.name)}
          className={`!flex !items-center !justify-center `}
        />
        <Button 
        type="text"
        icon={<DeleteOutlined />}
        onClick={() => console.log(record.key)}
        />
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    customerId: "#12345",
    name: "Mens T-Shirt",
    phone: "01-01-2026",
    orderCount: "49.99",
    totalSpend: "Paid",
    status: Status.active,
  },
  {
    key: "2",
    customerId: "#12345",
    name: "Mens T-Shirt",
    phone: "01-01-2026",
    orderCount: "49.99",
    totalSpend: "Paid",
    status: Status.active,
  },
  {
    key: "3",
    customerId: "#12345",
    name: "Mens T-Shirt",
    phone: "01-01-2026",
    orderCount: "49.99",
    totalSpend: "Paid",
    status: Status.active,
  },
  {
    key: "4",
    customerId: "#12345",
    name: "Mens T-Shirt",
    phone: "01-01-2026",
    orderCount: "49.99",
    totalSpend: "Paid",
    status: Status.active,
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

const CustomersTable: React.FC = () => {
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

export default CustomersTable;
