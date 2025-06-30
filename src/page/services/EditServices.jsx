import { Form, Modal, Upload, DatePicker, TimePicker, Input, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

//adf
const EditServices = ({ editModal, setEditModal }) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
  
    const onChange = ({ fileList: newFileList }) => setFileList(newFileList);
  
    const onPreview = async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };
  
    const handleCancel = () => {
      form.resetFields();
      setFileList([]);
      setEditModal(false);
    };
  
    const handleSubmit = (values) => {
      console.log("Submitted:", values);
    };
  
    return (
      <Modal
        centered
        open={editModal}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <div className="mb-6 mt-2">
          <h2 className="text-center font-semibold text-xl mb-4">Edit Services</h2>
  
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="px-2"
        >
          <Form.Item label="Service name" name="name" className="mb-0">
            <Input
              placeholder="input services"
              className="w-full"
              style={{ height: 40 }}
            />
          </Form.Item>

          <Form.Item label="Service abailable for" name="name" className="mb-0">
            <Select
            
              labelInValue
              defaultValue={{ value: "lucy", label: "Lucy (101)" }}
              
              
              options={[
                {
                  value: "Everyone",
                  label: "Jack (100)",
                },
                {
                  value: "Male only",
                  label: "Lucy (101)",
                },
                {
                  value: "Female only",
                  label: "Lucy (101)",
                },
              ]}
            />
          </Form.Item>

          {/* Date, Time, Duration */}
          <div className="grid grid-cols-3 gap-2 mt-3 mb-4">
            <Form.Item  label="Duration" name="date" className="mb-0">
              <DatePicker

                placeholder="Enter Date"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>
            <Form.Item label="Price" name="time" className="mb-0">
              <TimePicker
                placeholder="Enter time"
                className="w-full"
                style={{ height: 40 }}
              />
            </Form.Item>
          </div>

       

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
}

export default EditServices