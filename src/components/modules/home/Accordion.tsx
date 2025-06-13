"use client";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import RadioButton from "./radioButton";
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

  const dataFake = [
    {
      title1: "",
      text: "",
    },
    {
      title1: "",
      text: "",
    },
    {
      title1: "",
      text: "",
    },
    {
      title1: "",
      text: "",
    },
    {
      title1: "",
      text: "",
    },
    {
      title1: "",
      text: "",
    },
    {
      title1: "",
      text: "",
    },
  ];
  return (
    <div className=" h-auto max-w-[330px] rounded-t-lg bg-zinc-400 p-3 ">
      {dataArr.map((PerAccordion, idx) => (
        <div key={idx} className="">
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-auto items-center justify-between font-medium text-white outline-none"
          >
            <span className="text-xl ml-28">{PerAccordion.title}</span>
            <span className="rounded-full p-2">
              {isOpen === idx ? (
                <GoChevronUp className="h-10 w-9" />
              ) : (
                <GoChevronDown className="h-10 w-9"></GoChevronDown>
              )}
            </span>
          </button>

          <div
            className={`grid ml-12 -mt-3 items-center text-black overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] pb-1 pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Fresh Foods</h1>
            </div>
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Vegetable</h1>
            </div>
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Cooking</h1>
            </div>
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Snacks</h1>
            </div>
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Beverages</h1>
            </div>
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Beauty</h1>
            </div>
            <div className="flex my-2  items-center gap-2">
              <RadioButton></RadioButton>
              <h1 className="text-white">Bread</h1>
            </div>
          <hr />
          </div>
        </div>
      ))}
    </div>
  );
}
