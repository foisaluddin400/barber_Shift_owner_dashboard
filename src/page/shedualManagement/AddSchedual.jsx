import { Form, Modal, Upload, DatePicker, TimePicker, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const AddSchedual = ({ openAddModal, setOpenAddModal }) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    // setFileList([]);
    setOpenAddModal(false);
  };

  const handleSubmit = (values) => {
    console.log("Submitted:", values);
  };

  return (
    <div>
      <Modal
        centered
        open={openAddModal}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <div className="mb-6 mt-2">
          <h2 className="text-center font-semibold text-xl mb-4">
            New Booking
          </h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="px-2"
          >
            <Form.Item label='Customer Name' name="name" className="mb-0">
              <Input
                placeholder="Input Customer name"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>

            <Form.Item label='Service' name="service" className="mb-0">
              <Input
                placeholder="input Service"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>

            <Form.Item label='Assign Barber' name="assign" className="mb-0">
              <Input
                placeholder="input assign"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>
           

            {/* Date, Time, Duration */}
           
              <Form.Item label='Schedule Date & Time' name="date" className="mb-0">
                <DatePicker
                  placeholder="Enter Date"
                  className="w-full"
                  style={{ height: 40 }}
                />
              </Form.Item>
            

      

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-[#D17C51] text-white rounded-md"
            >
              Confirm
            </button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddSchedual;
