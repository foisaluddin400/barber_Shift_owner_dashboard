
import { Table, Button, Modal, Input, Dropdown } from "antd";
import { EditOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

import { IoIosArrowDown } from "react-icons/io";
import { Edit } from "lucide-react";
import AddManage from "./AddManage";

import React, { useState } from "react";

const days = [
  { date: 2, day: "Mon" },
  { date: 3, day: "Tue" },
  { date: 4, day: "Wed" },
  { date: 5, day: "Thu" },
  { date: 6, day: "Fri" },
  { date: 7, day: "Sat" },
  { date: 8, day: "Sun" },
  { date: 9, day: "Sat" },
  { date: 10, day: "Sun" },
  { date: 11, day: "Sat" },
  { date: 12, day: "Sun" },
  { date: 13, day: "Sun" },
  { date: 14, day: "Sun" },
  { date: 15, day: "Sun" },
  { date: 16, day: "Sun" },
];

const times = [
  { time: "10:30", ampm: "AM" },
  { time: "10:45", ampm: "AM" },
  { time: "11:00", ampm: "AM" },
  { time: "11:15", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
  { time: "11:30", ampm: "PM" },
];

const ManageBarber = () => {
  // const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedTime, setSelectedTime] = useState("11:00");
  const [isModalOpen, setIsModalOpen] = useState(false); 
    const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <div>
      <div className="mt-11">
      {/* Calendar Dates */}
      <div className="flex gap-2 flex-wrap mb-4">
        {days.map((d) => (
          <div
            key={d.date}
            onClick={() => setSelectedDate(d.date)}
            className={`w-20 h-16 text-center cursor-pointer border shadow-md font-semibold rounded-2xl ${
              selectedDate === d.date
                ? "bg-[#D17C51] text-white"
                : "border-gray-400 text-black"
            }`}
          >
            <div className={`text-lg ${d.date === 7 ? "text-red-500" : ""}`}>{d.date}</div>
            <div className="text-lg">{d.day}</div>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="flex gap-2 flex-wrap mb-10">
        {times.map((t, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedTime(t.time)}
            className={`w-20 h-16 text-center cursor-pointer border font-semibold border-gray-300 shadow-md rounded-2xl flex flex-col justify-center ${
              selectedTime === t.time
                ? "bg-[#D17C51] text-white"
                : t.ampm === "PM"
                ? "text-[#E8002A] border-gray-300"
                : "text-black border-gray-400"
            }`}
          >
            <span className="text-lg">{t.time}</span>
            <span className="text-lg">{t.ampm}</span>
          </div>
        ))}
      </div>

      {/* Appointment Details */}
      <div className="shadow-md bg-white pb-52 p-6 rounded">
        <div className="grid grid-cols-3 text-center font-semibold  pb-3">
          <div>Barber Name</div>
          <div>Service Name</div>
          <div>Customer</div>
        </div>
        <div className="grid grid-cols-3 text-center items-center pt-4">
          {/* Barber */}
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="barber"
              className="w-8 h-8 rounded-full"
            />
            <span>Albert Flores</span>
          </div>

          {/* Service */}
          <div>Hair cut</div>

          {/* Customer */}
        
          <div  onClick={showModal} className="flex  items-center justify-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt="customer"
              className="w-8 h-8 rounded-full"
            />
            <span>Cameron Williamson</span>
          </div>
        </div>
      </div>
    </div>
    <Modal centered title="Customer Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p><strong>Payment Status:</strong> Paid $30 (Remaining: $20)</p>
        <p><strong>Notes:</strong> Please be gentle with beard area.</p>
        <p><strong>Booking Date:</strong> August 10, 2025</p>
        <p><strong>Time Slot:</strong> 11:00 AM</p>
      </Modal>
    </div>
  )
}

export default ManageBarber