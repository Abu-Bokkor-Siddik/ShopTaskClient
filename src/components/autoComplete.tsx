/* eslint-disable prettier/prettier */
"use client";

export default function Auto() {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <select
          defaultValue="eng"
          className="select btn-sm bg-neutral-700 select-bordered w-28 text-neutral-300"
        >
          <option disabled selected>
            Select
          </option>
          <option>Eng</option>
          <option>Bangla</option>
        </select>

        {/*  */}

        <select
          defaultValue="eng"
          className="select btn-sm bg-neutral-700 select-bordered w-28 text-neutral-300"
        >
          <option disabled selected>
            Select
          </option>
          <option>$Usd</option>
          <option>Taka</option>
        </select>
        <div className="mx-2 text-white">|</div>
        <button className="btn-sm btn-neutral mx-3 bg-neutral-700 text-neutral-300">
          Sign In
        </button>
      </div>
    </div>
  );
}
