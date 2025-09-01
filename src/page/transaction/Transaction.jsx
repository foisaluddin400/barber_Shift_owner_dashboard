import { Table, Input, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "../../Navigate";
import { useGetAllTreansactionOwnerQuery } from "../redux/api/manageApi";

export const Transaction = () => {
  const [searchTerm, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
console.log(searchTerm)
  const { data: transaction } = useGetAllTreansactionOwnerQuery({
    searchTerm,
    page: currentPage,
    limit: pageSize,
  });

  const handlePageChange = (page) => setCurrentPage(page);

  const columns = [
    {
      title: "SI No",
      key: "siNo",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Date",
      dataIndex: "bookingDate",
      key: "date",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.customerImage}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Customer Email",
      dataIndex: "customEmail",
      key: "customEmail",
    },
    {
      title: "Barber Name",
      dataIndex: "barberName",
      key: "barberName",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.barberImage}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Barber Email",
      dataIndex: "barberEmail",
      key: "barberEmail",
    },
    {
      title: "Paid Amount",
      dataIndex: "paymentAmount",
      key: "paymentAmount",
      render: (text) => `$${text}`,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded ${
            status === "COMPLETED" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  const tableData = transaction?.data || [];

  return (
    <div>
      <div className="p-1">
        <div className="flex justify-between">
          <Navigate title={"Transaction"} />
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-64 px-4 py-2 rounded-lg bg-white"
          />
        </div>

        <div className="p-2">
          <div className="rounded-md overflow-hidden">
            <Table
              columns={columns}
              dataSource={tableData}
              rowKey="paymentId"
              pagination={false}
              rowClassName="border-b border-gray-300"
              scroll={{ x: 1000 }}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={transaction?.meta?.total || 0}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};
