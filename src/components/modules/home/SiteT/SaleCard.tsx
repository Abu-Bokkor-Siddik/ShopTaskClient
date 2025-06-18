import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SaleCard = () => {
  return (
    <div className="card bg-neutral text-neutral-content h-28 w-72">
      <div className="card-body items-center text-center">
        <div>
          <Image className="h-14 w-14 rounded-md " src="" alt="images" />
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
