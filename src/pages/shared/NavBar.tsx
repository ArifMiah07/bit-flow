import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar() {


    // menu data :todo: move them into lib or constants file
  const menu : string[] = ["Home", "About Us", "Our Works", "Contact"];

  const navLinks = menu.map((item : string, indx : number) => (
    <Link key={indx} className="" to={`/${item?.trim()?.toLowerCase()?.split(" ")?.join("-")}`}>
      <li className="text-md text-gray-700 font-normal ">{item}</li>
    </Link>
  ));

  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-[#f8f9ff] text-white">
      {/* sm hidden on >=md device*/}
      <div className="flex md:hidden items-center justify-center">
        <span className="text-pink-500">
          <BiMenu></BiMenu>
        </span>
      </div>
      {/* logo */}
      <div className="flex items-center justify-center">
        <span className="text-lg md:text-2xl lg:text-3xl text-purple-500 font-bold">Bit</span>
        <span className="text-lg md:text-2xl lg:text-3xl text-pink-500 font-bold">Flow</span>
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