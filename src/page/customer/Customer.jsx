import { Table, Input, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";
import { useState } from "react";
import { useGetAllCustomerOwnerQuery } from "../redux/api/manageApi";
import AddCustomer from "./AddCustomer";

const Customer = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
      const [searchTerm, setSearch] = useState("");
    console.log(searchTerm)
    const [currentPage, setCurrentPage] = useState(1);
    
    const pageSize = 10;
  const { data: customerData } = useGetAllCustomerOwnerQuery({ 
    searchTerm:searchTerm,
     page: currentPage,
    limit: pageSize,}); 
console.log(customerData)
     const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const columns = [
    {
      title: "SI No",
      key: "siNo",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.customerImage || "https://via.placeholder.com/40"}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Barber Name",
      dataIndex: "barberName",
      key: "barberName",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.barberImage || "https://via.placeholder.com/40"}
            alt="barber"
            className="w-8 h-8 rounded-full"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Time",
      key: "time",
      render: (_, record) => `${record.startTime} - ${record.endTime}`,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price) => `$${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded ${
            status === "CONFIRMED"
              ? "bg-green-200 text-green-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  // Use backend data if exists
  const tableData = customerData?.data || [];

  return (
    <div className="p-1">
      <div className="flex justify-between">
        <div className="flex">
          <Navigate title={"Customers"} />
          <h1 className="pl-2 font-semibold text-xl">
            {`(${tableData.length})`}
          </h1>
        </div>
        <Input
        onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>

      <div className="p-2">
        {/* <button
          className="bg-[#D17C51] px-5 py-2 text-white rounded mb-4"
          onClick={() => setOpenAddModal(true)}
        >
          + New Services
        </button> */}

        <div className="rounded-md overflow-hidden">
          <Table
            columns={columns}
            dataSource={tableData}
            rowKey="bookingId" // still unique key needed
            pagination={false}
            rowClassName="border-b border-gray-300"
            scroll={{ x: 800 }}
          />
        </div>
          <div className="mt-4 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={customerData?.meta?.total || 0}
            onChange={handlePageChange}
            showSizeChanger={false}
            
          />
        </div>
      </div>
{/* 
      <AddCustomer
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      /> */}
    </div>
  );
};

export default Customer;
