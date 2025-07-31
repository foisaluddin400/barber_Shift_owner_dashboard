import { Form, Modal, Upload, DatePicker, TimePicker, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const format = "HH:mm";
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
            New Schedule
          </h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="px-2"
          >
            <Form.Item label="Barber Name" name="name" className="mb-4">
              <Input
                placeholder="Barber Name"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Form.Item label="Working hours" name="Working" className="mb-0">
                <TimePicker
                  className="w-full"
                  defaultValue={dayjs("12:08", format)}
                  format={format}
                />
              </Form.Item>
              <Form.Item label="Break Times" name="break" className="mb-0">
                <TimePicker
                  className="w-full"
                  defaultValue={dayjs("12:08", format)}
                  format={format}
                />
              </Form.Item>
            </div>

           

            {/* Date, Time, Duration */}

  <Form.Item
              label="Real-time Availability"
              name="Availability"
              className="mb-4"
            >
              <DatePicker
                placeholder="Real-time Availability"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>
            <Form.Item
              label="Special Dates"
              name="Special"
              className="mb-0"
            >
              <DatePicker
                placeholder="Special Dates"
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
