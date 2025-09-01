import React, { useState } from "react";
import { Table, Input, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";
import { useGetAllBookingHistoryQuery } from "../redux/api/manageApi";

const BookHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(""); // State for status filter
  const pageSize = 10;

  // API query, conditionally include status if selected
  const { data: bookingData, isLoading } = useGetAllBookingHistoryQuery({
    status: status, // Send status only if it's not empty
    searchTerm: searchTerm,
    page: currentPage,
    limit: pageSize,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle status change
  const handleStatusChange = (e) => {
    setStatus(e.target.value || ""); // Set status or clear it
    setCurrentPage(1); // Reset to first page when status changes
  };

  // Table datasource map from API
  const dataSource =
    bookingData?.data?.map((booking, index) => ({
      key: index + 1,
      customerName: booking.customerName,
      customerImage: booking.customerImage,
      email: booking.customEmail,
      phone: booking.customerPhone || "N/A",
      date: new Date(booking.bookingDate).toLocaleDateString(),
      time: `${booking.startTime} - ${booking.endTime}`,
      service: booking.services.map((s) => s.serviceName).join(", "),
      barber: booking.barberName,
      status: booking.status,
    })) || [];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          {record.customerImage && (
            <img
              src={record.customerImage}
              alt={text}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Service Booked",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Assigned Barber",
      dataIndex: "barber",
      key: "barber",
    },
    {
      title: "Booking Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className="p-1">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <Navigate title={"Booking History"} />
          <h1 className="pl-2 -mt-5 font-semibold text-xl">
            ({bookingData?.data?.length || 0})
          </h1>
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <select
          className="rounded p-2 px-4 border border-[#C79A88]"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="">All Statuses</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
          <option value="NO_SHOW">No Show</option>
          <option value="REFUNDED">Refunded</option>
        </select>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        pagination={false}
        scroll={{ x: 900 }}
      />
      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={bookingData?.meta?.total || 0}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default BookHistory;
