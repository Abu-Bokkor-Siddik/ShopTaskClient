import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";

import { SearchIcon, Logo } from "@/src/components/icons";
import Search from "./search";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <div className="navbar bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <>Item 3</>
            </li>
          </ul>
        </div>
        <p className="btn btn-ghost text-2xl">Ecobazar</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Search></Search>{" "}
        <button className="btn ml-4 btn-success ">Search</button>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-3">
          <FaRegHeart className="h-6 w-6" />
          <p>|</p>
          <div className=" btn relative flex justify-center items-center">
            <p>
              <MdOutlineShoppingBag className="w-7 h-7 " />{" "}
              <p className="absolute top-0 bg-pink-500 p-1 rounded-full left-8">
                4
              </p>
            </p>{" "}
            <div className="flex flex-col gap-2">
              <p className=" w-auto opacity-50 h-3">Shopping Cards</p>{" "}
              <p>$ 454.44</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
