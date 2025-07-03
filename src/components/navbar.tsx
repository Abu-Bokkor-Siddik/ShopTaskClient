import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/src/components/icons";
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
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
        </div>
        {/* start */}
        <div className="drawer z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn -ml-6 block lg:hidden btn-sm  drawer-button"
            >
              side
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu  bg-base-200 text-base-content h-full w-80 p-4">
              {/* Sidebar content here */}
              <div className="flex flex-col gap-2">
                <a
                  className="text-base text-[#06283D]   font-bold"
                  href="#home"
                >
                  Category
                </a>
                <a
                  className="text-base text-[#06283D]  font-bold"
                  href="#about"
                >
                  Range
                </a>
                <a
                  className="text-base text-[#06283D]   font-bold"
                  href="#skill"
                >
                  Rating
                </a>
                <a
                  className="text-base text-[#06283D]  font-bold"
                  href="#project"
                >
                  Tags
                </a>
                <a
                  className="text-base text-[#06283D]  font-bold"
                  href="#contact"
                >
                  CONTACT
                </a>
              </div>
            </ul>
          </div>
        </div>
        {/* end*/}
        <p className="btn btn-ghost text-2xl lg:mr-72">Ecobazar</p>
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
