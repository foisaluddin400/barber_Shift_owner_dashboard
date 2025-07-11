import React, { useState } from "react";
import { Table, Button, Modal, Input, Dropdown } from "antd";
import { EditOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { Navigate } from "../../Navigate";
import { IoIosArrowDown } from "react-icons/io";
import { Edit } from "lucide-react";
import ManageBarber from "./ManageBarber";
import AddSchedual from "./AddSchedual";

const ShedualManagement = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("personal");
  const [open, setOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);

  const items = [
    {
      label: (
        <button target="_blank" rel="noopener noreferrer">
          Barber
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button target="_blank" rel="noopener noreferrer">
          Customer
        </button>
      ),
      key: "1",
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
      title: "Date & time",
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
      title: "Name",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Services",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Barber",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
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
    <div className=" p-1">
      <div className="flex justify-between">
        <div className="flex ">
          <Navigate title={"Schedule Management"}></Navigate>
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>
      <div className="flex gap-4 items-center mb-4">
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
            Week
            <IoIosArrowDown />
          </button>
        </Dropdown>

        <div
          onClick={() => setSelectedTab("personal")}
          className={` py-2 px-5 border rounded border-[#D17C51]  cursor-pointer ${
            selectedTab === "personal" ? " bg-[#D17C51] text-white  " : " "
          }`}
        >
          <div className="flex justify-between px-5">
            <span className="flex gap-2">Schedule</span>
          </div>
        </div>

        <div
          onClick={() => setSelectedTab("photo")}
          className={` py-2 px-5 border rounded border-[#D17C51]  cursor-pointer ${
            selectedTab === "photo" ? "bg-[#D17C51] text-white " : " "
          }`}
        >
          <div className="flex justify-between px-5">
            <span className="flex gap-2">Manage</span>
          </div>
        </div>
      </div>

      {selectedTab === "personal" && (
        <div>
           <button
        className="bg-[#D17C51] px-5 py-2 text-white rounded mb-4"
        onClick={() => setOpenAddModal(true)}
      >
        + New Booking
      </button>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: 800 }}
          />
        </div>
      )}

      {selectedTab === "photo" && <div>
        <ManageBarber></ManageBarber></div>}

        <AddSchedual setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}></AddSchedual>
    </div>
  );
};

export default ShedualManagement;
