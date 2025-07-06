"use client";
import { Button } from "@heroui/button";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function TwoSection() {
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
  const [value, setValue] = useState(50);

  const handleIncrease = () => {
    if (value < 100) setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value > 0) setValue(value - 1);
  };
  return (
    <div className=" h-auto w-72 w-auto bg-zinc-400 p-3 ">
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
            <div>
              {/* st */}
              <div className="flex items-center space-x-4">
                <button onClick={handleDecrease}>-</button>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-auto"
                />
                <button onClick={handleIncrease}>+</button>
                <span>{value}</span>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
