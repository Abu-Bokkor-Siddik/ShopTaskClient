/* eslint-disable prettier/prettier */
import { CiLocationOn } from "react-icons/ci";
import Auto from "./autoComplete";
const Uper = () => {
  return (
    <div className="w-full h-14 bg-neutral-700 flex justify-between items-center">
      <div className="text-neutral-300 text-sm ml-16 flex justify-center items-center gap-4 ">
        <CiLocationOn />{" "}
        <div>Store Location : lincoin- 344,llinois,Chicago,USA</div>
      </div>{" "}
      <div>
        <Auto></Auto>
      </div>
    </div>
  );
};

export default Uper;
