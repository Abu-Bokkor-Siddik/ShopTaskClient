import React from "react";
import { FaStar } from "react-icons/fa";

const SaleCard = () => {
  return (
    <div className="card bg-neutral text-neutral-content h-36 w-72">
      <div className="card-body items-center text-center">
        <div className="flex gap-6 items-center">
          <img
            className=" rounded-md  h-20 w-20 "
            src="https://i.ibb.co/j8mhHQ6/download-2.jpg"
            alt="product"
          />
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
