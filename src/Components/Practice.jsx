import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  Legend,
} from "recharts";

const Practice = () => {
  const data = [
    { name: "1", lastMonth: 2000, thisMonth: 3000 },
    { name: "2", lastMonth: 3000, thisMonth: 3200 },
    { name: "3", lastMonth: 2500, thisMonth: 2800 },
    { name: "4", lastMonth: 2200, thisMonth: 2700 },
    { name: "5", lastMonth: 2600, thisMonth: 2900 },
    { name: "6", lastMonth: 2700, thisMonth: 3000 },
    { name: "7", lastMonth: 2900, thisMonth: 4504 },
  ];
  return (
    <div className="w-72 h-[234px] p-4 bg-white rounded-xl shadow flex flex-col items-center">
      <h2 className="text-[14px] font-semibold text-[#3E3F50] mb-2">
        Customer Satisfaction
      </h2>
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <CartesianGrid vertical={false} horizontal={false} />
          <Area
            type="monotone"
            dataKey="lastMonth"
            stroke="#3B82F6"
            fillOpacity={1}
            fill="url(#colorLast)"
            dot={{ r: 3, stroke: "#3B82F6", strokeWidth: 2, fill: "white" }}
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#colorThis)"
            dot={{ r: 3, stroke: "#10B981", strokeWidth: 2, fill: "white" }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-1 text-[10px] text-[#9CA3AF] w-full px-2">
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
            Last Month
          </div>
          <span className="font-semibold text-[#3E3F50] mt-1">$3,004</span>
        </div>
        <div className="border-l border-gray-300 h-6 mx-2"></div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            This Month
          </div>
          <span className="font-semibold text-[#3E3F50] mt-1">$4,504</span>
        </div>
      </div>
    </div>
  );
};

export default Practice;
