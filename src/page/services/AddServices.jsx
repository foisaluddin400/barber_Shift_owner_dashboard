import { Form, Modal, Upload, DatePicker, TimePicker, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const AddServices = ({ openAddModal, setOpenAddModal }) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setFileList([]);
    setOpenAddModal(false);
  };

  const handleSubmit = (values) => {
    console.log("Submitted:", values);
  };

  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={400}
    >
      <div className="mb-6 mt-2">
        <h2 className="text-center font-semibold text-xl mb-4">Add promotional</h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="px-2"
        >
        <Form.Item name="duration" className="mb-0">
              <Input
                placeholder="3h 45m"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>

          {/* Date, Time, Duration */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Form.Item name="date" className="mb-0">
              <DatePicker
                placeholder="Enter Date"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>
            <Form.Item name="time" className="mb-0">
              <TimePicker
                placeholder="Enter time"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>
           
          </div>

          <Form.Item name="description" label="Description">
            <Input.TextArea
              rows={3}
              placeholder="Write description"
              className="bg-gray-100"
            />
          </Form.Item>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#D17C51] text-white rounded-md"
          >
            Save
          </button>
        </Form>
      </div>
    </Modal>
  );
};

export default AddServices;
