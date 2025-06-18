import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SaleCard = () => {
  return (
    <div className="card bg-neutral text-neutral-content h-28 w-72">
      <div className="card-body items-center text-center">
        <div>
          <Image className="h-14 w-14 rounded-md " src="" alt="images" />
          <div>
            <h1>products name </h1>
            <p className="mb-2">300$</p>
            <p className="flex gap-1 items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
