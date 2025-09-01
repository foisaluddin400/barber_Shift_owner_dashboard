import React, { useState } from "react";
import { Table, Button, message } from "antd";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import {
  useGetAllCustomerDashboardQuery,
  useUpdateStatusOwnerMutation,
} from "../../page/redux/api/manageApi";

const ShopRegistration = () => {
  const { data: bookingData, isLoading } = useGetAllCustomerDashboardQuery();
  const [updateStatusOwner] = useUpdateStatusOwnerMutation();

  const dataSource =
    bookingData?.data?.map((booking, index) => ({
      key: index + 1,
      id: booking.bookingId,
      customerId: booking.customerId,
      customerName: booking.customerName,
      customerImage: booking.customerImage,
      email: booking.customerEmail,
      phone: booking.customerPhone || "N/A",
      date: new Date(booking.bookingDate).toLocaleDateString(),
      time: `${booking.startTime} - ${booking.endTime}`,
      service: booking.services
        .map((s) => s.serviceName)
        .join(", "), // ✅ Corrected
      barber: booking.barberName,
      status: booking.status,
    })) || [];

  const handleRemove = async (id) => {
    try {
      const res = await updateStatusOwner({
        bookingId: id,
        status: "CANCELLED",
      }).unwrap();
      message.success(res?.message);
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong");
    }
  };

  const handleAccept = async (id) => {
    try {
      const res = await updateStatusOwner({
        bookingId: id,
        status: "CONFIRMED",
      }).unwrap();
      message.success(res?.message);
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong");
    }
  };

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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 text-xl">
          <TbRosetteDiscountCheckFilled
            onClick={() => handleAccept(record?.id)}
            className="text-green-500 cursor-pointer"
          />
          <Link to={`/dashboard/bookingHistory/chat/${record?.customerId}`}>
            <BiMessageRoundedDots className="text-[#AB684D] cursor-pointer" />
          </Link>
          <RxCrossCircled
            onClick={() => handleRemove(record?.id)}
            className="text-[#AB684D] cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-3 bg-white mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold pb-2">Recent Booking Request</h2>
        <Link to={"/dashboard/allShop"}>
          <button className="text-[#AB684D]">View all</button>
        </Link>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: 800 }}
        loading={isLoading}
      />
    </div>
  );
};

export default ShopRegistration;
