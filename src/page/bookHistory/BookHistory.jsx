import React, { useState } from "react";
import { Table, Button, Modal, Input, Dropdown } from "antd";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { Navigate } from "../../Navigate";
import { IoIosArrowDown } from "react-icons/io";

const BookHistory = () => {
  const [open, setOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);

  const items = [
    {
      label: (
        <button target="_blank" rel="noopener noreferrer">
          Upcoming Booking
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button target="_blank" rel="noopener noreferrer">
          Cancel
        </button>
      ),
      key: "1",
    },
    {
      label: (
        <button target="_blank" rel="noopener noreferrer">
          Completed
        </button>
      ),
      key: "2",
    },
    {
      label: (
        <button target="_blank" rel="noopener noreferrer">
          No-Show Fee
        </button>
      ),
      key: "3",
    },
  ];
  const dataSource = [
    {
      key: "1",
      shopName: "Cameron Salons",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",

      email: "sadgfjdg@gmail.com",
      phone: "+3489 9999 9778",
      date: "01/4/2025",
      bankName: "AB Bank",
      accountHolder: "Dianne Russell",
      accountNumber: "6575675678676",
      branchCode: "4575467",
      service: "harcut",
      branchCity: "New York",
      assigned: "talha",
      status: "Confirmed",
      city: "Us",
      image: "https://via.placeholder.com/40",
    },
    {
      key: "2",
      shopName: "Cameron Salons",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",

      email: "sadgfjdg@gmail.com",
      phone: "+3489 9999 9778",
      date: "01/4/2025",
      bankName: "AB Bank",
      accountHolder: "Dianne Russell",
      accountNumber: "6575675678676",
      branchCode: "4575467",
      service: "harcut",
      branchCity: "New York",
      assigned: "talha",
      status: "Confirmed",
      city: "Us",
      image: "https://via.placeholder.com/40",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Customer Name",
      dataIndex: "shopName",
      key: "shopName",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <img src={record.image} alt="Shop" className="w-8 h-8 rounded-full" />
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
      title: "Date & Time",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Service Booked",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Assigned Barber",
      dataIndex: "assigned",
      key: "assigned",
    },
    {
      title: "Booking Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2 text-xl">
          <TbRosetteDiscountCheckFilled className="text-green-500" />
          <Link to={'/dashboard/bookingHistory/chat'}><BiMessageRoundedDots className="text-[#AB684D]" /></Link>
          <RxCrossCircled className="text-[#AB684D]" />
        </div>
      ),
    },
  ];

  return (
    <div className=" p-1">
      <div className="flex justify-between">
        <div className="flex ">
          <Navigate title={"Booking History"}></Navigate>
          <h1 className=" pl-2 font-semibold text-xl">{`(110)`}</h1>
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <button
            className="flex gap-2 items-center border text-[#9C5F46] border-[#D17C51] p-1 px-3 rounded"
            onClick={(e) => e.preventDefault()}
          >
            Upcoming Booking
            <IoIosArrowDown />
          </button>
        </Dropdown>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 800 }} />
    </div>
  );
};

export default BookHistory;
