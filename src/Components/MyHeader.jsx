import React, { useState } from "react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { TiMessageTyping } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import MainBody from "./MainBody";

const MyHeader = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <section className="bg-white flex justify-around items-center h-[5rem] shadow-xl lg:justify-between px-5 fixed z-50 w-full">
        <div className="lg:hidden">
          <button onClick={handleMenu}>
            {openMenu ? (
              <IoIosClose className="text-[2rem] text-blue-600" />
            ) : (
              <IoReorderThreeOutline className="text-[1.8rem] text-blue-600" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-1 items-center">
          <IoLogoAppleAppstore className="text-[2.5rem] text-blue-500" />
          <p className="text-[1.3rem] font-bold">Dabang</p>
        </div>

        <div>
          <p className="text-[1.5rem] font-bold hidden lg:flex">Dashboard</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-gray-200 h-[1.5rem] text-[0.800rem] rounded-lg pl-3 lg:w-[17rem] lg:h-[2rem]"
          />
          {/* <div className="relative">
            <IoIosSearch className="absolute inset-0 flex flex-col justify-start items-end" />
          </div> */}
        </div>

        <div>
          <select className="text-[0.900rem] lg:text-[1rem]">
            <option>En (US)</option>
            <option>UR</option>
          </select>
        </div>

        <div>
          <FaCircleUser className="text-[1.8rem]" />
        </div>
      </section>

      {openMenu && (
        <section className="bg-white px-3 py-3 w-[10rem] flex flex-col justify-between h-[calc(100vh-5rem)] shadow-lg fixed z-50 mt-[5rem] lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center">
              <IoLogoAppleAppstore className="text-[2.5rem] text-blue-500" />
              <p className="text-[1.3rem] font-bold">Dabang</p>
            </div>

            <div className="flex flex-col gap-5 px-3 py-6">
              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "one"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg "
                    : "bg-white text-black"
                }`}
                onClick={() => {
                  setActiveButton("one");
                }}
              >
                <RxDashboard />
                <p>Dashboard</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "two"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("two")}
              >
                <MdOutlineLeaderboard />
                <p>Leaderboard</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "three"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("three")}
              >
                <MdProductionQuantityLimits />
                <p>Products</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "four"
                    ? "bg-blue-500 text-white px-[0.200rem] py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("four")}
              >
                <BsGraphUp className="text-[0.800rem]" />
                <p>Sales Report </p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "five"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("five")}
              >
                <TiMessageTyping />
                <p>Message</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "six"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("six")}
              >
                <CiSettings />
                <p>Setting</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "seven"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("seven")}
              >
                <PiSignOut />
                <p>Sign Out</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end">
            <div className="bg-blue-500 py-2 w-[7rem] flex flex-col items-center gap-1 rounded-lg">
              <IoLogoAppleAppstore className="text-[2.5rem] text-white" />
              <p className="text-white text-[0.900rem] font-bold">Dabang Pro</p>
              <p className="text-white text-center text-[0.500rem]">
                Get access to all feature tetumbas
              </p>
              <button className="bg-white text-blue-500 font-bold w-[4.5rem] rounded-lg text-[0.700rem]">
                Get Pro
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="flex">
        <section className=" bg-white px-3 py-3 w-[11rem] h-[calc(100vh-5rem)] lg:flex flex-col justify-between shadow-lg hidden fixed z-50 mt-[5rem]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5 px-3 py-6">
              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "one"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg "
                    : "bg-white text-black"
                }`}
                onClick={() => {
                  setActiveButton("one");
                }}
              >
                <RxDashboard />
                <p>Dashboard</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "two"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("two")}
              >
                <MdOutlineLeaderboard />
                <p>Leaderboard</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "three"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("three")}
              >
                <MdProductionQuantityLimits />
                <p>Products</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "four"
                    ? "bg-blue-500 text-white px-[0.200rem] py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("four")}
              >
                <BsGraphUp className="text-[0.800rem]" />
                <p>Sales Report </p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "five"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("five")}
              >
                <TiMessageTyping />
                <p>Message</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "six"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("six")}
              >
                <CiSettings />
                <p>Setting</p>
              </div>

              <div
                className={`flex items-center gap-1 hover:cursor-pointer transition duration-300 ${
                  activeButton === "seven"
                    ? "bg-blue-500 text-white px-1 py-2 rounded-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("seven")}
              >
                <PiSignOut />
                <p>Sign Out</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end pb-10">
            <div className="bg-blue-500 py-2 w-[7rem] flex flex-col items-center gap-1 rounded-lg">
              <IoLogoAppleAppstore className="text-[2.5rem] text-white" />
              <p className="text-white text-[0.900rem] font-bold">Dabang Pro</p>
              <p className="text-white text-center text-[0.500rem]">
                Get access to all feature tetumbas
              </p>
              <button className="bg-white text-blue-500 font-bold w-[4.5rem] rounded-lg text-[0.700rem]">
                Get Pro
              </button>
            </div>
          </div>
        </section>

        <section>
          <MainBody />
        </section>
      </section>
    </div>
  );
};

export default MyHeader;
