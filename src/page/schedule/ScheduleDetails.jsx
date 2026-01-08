import React, { useMemo, useState } from "react";
import { Modal } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import {
  useGetDatebarberQuery,
  useGetProfileQuery,
} from "../redux/api/manageApi";

const ScheduleDetails = () => {
  const { data: profileData } = useGetProfileQuery();
  const adminId = profileData?.data?.id;
  const { id: barberId } = useParams();

  // ✅ default = today
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [showBookings, setShowBookings] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // 🔹 API date format
  const apiDate = selectedDate.format("YYYY-MM-DD");

  const { data: dateSchedule, isLoading } = useGetDatebarberQuery({
    adminId,
    barberId,
    date: apiDate,
  });

  const barber = dateSchedule?.data;

  // ================= Calendar (Today → Next 30 days) =================
  const calendarDays = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = dayjs().add(i, "day");
      return {
        labelDate: date.format("DD"),
        week: date.format("ddd"),
        fullDate: date,
      };
    });
  }, []);

  return (
    <div className="mt-8">
      {/* ================= Calendar ================= */}
      <div className="flex gap-3 flex-wrap mb-6">
        {calendarDays.map((d) => (
          <div
            key={d.fullDate.format("YYYY-MM-DD")}
            onClick={() => {
              setSelectedDate(d.fullDate);
              setShowBookings(false);
            }}
            className={`w-20 h-16 cursor-pointer text-center rounded-xl border shadow-sm font-semibold
              ${
                selectedDate.isSame(d.fullDate, "day")
                  ? "bg-[#D17C51] text-white"
                  : "border-gray-300"
              }`}
          >
            <div className="text-lg">{d.labelDate}</div>
            <div className="text-sm">{d.week}</div>
          </div>
        ))}
      </div>

      {/* ================= Content ================= */}
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : !barber ? (
        <p className="text-center text-gray-500">No data available</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* ================= Barber Info ================= */}
          <div
            onClick={() => setShowBookings(!showBookings)}
            className="flex items-center gap-4 cursor-pointer"
          >
            <img
              src={barber.image}
              alt="barber"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{barber.name}</h2>
              <p className="text-sm text-gray-500">
                {barber.schedule?.start} - {barber.schedule?.end}
              </p>
              <p className="text-sm">
                Status:{" "}
                <span className="text-green-600 font-medium">
                  {barber.status}
                </span>
              </p>
            </div>
          </div>

          {/* ================= Free Slots ================= */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Free Slots</h3>
            <div className="flex gap-2 flex-wrap">
              {barber.freeSlots?.map((slot, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded text-sm"
                >
                  {slot.start} - {slot.end}
                </span>
              ))}
            </div>
          </div>

          {/* ================= Bookings ================= */}
          {showBookings && (
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Bookings</h3>

              {barber.bookings?.length === 0 ? (
                <p className="text-gray-500">No bookings</p>
              ) : (
                barber.bookings.map((booking, index) => (
                  <div
                    key={index}
                    onClick={() => setOpenModal(true)}
                    className="grid grid-cols-3 items-center py-3 border-b cursor-pointer"
                  >
                    {/* Customer */}
                    <div className="flex items-center gap-2">
                      <img
                        src={booking.customerImage}
                        alt="customer"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{booking.customerName}</span>
                    </div>

                    {/* Service */}
                    <div>{booking.services.join(", ")}</div>

                    {/* Time */}
                    <div>
                      {booking.startTime} - {booking.endTime}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* ================= Modal ================= */}
      <Modal
        centered
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        title="Customer Details"
      >
        <p>Booking Date: {apiDate}</p>
        <p>Payment Status: Paid</p>
      </Modal>
    </div>
  );
};

export default ScheduleDetails;
