import React from "react";
import { FaStar } from "react-icons/fa";
import { Navigate } from "../../Navigate";
import { useGetSingleBarberQuery } from "../redux/api/manageApi";
import { useParams } from "react-router-dom";

const BarberDetailsPage = () => {
  const { id } = useParams();
  const { data: barberDetails, isLoading } = useGetSingleBarberQuery({ id });

  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  const barber = barberDetails?.data;

  return (
    <div className="bg-white p-3 ">
      <Navigate title={"Details"} />

      {/* Profile Section */}
      <div className="flex items-center gap-4 mt-5">
        <img
          src={barber?.user?.image}
          alt="Barber"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold">
            {barber?.user?.fullName}
          </p>
          <p className="text-sm text-gray-500">
            {barber?.user?.email}
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Personal Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            value={barber?.user?.fullName || ""}
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded-md"
            value={barber?.user?.email || ""}
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Contact</label>
          <input
            type="tel"
            className="w-full border p-2 rounded-md"
            value={barber?.user?.phoneNumber || "N/A"}
            disabled
          />
        </div>
      </div>
      {/* Bio Section */}
<div className="mt-5">
  <h3 className="text-lg font-semibold mb-1">Bio</h3>
  <p className="text-gray-600 text-sm">
    {barber?.bio || "No bio available"}
  </p>
</div>

{/* Experience Section */}
<div className="mt-4">
  <h3 className="text-lg font-semibold mb-1">Experience</h3>
  <p className="text-gray-600 text-sm">
    {barber?.experienceYears} years
  </p>
</div>

{/* Skills Section */}
<div className="mt-4">
  <h3 className="text-lg font-semibold mb-2">Skills</h3>

  <div className="flex flex-wrap gap-2">
    {barber?.skills?.map((skill, index) => (
      <span
        key={index}
        className="px-3 py-1 text-sm bg-gray-100 border rounded-full text-gray-700"
      >
        {skill}
      </span>
    ))}
  </div>
</div>


      {/* Rating Section */}
      <div className="mt-4 flex items-center gap-2 text-lg">
        <FaStar className="text-yellow-500" />
        <span className="font-medium">
          Rating: {barber?.avgRating}/5 ({barber?.ratingCount} Reviews)
        </span>
      </div>

      {/* Barber Photos */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Barber Photos</h3>

        <div className="grid md:grid-cols-4 gap-3 overflow-x-auto">
          {barber?.portfolio?.map((img, index) => (
            <img
              key={index}
              src={img.replace(/%22/g, "")}
              alt={`Portfolio ${index + 1}`}
              className="w-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberDetailsPage;
