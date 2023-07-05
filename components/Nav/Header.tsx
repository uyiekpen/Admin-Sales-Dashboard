"use client";
import React, { useState, useRef } from "react";
import { FaSchool, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  AiOutlineCopy,
  AiFillQuestionCircle,
  AiFillBell,
  AiFillDashboard,
  AiOutlineCalendar,
} from "react-icons/ai";
import Link from "next/link";
import { SideBarItem } from "./RouterSide";
import SideBar from "./SideNav";

const Header = () => {
  const [change, setChange] = useState(false);

  const myRef = useRef<HTMLDivElement>(null!);
  const backRef = useRef<HTMLDivElement>(null!);

  const changeTrue = () => {
    setChange(true);
    myRef.current.style.left = "0px";
    backRef.current.style.left = "0px";
  };

  const changeFalse = () => {
    setChange(false);
    myRef.current.style.left = "-150px";
    backRef.current.style.left = "-2000px";
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between border-b-2 py-4 px-8">
        <div className="block md:hidden">
          {change ? (
            <FaBars className="text-2xl cursor-pointer" onClick={changeFalse} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={changeTrue} />
          )}
        </div>
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full h-9 w-9 flex items-center justify-center mr-3">
            <FaSchool className="text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="min-w-[280px] min-h-[calc(100vh-60px)] overflow-hidden hidden md:block flex-col bg-white shadow fixed justify-between z-10">
        <div className="pt-2 pl-2">
          {SideBarItem.map((props: any, index: number) => (
            <Link
              href={props.to}
              key={index}
              className={`${props.isActive ? "text-blue-500" : "text-black"} ${
                props.isActive ? "underline" : "no-underline"
              }  flex mt-8`}
            >
              <div className="flex items-center w-full">
                &nbsp;&nbsp;&nbsp;
                <div className="text-lg"> {props.icon(props)}</div>
                &nbsp;&nbsp;&nbsp;
                <span className="text-lg"> {props.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div
        ref={backRef}
        className="absolute h-screen w-screen bg-red border-r-[2px] left-[-2000px] transition duration-1000ms block md:hidden z-1 "
      >
        <div
          ref={myRef}
          onClick={changeFalse}
          className="min-w-[40px] h-screen fixed z-40 top-0 left-0 block md:hidden mt-[68px] bg-blue-500 border-r-2"
        >
          <SideBar changeFalse={changeFalse} />
        </div>
      </div>
    </div>
  );
};

export default Header;
