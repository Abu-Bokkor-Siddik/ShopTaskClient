import React from "react";
const OfferCard = () => {
  return (
    <div className="card  bg-base-100  w-72 lg:w-80 h-72 lg:h-80 shadow-xl">
      <figure>
        <img
          className="w-80 h-80 object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className=" flex items-center gap-7 justify-center flex-col absolute top-1/4 left-14">
        <h6 className=" text-3xl ">79% Discount</h6>
        <p>On your first order</p>
        <div className="">
          <button className="btn ">Shope Now {"==>"} </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
