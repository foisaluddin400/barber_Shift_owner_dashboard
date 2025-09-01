import React, { useState } from "react";
import { Navigate } from "../../Navigate";
import { Table, Button, Modal, message } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import {
  useGetAllCustomerDashboardQuery,
  useGetAllCustomerOwnerQuery,
  useUpdateStatusOwnerMutation,
} from "../../page/redux/api/manageApi";









const AllShopRegistration = () => {
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
             <Navigate title={"all Shop Registration"} />
              <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: 800 }}
      />
            
            {/* <Modal
                title="Shop Details"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={500}
            >
                {selectedShop && (
                    <div>
                        <p><strong>Shop Name:</strong> {selectedShop.shopName}</p>
                        <p><strong>Shop Address:</strong> {selectedShop.address}</p>
                        <p><strong>Shop Gender Category:</strong> {selectedShop.genderCategory}</p>
                        <p><strong>Shop Category:</strong> {selectedShop.category}</p>
                        <p><strong>Shop Owner Name:</strong> {selectedShop.ownerName}</p>
                        <p><strong>Email:</strong> {selectedShop.email}</p>
                        <p><strong>Phone Number:</strong> {selectedShop.phone}</p>
                        <h3 className="font-bold mt-4">Bank Info</h3>
                        <p><strong>Bank Name:</strong> {selectedShop.bankName}</p>
                        <p><strong>Account Holder Name:</strong> {selectedShop.accountHolder}</p>
                        <p><strong>Account Number:</strong> {selectedShop.accountNumber}</p>
                        <p><strong>Enter Branch Code:</strong> {selectedShop.branchCode}</p>
                        <p><strong>Branch City:</strong> {selectedShop.branchCity}</p>
                    </div>
                )}
            </Modal> */}
        </div>
    );
}

export default AllShopRegistration