import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import BasicAccordion from "../components/modules/home/Accordion";
import Card from "../components/card";
import TwoSection from "../components/modules/home/SiteT/TwoSection";
import ThreeSection from "../components/modules/home/SiteT/ThreeSection";
import FourSection from "../components/modules/home/SiteT/FourSection";
import OfferCard from "../components/modules/home/SiteT/OfferCard";
import SaleCard from "../components/modules/home/SiteT/SaleCard";
import Pagination from "../components/modules/home/SiteT/Pagination";
import AllInOneside from "../components/modules/home/SiteT/AllInOneside";

export default function Home() {
  return (
    <div>
      <div className="w-full h-12 flex justify-between items-center container  mx-5 border p-2">
        <div className="flex items-center gap-8">
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
          <img
            className="w-screen h-40 mx-8 flex justify-center items-center"
            src="https://i.ibb.co.com/RkfYBPWN/Green-Fresh-Vegetable-Mobile-Banner-Ad-1.png"
            alt=""
          />
          <div className="absolute top-16 flex items-center justify-center text-neutral-400 ml-32 gap-1">
            <IoIosHome /> <IoIosArrowForward />
            Categories <IoIosArrowForward />
            <h1>dinamic</h1>
          </div>
        </div>
        {/* end */}
        <div className=" pt-7 flex w-full h-40 mx-8 container">
          <div>
            {/* st */}
            <div className=" w-[350px]  h-full">
              <button className=" btn btn-success ml-28 px-7 flex justify-center items-center gap-2 rounded-2xl  mb-6">
                Filter <CiFilter />
              </button>

              {/* here  */}
              <BasicAccordion></BasicAccordion>
              <TwoSection></TwoSection>
              <ThreeSection></ThreeSection>
              <FourSection></FourSection>
              <OfferCard></OfferCard>

              {/* 
               AllInOneside.jsx
             */}
              {/* <AllInOneside></AllInOneside> */}
              <p className="text-2xl py-4 mx-10 ">Sales Products</p>
              <div className="flex flex-col gap-3">
                <SaleCard></SaleCard>
                <SaleCard></SaleCard>
                <SaleCard></SaleCard>
              </div>
            </div>
          </div>
          <div className="h-[1400px] min-w-[1205px] bg-slate-50 ">
            <div className="flex justify-between  items-center  ">
              <div className="flex my-5  max-w-[1200px] justify-between items-center ">
                <h1>Sort by:</h1>
                <select
                  defaultValue="eng"
                  className="select btn-sm select-bordered w-28 text-black ml-3"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Latest</option>
                  <option>Oldest</option>
                </select>
              </div>

              <div className="text-xl lg:max-w-[500px] lg:mr-60  text-red-700 ">40 </div>
            </div>

            {/* start */}
            <div className="grid max grid-cols-1 lg:grid-cols-3 justify-center max-w-[900px] items-center mx-12 gap-8">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>

            {/* end */}
            {/* pagination  */}
            <div className="lg:w-full w-96">
              <Pagination></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
