"use client";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import RadioButton from "../../radioButton";
export default function BasicAccordion() {
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

  return (
    <div className="w-full max-w-[500px] rounded-lg bg-slate-600 p-3 ">
      {dataArr.map((PerAccordion, idx) => (
        <div key={idx} className="">
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium text-white outline-none"
          >
            <span>{PerAccordion.title}</span>
            <span className="rounded-full p-2">
              {isOpen === idx ? (
                <GoChevronUp className="h-10 w-9" />
              ) : (
                <GoChevronDown className="h-10 w-9"></GoChevronDown>
              )}
            </span>
          </button>



          
          <div
            className={`grid items-center text-black overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] pb-1 pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="flex items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">text</h1>
            </div>
            <div className="flex items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">text</h1>
            </div>
            <div className="flex items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">text</h1>
            </div>
            <div className="flex items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">text</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
