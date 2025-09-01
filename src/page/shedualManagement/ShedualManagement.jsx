import React, { useState } from "react";
import { Table, Input, Dropdown, Pagination } from "antd";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import { RxCrossCircled } from "react-icons/rx";
import { Navigate } from "../../Navigate";
import { IoIosArrowDown } from "react-icons/io";
import ManageBarber from "./ManageBarber";
import AddSchedual from "./AddSchedual";
import { useGetAllShedualeBarberQuery } from "../redux/api/manageApi";
import { Link } from "react-router-dom";

const ShedualManagement = () => {
      const [searchTerm, setSearch] = useState("");
  console.log(searchTerm)
  const [currentPage, setCurrentPage] = useState(1);
  
  const pageSize = 10;
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("personal");

  const { data: schedualeBarber, isLoading } = useGetAllShedualeBarberQuery({
        
    searchTerm:searchTerm,
     page: currentPage,
    limit: pageSize,
  });

  const items = [
    { label: <button>Barber</button>, key: "0" },
    { label: <button>Customer</button>, key: "1" },
  ];
  const dataSource =
    schedualeBarber?.data?.map((barber, index) => ({
      key: index + 1,
      barberFullName: barber.barberFullName,
      id : barber.barberId,
      barberEmail: barber.barberEmail,
      barberPhoneNumber: barber.barberPhoneNumber || "N/A",
      startDate: new Date(barber.startDate).toLocaleDateString(),
      hourlyRate: `$${barber.hourlyRate}`,
      image: barber.barberImage,
    })) || [];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Barber Name",
      dataIndex: "barberFullName",
      key: "barberFullName",
      render: (text, record) => (
        <Link to={`/dashboard/schedualManagement/bookingManagement/${record?.id}`}><div className="flex items-center space-x-2">
          <img
            src={record.image}
            alt="Barber"
            className="w-8 h-8 rounded-full"
          />
          <span>{text}</span>
        </div></Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "barberEmail",
      key: "barberEmail",
    },
    {
      title: "Phone Number",
      dataIndex: "barberPhoneNumber",
      key: "barberPhoneNumber",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Hourly Rate",
      dataIndex: "hourlyRate",
      key: "hourlyRate",
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
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
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
          <div className="flex justify-between mb-4">
            <button
              className="bg-[#D17C51] px-5 py-2 text-white rounded"
              onClick={() => setOpenAddModal(true)}
            >
              + New Schedule
            </button>
            <Input
            onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              prefix={<SearchOutlined />}
              className="w-64 px-4 py-2 rounded-lg bg-white"
            />
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            loading={isLoading}
            pagination={false}
            scroll={{ x: 800 }}
          />
            <div className="mt-4 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={schedualeBarber?.meta?.total || 0}
            onChange={handlePageChange}
            showSizeChanger={false}
            
          />
        </div>
        </div>
      )}

      {selectedTab === "photo" && <ManageBarber />}

      <AddSchedual
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      />
    </div>
  );
};

export default ShedualManagement;
