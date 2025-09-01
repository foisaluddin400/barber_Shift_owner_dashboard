import React, { useState } from "react";
import { Table, Dropdown } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { RxCrossCircled } from "react-icons/rx";
import { Navigate } from "../../Navigate";
import { IoIosArrowDown } from "react-icons/io";
import ManageBarber from "./ManageBarber";
import AddBooking from "./AddBooking";
import { useGetSingleShedualeQuery } from "../redux/api/manageApi";
import { useParams } from "react-router-dom";

const BookingManagement = () => {
  const { id } = useParams();
  const { data: singleShaduale, isLoading } = useGetSingleShedualeQuery({ id });
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("personal");

  const items = [
    { label: <button>Barber</button>, key: "0" },
    { label: <button>Customer</button>, key: "1" },
  ];


  const dataSource =
    singleShaduale?.data?.map((item, index) => ({
      key: index + 1,
      dayName: item.dayName,
      time: item.time,
      isActive: item.isActive ? "Open" : "Closed",
    })) || [];

  const columns = [
    { title: "#", dataIndex: "key", key: "key" },
    { title: "Day", dataIndex: "dayName", key: "dayName" },
    { title: "Working Hours", dataIndex: "time", key: "time" },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (status) => (
        <span
          className={`font-medium ${
            status === "Open" ? "text-green-600" : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: () => (
    //     <div className="flex gap-2 text-xl">
    //       <EditOutlined className="text-[#AB684D]" />
    //       <RxCrossCircled className="text-[#AB684D]" />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="p-1">
      <div className="flex justify-between">
        <Navigate title={"Schedule Management"} />
      </div>

      <div className="flex gap-4 items-center mb-4">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <button
            className="flex gap-2 items-center border text-[#9C5F46] border-[#D17C51] p-1 px-3 rounded"
            onClick={(e) => e.preventDefault()}
          >
            Week <IoIosArrowDown />
          </button>
        </Dropdown>

        <div
          onClick={() => setSelectedTab("personal")}
          className={`py-2 px-5 border rounded border-[#D17C51] cursor-pointer ${
            selectedTab === "personal" ? "bg-[#D17C51] text-white" : ""
          }`}
        >
          Schedule
        </div>

        <div
          onClick={() => setSelectedTab("photo")}
          className={`py-2 px-5 border rounded border-[#D17C51] cursor-pointer ${
            selectedTab === "photo" ? "bg-[#D17C51] text-white" : ""
          }`}
        >
          Manage
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
            loading={isLoading}
            pagination={false}
            scroll={{ x: 800 }}
          />
        </div>
      )}

      {selectedTab === "photo" && <ManageBarber />}

      <AddBooking
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      />
    </div>
  );
};

export default BookingManagement;
