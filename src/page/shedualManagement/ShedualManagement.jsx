import React, { useState } from "react";
import { Table, Input, Dropdown, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";
import { IoIosArrowDown } from "react-icons/io";
import ManageBarber from "./ManageBarber";
import AddSchedual from "./AddSchedual";
import { useGetAllShedualeBarberQuery } from "../redux/api/manageApi";
import { Link } from "react-router-dom";

const ShedualManagement = () => {
  const [searchTerm, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("schedule");
  const [hireType, setHireType] = useState("non-hired");

  const pageSize = 10;

  const { data, isLoading } = useGetAllShedualeBarberQuery({
    all: hireType === "non-hired",
    searchTerm,
    page: currentPage,
    limit: pageSize,
  });

  const dataSource =
    data?.data?.map((barber, index) => ({
      key: index + 1,
      barberFullName: barber.barberName,
      id: barber.barberId,
      barberEmail: barber.barberEmail,
      barberPhoneNumber: barber.barberPhone || "N/A",
      barberAddress: barber.barberAddress,
      image: barber.barberImage,
    })) || [];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
     ...(hireType === "non-hired"
      ? [
    {
      title: "Barber Name",
      dataIndex: "barberFullName",
      render: (text, record) => (
      
          <div className="flex items-center gap-2">
            <img
              src={record.image}
              alt="barber"
              className="w-8 h-8 rounded-full"
            />
            <span>{text}</span>
          </div>
      
      ),
    },
    ]
      : []),
          ...(hireType === "hired"
      ? [
    {
      title: "Barber Name",
      dataIndex: "barberFullName",
      render: (text, record) => (
        <Link
          to={`/dashboard/schedualManagement/bookingManagement/${record.id}`}
        >
          <div className="flex items-center gap-2">
            <img
              src={record.image}
              alt="barber"
              className="w-8 h-8 rounded-full"
            />
            <span>{text}</span>
          </div>
        </Link>
      ),
    },
    ]
      : []),
    {
      title: "Email",
      dataIndex: "barberEmail",
    },
    {
      title: "Phone",
      dataIndex: "barberPhoneNumber",
    },

    {
      title: "Address",
      dataIndex: "barberAddress",
    },
  ];

  return (
    <div className="p-2">
      <Navigate title="Schedule Management" />

      {/* FILTER BAR */}
      <div className="flex gap-3 items-center my-4">
        <Dropdown
          menu={{
            items: [
              { label: "Week", key: "week" },
              { label: "Month", key: "month" },
            ],
          }}
        >
          <button className="flex items-center gap-2 border border-[#D17C51] text-[#9C5F46] px-4 py-1 rounded">
            Week <IoIosArrowDown />
          </button>
        </Dropdown>

        <button
          onClick={() => setSelectedTab("schedule")}
          className={`px-5 py-2 border rounded ${
            selectedTab === "schedule"
              ? "bg-[#D17C51] text-white"
              : "border-[#D17C51]"
          }`}
        >
          Schedule
        </button>

        <button
          onClick={() => setSelectedTab("manage")}
          className={`px-5 py-2 border rounded ${
            selectedTab === "manage"
              ? "bg-[#D17C51] text-white"
              : "border-[#D17C51]"
          }`}
        >
          Manage
        </button>
      </div>

      {selectedTab === "schedule" && (
        <>
          <div className="flex justify-between mb-4">
            <button
              className="bg-[#D17C51] text-white px-5 py-2 rounded"
              onClick={() => setOpenAddModal(true)}
            >
              + New Schedule
            </button>

            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              className="w-64"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* HIRED FILTER */}
          <div className="flex gap-3 mb-3">
            <button
              onClick={() => setHireType("non-hired")}
              className={`px-4 py-1 border rounded ${
                hireType === "non-hired" ? "bg-[#D17C51] text-white" : ""
              }`}
            >
              Non-hired
            </button>
            <button
              onClick={() => setHireType("hired")}
              className={`px-4 py-1 border rounded ${
                hireType === "hired" ? "bg-[#D17C51] text-white" : ""
              }`}
            >
              Hired
            </button>
          </div>

          {/* TABLE */}
          <Table
            dataSource={dataSource}
            columns={columns}
            loading={isLoading}
            pagination={false}
            scroll={{ x: 800 }}
          />

          <div className="flex justify-center mt-4">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={data?.meta?.total || 0}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}

      {/* ================= MANAGE TAB ================= */}
      {selectedTab === "manage" && <ManageBarber />}

      <AddSchedual
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
      />
    </div>
  );
};

export default ShedualManagement;
