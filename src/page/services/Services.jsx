import { Input } from "antd";
import { Navigate } from "../../Navigate";
import { SearchOutlined } from "@ant-design/icons";
import AddServices from "./AddServices";
import { useState } from "react";
import EditServices from "./EditServices";
const servicesData = [
  {
    title: "Hair & styling",
    color: "bg-blue-500",
    services: [
      { name: "Haircut", time: "40 minutes", price: "$25" },
      { name: "Beardcut", time: "30 minutes", price: "$30" },
      { name: "Hair style", time: "30 minutes", price: "$30" },
      { name: "Hair style", time: "30 minutes", price: "$30" },
      { name: "Hair style", time: "30 minutes", price: "$30" },
    ],
  },
  {
    title: "Color & Wax",
    color: "bg-orange-500",
    services: [
      { name: "Hair color", time: "40 minutes", price: "$25" },
      { name: "Beard color", time: "30 minutes", price: "$30" },
    ],
  },
];

const Services = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="p-1">
      <div className="flex justify-between mb-4 ">
        <Navigate title={"Customers"} />
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64 px-4 py-2 rounded-lg bg-white"
        />
      </div>

      <button
        className="bg-[#D17C51] px-5 py-2 text-white rounded mb-4"
        onClick={() => setOpenAddModal(true)}
      >
        + New Services
      </button>
      <div className="grid md:grid-cols-2 gap-6">
        {servicesData.map((category, index) => (
          <div key={index}>
            {/* Category Title */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
              <h2 className="text-lg font-semibold">{category.title}</h2>
            </div>

            {/* Services List */}
            <div className="space-y-3">
              {category.services.map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-md p-3 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.time} –{" "}
                      <span className="font-semibold">{item.price}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setEditModal(true)}
                    className="text-sm text-orange-500 hover:underline"
                  >
                    ✎ Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <AddServices
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      ></AddServices>
      <EditServices
        editModal={editModal}
        setEditModal={setEditModal}
      ></EditServices>
    </div>
  );
};

export default Services;
