import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { IoIosHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
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
        <div className="bg-gray-400 pt-7 flex w-full h-40 mx-8 container">
          <div className="bg-slate-300 w-[400px] h-full">
            <button className="bg-[#00B206] ml-28   px-7 flex justify-center items-center gap-2 py-2 rounded-2xl">
              Filter <CiFilter />
            </button>
          </div>
          <div>hello</div>
        </div>
      </div>
    </div>
  );
}
