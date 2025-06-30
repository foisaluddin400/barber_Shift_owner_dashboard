import React, { useState } from "react";
import { Table, Button, Modal, Input, Dropdown } from "antd";
import { EditOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

import { IoIosArrowDown } from "react-icons/io";
import { Edit } from "lucide-react";
import AddManage from "./AddManage";
const ManageBarber = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
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
      status: "Available",
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
      title: "Barber Name",
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
      title: "Working Hours",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Break Times",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Real-time Availability",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Special Dates ",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2 text-xl">
         
          <EditOutlined className="text-[#AB684D]" />
          <RxCrossCircled className="text-[#AB684D]" />
        </div>
      ),
    },
  ];
  return (
    <div>
      <button
        className="bg-[#D17C51] px-5 py-2 text-white rounded mb-4"
        onClick={() => setOpenAddModal(true)}
      >
        + New Schedule
      </button>
       <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: 800 }}
          />

          <AddManage setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}></AddManage>
    </div>
  )
}

export default ManageBarber