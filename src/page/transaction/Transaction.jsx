import { Table, Switch, Tag, Input, Button, Dropdown, Space } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";
import { TbFilter } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export const Transaction = () => {
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

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
    {
      title: "Name",
      dataIndex: "barberName",
      key: "barberName",
      render: (text, record) => (
        <Link to={"/dashboard/barber/barberDetails"}>
          <div className="flex items-center gap-2">
            <img
              src={record.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <span>{text}</span>
          </div>
        </Link>
      ),
    },
   
   
    {
      title: "Paid Ammount",
      dataIndex: "sales",
      key: "sales",
    },
    {
        title: "Payment Type",
        dataIndex: "type",
        key: "type",
      },
  ];

  const data = [
    {
      id: "01",
      barberName: "Barber Time",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      sales: "$2444",
      shop: "shopping ",
      type:'Online Payment',
      contact: "+9724545643",
      date:'12/06/24'
    },
    {
        id: "02",
        barberName: "Barber Time",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        sales: "$2444",
        shop: "shopping ",
        type:'Online Payment',
        contact: "+9724545643",
        date:'12/06/24'
      },
      {
        id: "03",
        barberName: "Barber Time",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        sales: "$2444",
        shop: "shopping ",
        type:'Online Payment',
        contact: "+9724545643",
        date:'12/06/24'
      },
    
  ];

  return (
    <div>
      <div className="p-1">
        <div className="flex justify-between">
          <div className="flex ">
            <Navigate title={"Transaction"}></Navigate>
            <h1 className=" pl-2 font-semibold text-xl">{`(110)`}</h1>
          </div>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="w-64 px-4 py-2 rounded-lg bg-white"
          />
        </div>
        {/* Filter and Search */}
        <div className=" p-2">
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
                Barber
                <IoIosArrowDown />
              </button>
            </Dropdown>
          </div>

          {/* Table */}
          <div className=" rounded-md overflow-hidden">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              rowClassName=" border-b border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
