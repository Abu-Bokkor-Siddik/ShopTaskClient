"use client";

import { useState } from "react";

import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Rating from "./Rating";
export default function ThreeSection() {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "All Category",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  // value

  return (
    <div className=" h-auto  w-72 lg:w-[330px] bg-zinc-400 p-3 ">
      {dataArr.map((PerAccordion, idx) => (
        <div key={idx} className="">
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium text-white outline-none"
          >
            <span className="text-xl ml-14 ">{PerAccordion.title}</span>
            <span className="rounded-full p-2">
              {isOpen === idx ? (
                <GoChevronUp className="h-10 w-9" />
              ) : (
                <GoChevronDown className="h-10 w-9"></GoChevronDown>
              )}
            </span>
          </button>

          <div
            className={`grid ml-16 -mt-3 items-center text-black overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] pb-1 pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            {/* rang input */}
            {/* st call another component */}
            <div className="flex flex-col gap-2">
              <Rating />
              <Rating />
              <Rating />
              <Rating />
              <Rating />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
