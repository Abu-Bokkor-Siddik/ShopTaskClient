import React from "react";
import { FaStar } from "react-icons/fa";
const Card = () => {
  return (
    <div className="card bg-base-100 w-72 h-96 shadow-xl">
      <figure>
        
        <img
        className="h-60"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
         Name items
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price</p>
        <p>
        <FaStar />
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
