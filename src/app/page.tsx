import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { IoIosHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import BasicAccordion from "../components/modules/home/dropdown";
import RadioButton from "../components/radioButton";
import Card from "../components/card";
export default function Home() {
  return (
    <div>
      <div className="w-full h-12 flex justify-between items-center container  mx-5 border p-2">
        <div className="flex items-center gap-8">
          <div className=" flex items-center gap-1 justify-center">
            <button>Home</button>
            <IoIosArrowDown />
          </div>
          <div className=" flex items-center gap-1 justify-center">
            <button>Shop</button>
            <IoIosArrowDown />
          </div>
          <div className=" flex items-center gap-1 justify-center">
            <button>Pages</button>
            <IoIosArrowDown />
          </div>
          <div className=" flex items-center gap-1 justify-center">
            <button>Blog</button>
            <IoIosArrowDown />
          </div>
          <div className=" flex items-center gap-1 justify-center">
            <button>About us</button>
            <IoIosArrowDown />
          </div>
          <div className=" flex items-center gap-1 justify-center">
            <button>Contact us</button>
            <IoIosArrowDown />
          </div>
        </div>
        {/* end */}
        <div className="flex justify-items-center items-center gap-3">
          <FiPhoneCall /> <h1>(219)555-0114</h1>
        </div>
      </div>
      {/* end  */}
      <div>
        <div className="relative">
          <img
            className="w-screen h-40 mx-8 flex justify-center items-center"
            src="https://i.ibb.co.com/RkfYBPWN/Green-Fresh-Vegetable-Mobile-Banner-Ad-1.png"
            alt=""
          />
          <div className="absolute top-16 flex items-center justify-center text-neutral-400 ml-32 gap-1">
            <IoIosHome /> <IoIosArrowForward />
            Categories <IoIosArrowForward />
            <h1>dinamic</h1>
          </div>
        </div>
        {/* end */}
        <div className="bg-red-400 pt-7 flex w-full h-40 mx-8 container">
          <div>
            {/* st */}
            <div className="bg-slate-600 w-[400px] h-full">
              <button className="bg-[#00B206] ml-28   px-7 flex justify-center items-center gap-2 py-2 rounded-2xl">
                Filter <CiFilter />
              </button>

              {/* here  */}
              <BasicAccordion></BasicAccordion>
              <BasicAccordion></BasicAccordion>
              <BasicAccordion></BasicAccordion>
            </div>
          </div>
          <div className="h-[1400px] min-w-[1135px] bg-stone-600 ">
            <div className="flex justify-between  items-center  ">
              <div className="flex justify-between items-center ">
                <h1>Sort by:</h1>
                <select
                  defaultValue="eng"
                  className="select btn-sm select-bordered w-28 text-neutral-300"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Eng</option>
                  <option>Bangla</option>
                </select>
              </div>

              <div className="text-4xl text-red-700">
                Dynammic Result Found{" "}
              </div>
            </div>

            {/* start */}
            <div className="grid grid-cols-3 justify-center items-center gap-2">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
}
