import React from "react";

const OfferCard = () => {
  return (
    <div className="card  bg-base-100 w-80 h-80 shadow-xl">
      <figure>
        <img
        className="w-80 h-80 object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className=" flex items-center flex-col absolute top-0">
        <h1 className=" ">Shoes!</h1>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="">
          <button className="btn ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
