import React, { useState, useMemo } from "react";
import { Select } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetDasboardQuery } from "../../page/redux/api/manageApi";

const UserGrowth = () => {
  const [year, setYear] = useState("2025"); // default current year
  const { data: dashboardData } = useGetDasboardQuery();

  const handleYearChange = (value) => {
    setYear(value);
  };

  // extract customerGrowth from API
  const customerGrowth = dashboardData?.data?.customerGrowth || [];

  // filter data for selected year
  const filteredData = useMemo(() => {
    return customerGrowth
      .filter((item) => item.month.includes(year))
      .map((item) => ({
        name: item.month.split(" ")[0], // "Aug" part only
        value: item.count,
      }));
  }, [customerGrowth, year]);

  // unique years from API for dropdown
  const yearOptions = [
    ...new Set(customerGrowth.map((item) => item.month.split(" ")[1])),
  ].map((y) => ({ value: y, label: y }));

  return (
    <div>
      <div className="flex justify-between p-3 ">
        <p className="text-xl font-medium">User Growth</p>
        <Select
          value={year}
          onChange={handleYearChange}
          style={{ width: 120 }}
          options={yearOptions}
        />
      </div>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={13}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              stackId="a"
              fill="#AB684D"
              radius={[25, 25, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowth;
