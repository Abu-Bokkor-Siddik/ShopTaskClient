
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { IoIosHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Home() {
  return (
    <div>
      <div className="w-full h-12 flex justify-between items-center container  mx-5 border p-2">
        <div className="flex items-center gap-6">
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
      <img className="w-screen h-40 mx-8 flex justify-center items-center" src="https://i.ibb.co.com/RkfYBPWN/Green-Fresh-Vegetable-Mobile-Banner-Ad-1.png" alt=""  />
      <div className="absolute top-16 flex items-center justify-center text-neutral-400 ml-32 gap-1"><IoIosHome /> <IoIosArrowForward />
     Categories <IoIosArrowForward />
     <h1>dinamic</h1></div>
      </div>
      {/* end */}
     </div>
    </div>
  );
}
