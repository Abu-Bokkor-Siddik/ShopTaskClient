import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
const Card = () => {
  return (
    <div className="card group bg-base-100 w-72 h-96 shadow-xl">
      <figure>
      
        <img
        className="h-60"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
     <div className="absolute flex flex-col top-2 right-2">
      <button ><CiHeart className=" h-8 w-8" /></button>
      <button ><FaEye className=" h-8 w-8" /></button>
      </div>
     </div>
      <div className="card-body">
        <h2 className="">
         Name items
          
        </h2>
        <div className="flex  justify-between items-center">
        <div >
        <p className="mb-2">Price</p>
        <p className="flex gap-1 items-center">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        </p>
        </div>
        <button><IoBagHandle className="h-6 w-6" /></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
