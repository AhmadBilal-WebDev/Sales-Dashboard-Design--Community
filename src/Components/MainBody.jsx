import React, { useState } from "react";
import { CiExport } from "react-icons/ci";
import { PiCardsThreeLight } from "react-icons/pi";
import { FaRegFileCode } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  Cell,
} from "recharts";

const MainBody = () => {
  const [value1, setValue1] = useState(45);
  const [value2, setValue2] = useState(29);
  const [value3, setValue3] = useState(18);
  const [value4, setValue4] = useState(25);

  const myCarts = [
    {
      img: <PiCardsThreeLight />,
      price: "$1K",
      text: "Total Sales",
      persantage: "+8% from yesterday",
      bgColor: "bg-red-100",
      bgImg: "bg-red-400 ",
    },
    {
      img: <FaRegFileCode />,
      price: "300",
      text: "Total Order",
      persantage: "+5% from yesterday",
      bgColor: "bg-yellow-100",
      bgImg: "bg-pink-300",
    },
    {
      img: <LuPencilLine />,
      price: "5",
      text: "Product Sold",
      persantage: "+1.2% from yesterday",
      bgColor: "bg-green-100",
      bgImg: "bg-green-400",
    },
    {
      img: <FaUserPlus />,
      price: "8",
      text: "New Custoer",
      persantage: "+0.5% from yesterday",
      bgColor: "bg-purple-100",
      bgImg: "bg-purple-400",
    },
  ];

  const myInputValue = [
    {
      num: "01",
      myContent: "Home Decor Range",
      myInput: <input type="range" />,
      OurSale: "Sales",
    },
  ];

  const data1 = [
    { month: "Jan", value1: 150, value2: 200, value3: 250 },
    { month: "Feb", value1: 200, value2: 250, value3: 300 },
    { month: "Mar", value1: 180, value2: 230, value3: 310 },
    { month: "Apr", value1: 220, value2: 260, value3: 330 },
    { month: "May", value1: 240, value2: 270, value3: 350 },
    { month: "Jun", value1: 260, value2: 290, value3: 370 },
    { month: "Jul", value1: 280, value2: 310, value3: 390 },
    { month: "Aug", value1: 300, value2: 320, value3: 400 },
    { month: "Sep", value1: 270, value2: 300, value3: 360 },
    { month: "Oct", value1: 250, value2: 280, value3: 340 },
    { month: "Nov", value1: 230, value2: 260, value3: 320 },
    { month: "Dec", value1: 210, value2: 240, value3: 300 },
  ];

  const data2 = [
    { name: "Monday", value1: 300, value2: 200 }, // value1 > value2
    { name: "Tuesday", value1: 180, value2: 250 }, // value2 > value1
    { name: "Wednesday", value1: 320, value2: 220 }, // value1 > value2
    { name: "Thursday", value1: 150, value2: 270 }, // value2 > value1
    { name: "Friday", value1: 310, value2: 190 }, // value1 > value2
    { name: "Saturday", value1: 170, value2: 260 }, // value2 > value1
    { name: "Sunday", value1: 340, value2: 240 }, // value1 > value2
  ];
  const data5 = [
    { name: "Jan", value1: 300, value2: 200 }, // value1 > value2
    { name: "Feb", value1: 180, value2: 250 }, // value2 > value1
    { name: "Mar", value1: 320, value2: 220 }, // value1 > value2
    { name: "Apr", value1: 150, value2: 270 }, // value2 > value1
    { name: "Jun", value1: 310, value2: 190 }, // value1 > value2
    { name: "Dec", value1: 170, value2: 260 }, // value2 > value1
    { name: "Oct", value1: 340, value2: 240 }, // value1 > value2
  ];

  const data3 = [
    { name: "1", lastMonth: 2000, thisMonth: 3000 },
    { name: "2", lastMonth: 3000, thisMonth: 3200 },
    { name: "3", lastMonth: 2500, thisMonth: 2800 },
    { name: "4", lastMonth: 2200, thisMonth: 2700 },
    { name: "5", lastMonth: 2600, thisMonth: 2900 },
    { name: "6", lastMonth: 2700, thisMonth: 3000 },
    { name: "7", lastMonth: 2900, thisMonth: 4504 },
  ];

  const data4 = [
    { id: 1, volume: 60, services: 40 },
    { id: 2, volume: 70, services: 30 },
    { id: 3, volume: 65, services: 35 },
    { id: 4, volume: 55, services: 45 },
    { id: 5, volume: 50, services: 40 },
    { id: 6, volume: 45, services: 35 },
  ];

  const handleOne = (e) => {
    setValue1(e.target.value);
  };
  const handleTwo = (e) => {
    setValue2(e.target.value);
  };
  const handleThree = (e) => {
    setValue3(e.target.value);
  };
  const handleFour = (e) => {
    setValue4(e.target.value);
  };

  return (
    <div className="lg:ml-[11rem] mt-[5rem]">
      <section className="w-screen flex flex-col items-center lg:flex-row lg:gap-3 lg:w-[calc(100vw-11rem)] lg:px-3">
        <div className="w-[calc(100vw-30px)] rounded-lg h-[10rem] bg-white shadow-2xl py-2 mt-3 lg:h-[15rem] lg:w-[60vw] lg:flex lg:flex-col lg:justify-center">
          <section className="flex items-center justify-between px-5">
            <div>
              <p className="font-bold text-[0.700rem] lg:text-[1rem]">
                Today's Sales
              </p>
              <p className="font-light text-[0.500rem] lg:text-[0.800rem]">
                Sale Summery
              </p>
            </div>

            <div className="flex gap-1 items-center justify-center border rounded-[0.100rem] w-[3rem] lg:w-[5rem]">
              <CiExport className="text-[0.600rem] lg:text-[0.800rem]" />
              <p className="text-[0.600rem] lg:text-[0.800rem]">Export</p>
            </div>
          </section>

          <section className="px-5 mt-5 grid gap-1 grid-cols-4">
            {myCarts.map((items, index) => (
              <div
                key={index}
                className={`${items.bgColor} pl-2 py-2 rounded space-y-1`}
              >
                <p
                  className={`w-5 text-[0.800rem] p-1 rounded-full lg:text-[1rem] lg:w-6 ${items.bgImg}`}
                >
                  {items.img}
                </p>
                <p className="font-bold text-[0.700rem] lg:text-[1rem]">
                  {items.price}
                </p>
                <p className="font-light text-[0.400rem] lg:text-[0.800rem]">
                  {items.text}
                </p>
                <p className="text-[0.350rem] font-bold text-blue-500 lg:text-[0.600rem]">
                  {items.persantage}
                </p>
              </div>
            ))}
          </section>
        </div>

        <div className="w-[calc(100vw-30px)] rounded-lg h-[10rem] bg-white shadow-xl py-2 mt-3 flex flex-col justify-start lg:w-[40vw] lg:h-[15rem]">
          <p className="font-bold text-[0.900rem] pl-10">Visitor Insight</p>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data1}
              margin={{ left: -23, right: 20, top: 15, bottom: 15 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" style={{ fontSize: "8px" }} />
              <YAxis
                domain={[100, 400]}
                ticks={[100, 200, 300, 400]}
                style={{ fontSize: "8px" }}
              />
              <Tooltip
                contentStyle={{ fontSize: "12px" }}
                labelStyle={{ fontSize: "12px" }}
                itemStyle={{ fontSize: "12px" }}
              />
              <Legend wrapperStyle={{ fontSize: "8px" }} />
              <Line
                type="monotone"
                dataKey="value1"
                stroke="#10B981"
                strokeWidth={2}
                name="Loyal Customers"
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="#EF4444"
                strokeWidth={2}
                name="New Customer"
              />
              <Line
                type="monotone"
                dataKey="value3"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Unique Customer"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="w-screen flex flex-col items-center lg:flex-row lg:gap-3 lg:w-[calc(100vw-11rem)] lg:px-3">
        <div className="w-[calc(100vw-30px)] rounded-lg h-[10rem] bg-white shadow-xl py-2 mt-3 flex flex-col justify-start lg:w-full lg:h-[15rem]">
          <p className="font-bold text-[0.900rem] pl-10 mb-2">Total Revenue</p>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={data2}
              barCategoryGap={10}
              margin={{ left: -23, right: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: "10px" }} />
              <YAxis style={{ fontSize: "10px" }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Bar dataKey="value1" fill="#3B82F6" name="Online Sale" />
              <Bar dataKey="value2" fill="#10B981" name="Offline Sale" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-[calc(100vw-30px)] rounded-lg h-[10rem] bg-white shadow-xl py-2 px-4 mt-3 flex flex-col justify-start lg:w-full lg:h-[15rem]">
          <p className="font-bold text-[0.900rem] pl-10 pb-2">
            Customer Satisfaction
          </p>
          <ResponsiveContainer width="100%" height="60%">
            <AreaChart
              data={data3}
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
                dot={{
                  r: 3,
                  stroke: "#3B82F6",
                  strokeWidth: 2,
                  fill: "white",
                }}
              />
              <Area
                type="monotone"
                dataKey="thisMonth"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorThis)"
                dot={{
                  r: 3,
                  stroke: "#10B981",
                  strokeWidth: 2,
                  fill: "white",
                }}
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

        <div className="w-[calc(100vw-30px)] rounded-lg h-[10rem] bg-white shadow-xl py-2 mt-3 flex flex-col justify-start lg:w-full lg:h-[15rem]">
          <p className="font-bold text-[0.900rem] pl-10 pb-2">
            Target vs Reality
          </p>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              data={data5}
              barCategoryGap={10}
              margin={{ left: -23, right: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: "10px" }} />
              <YAxis style={{ fontSize: "10px" }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Bar dataKey="value1" fill="red" name="Target Sale" />
              <Bar dataKey="value2" fill="#10B981" name="Raelity Sale" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="w-screen mb-4 flex flex-col items-center lg:flex-row lg:gap-3 lg:w-[calc(100vw-11rem)] lg:px-3">
        <div className="w-[calc(100vw-30px)] space-y-1 rounded-lg h-[10rem] bg-white shadow-xl py-3 px-3 mt-3 lg:w-full lg:h-[15rem] lg:space-y-3">
          <div>
            <p className="text-[0.800rem] font-bold lg:text-[1rem]">
              Top Products
            </p>
          </div>

          <div className="flex justify-between">
            <div className="text-[0.600rem] font-bold lg:text-[0.800rem]">
              <p>#</p>
            </div>

            <div className="text-[0.600rem] font-bold lg:text-[0.800rem]">
              <p>Name</p>
            </div>

            <div className="text-[0.600rem] font-bold lg:text-[0.800rem]">
              <p>Popularity</p>
            </div>

            <div className="text-[0.600rem] font-bold lg:text-[0.800rem]">
              <p>Sales</p>
            </div>
          </div>

          <div className="border-b w-full"></div>

          <div className="space-y-1 lg:space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  01
                </p>
              </div>

              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  Home Decor Range
                </p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={value1}
                onChange={handleOne}
                className="w-[5rem] "
              />

              <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                {value1}%
              </p>
            </div>

            <div className="border-b w-full"></div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  02
                </p>
              </div>

              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  Disney Princess Pink Bag 18
                </p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={value2}
                onChange={handleTwo}
                className="w-[5rem]"
              />

              <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                {value2}%
              </p>
            </div>

            <div className="border-b w-full"></div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  03
                </p>
              </div>

              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  Bathroom Essential
                </p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={value3}
                onChange={handleThree}
                className="w-[5rem]"
              />

              <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                {value3}%
              </p>
            </div>

            <div className="border-b w-full"></div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  04
                </p>
              </div>

              <div>
                <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                  Apples SmartWatches
                </p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={value4}
                onChange={handleFour}
                className="w-[5rem]"
              />

              <p className="text-[0.600rem] text-center lg:text-[0.700rem]">
                {value4}%
              </p>
            </div>
          </div>
        </div>

        <div className="w-[calc(100vw-30px)] space-y-1 rounded-lg h-[10rem] bg-white shadow-xl py-3 px-3 mt-3 lg:w-full lg:h-[15rem] lg:space-y-3">
          <div>
            <p className="text-[0.800rem] font-bold lg:text-[1rem]">
              Sale Mapping For Country
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.9Rhf-Puimwj9yq_G2HrIywHaEF&pid=Api&P=0&h=220"
              className="object-cover w-[14rem] lg:w-[20rem]"
            />
          </div>
        </div>

        <div className="w-[calc(100vw-30px)] space-y-1 rounded-lg h-[10rem] bg-white shadow-xl py-3 px-3 mt-3 lg:w-full lg:h-[15rem] lg:space-y-5 lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-[13px] font-bold lg:text-[1rem]">
            Volume vs Service Level
          </h2>
          <ResponsiveContainer width="100%" height="50%">
            <ComposedChart
              data={data4}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis dataKey="id" hide />
              <YAxis hide />
              <Tooltip />

              <Bar dataKey="services" stackId="bar" fill="#10B981" barSize={10}>
                {data4.map((entry, index) => (
                  <Cell key={`services-${index}`} />
                ))}
              </Bar>

              <Bar dataKey="volume" stackId="bar" fill="#3B82F6" barSize={10}>
                {data4.map((entry, index) => (
                  <Cell key={`volume-${index}`} />
                ))}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-1 text-[10px] text-[#9CA3AF] w-full px-2">
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 mr-1"></span>
                Volume
              </div>
              <span className="font-semibold text-[#3E3F50] mt-1">1,135</span>
            </div>
            <div className="border-l border-gray-300 h-6 mx-2"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 mr-1"></span>
                Services
              </div>
              <span className="font-semibold text-[#3E3F50] mt-1">635</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBody;
