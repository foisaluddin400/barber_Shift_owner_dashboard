import React, { useState } from "react";
import { Table, Button, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

const ShopRegistration = () => {
    const [open, setOpen] = useState(false);
    const [selectedShop, setSelectedShop] = useState(null);

    const dataSource = [
        {
            key: "1",
            shopName: "Cameron Salons",
            address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            genderCategory: "Male",
            category: "Skin care",
            ownerName: "Mike Smith",
            email: "sadgfjdg@gmail.com",
            phone: "+3489 9999 9778",
            date: '01/4/2025',
            bankName: "AB Bank",
            accountHolder: "Dianne Russell",
            accountNumber: "6575675678676",
            branchCode: "4575467",
            service:'harcut',
            branchCity: "New York",
            assigned: 'talha',
            status: 'Confirmed',
            city:"Us",
            image: "https://via.placeholder.com/40" 
        }
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
                    <TbRosetteDiscountCheckFilled className="text-green-500"/>
                    <BiMessageRoundedDots className="text-[#AB684D]"/>
                    <RxCrossCircled className="text-[#AB684D]"/>
                </div>
            ),
        },
     
    ];
    
    return (
        <div className="p-3 bg-white mt-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold pb-2">Recent Booking Request</h2>
                <Link to={'/dashboard/allShop'}><button className="text-[#AB684D]">View all</button></Link>
            </div>
            <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 800 }} />
            
            
        </div>
    );
};

export default ShopRegistration;
