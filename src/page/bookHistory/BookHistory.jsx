import { Table, Input, Pagination, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";
import { useState } from "react";
import dayjs from "dayjs";
import { useGetAllCustomerOwnerQuery } from "../redux/api/manageApi";

const BookHistory = () => {
  const [searchTerm, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ NEW STATES
  const [activeTab, setActiveTab] = useState("ALL");
  const [status, setStatus] = useState('COMPLETED');
  const [date, setDate] = useState(null);

  const pageSize = 10;

  // ✅ API QUERY PARAMS
  const { data: customerData } = useGetAllCustomerOwnerQuery({
    page: currentPage,
    limit: pageSize,
    searchTerm: searchTerm || undefined,
    type: activeTab !== "ALL" ? activeTab : undefined,
    status: status || undefined,
    date: activeTab === "QUEUE" ? date : undefined,
  });

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
      render: (_, record) => `${record.startTime} - ${record.endTime}`,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      render: (price) => `$${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
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

  const tableData = customerData?.data || [];

  return (
    <div className="bg-white p-3 h-[87vh]">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Navigate title="Customers" />
          <h1 className="pl-2 font-semibold text-xl">({tableData.length})</h1>
        </div>

        {/* FILTERS */}
        <div className="flex gap-4 items-center">
          {activeTab === "QUEUE" && (
            <DatePicker
              onChange={(value) =>
                setDate(value ? dayjs(value).format("YYYY-MM-DD") : null)
              }
            />
          )}

          {/* Status Select */}
          <Select
            value={status}
            onChange={(value) => setStatus(value || null)}
          
            placeholder="Status"
            style={{ width: 150, height: "42px" }}
            options={[
              { value: "COMPLETED", label: "Completed" },
              { value: "CANCELLED", label: "Cancelled" },
              { value: "NO_SHOW", label: "No Show" },
            
            ]}
          />

          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-64"
          />
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-4 mt-4">
        {["ALL", "BOOKING", "QUEUE"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setStatus(null);
              setDate(null);
            }}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-[#D17C51] text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="mt-4 rounded-md overflow-hidden">
        <Table
          columns={columns}
          dataSource={tableData}
          rowKey="bookingId"
          pagination={false}
          rowClassName="border-b border-gray-300"
          scroll={{ x: 800 }}
        />
      </div>

      {/* PAGINATION */}
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
  );
};

export default BookHistory;
