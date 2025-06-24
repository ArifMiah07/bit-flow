import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // menu data :todo: move them into lib or constants file
  const menu: string[] = ["Home", "About Us", "Our Works", "Contact"];

  const navLinks = menu.map((item: string, indx: number) => (
    <Link
      key={indx}
      className=""
      to={`${
        item?.toLowerCase().trim() === "home"
          ? "/"
          : item?.trim()?.toLowerCase()?.split(" ")?.join("-")
      }`}>
      <li className="text-md text-gray-700 font-normal transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:text-pink-500 delay-[index*100]">
        {item}
      </li>
    </Link>
  ));

  const handleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-2 px-4 lg:py-4 lg:px-8 bg-[#f8f9ff] text-white">
      {/* sm hidden on >=md device*/}
      <div className="flex md:hidden items-center justify-center">
        <div
          onClick={handleNavMenu}
          className="relative text-pink-500 cursor-pointer">
          <span className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110">
            <BiMenu />
          </span>

          {/* dropdown menu */}
          <div
            className={`absolute top-12 left-0 w-[200px] transition-all duration-300 ease-in-out overflow-hidden z-20 ${
              isOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-4 invisible"
            }`}>
            <ul className="bg-white rounded-xl border border-gray-300 shadow-xl p-6 flex flex-col items-center gap-4">
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
      {/* logo */}
      <div className="flex items-center justify-center">
        <Link to={"/"}>
          <span className="text-lg md:text-2xl lg:text-3xl text-purple-500 font-bold">
            Bit
          </span>
          <span className="text-lg md:text-2xl lg:text-3xl text-pink-500 font-bold">
            Flow
          </span>
        </Link>
      </div>
      {/* menu */}
      <div className="hidden w-full md:flex items-center justify-center">
        <ul className="flex items-center justify-baseline gap-4">{navLinks}</ul>
      </div>
      {/* other links */}
      <div className="flex items-center justify-center gap-4">
        <Link to="/login">
          <button>
            <span className="text-md text-pink-500 font-normal">Login</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
/**
 * This is Navbar component and it will be visible from main layout
 *
 *
 */
