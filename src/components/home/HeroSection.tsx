import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-section.webp";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full h-full py-6 md:py-12 lg:py-24 px-4 bg-[#f8f9ff] text-white">
      {/* hero text */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6 p-4 justify-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left text-black font-bold ">
          We are a digital <br /> and creative <br /> agency
        </h1>
        <p className="text-sm md:text-md lg:text-xl text-center lg:text-left text-gray-600 font-light ">
          We are a digital and creative agency that specializes in creating
          innovative solutions for businesses of all sizes.
        </p>
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-center">
          <Link to={"/our-works"}>
            <button className=" transition-all flex flex-row items-center justify-center gap-2 rounded-sm uppercase underline text-sm md:text-md lg:text-lg lg:text-left w-fit bg-[#3e83fe] hover:bg-purple-600 delay-100 hover:delay-150 duration-100 hover:duration-75 ease-in-out hover:text-white px-3 py-1 lg:px-5 lg:py-3 cursor-pointer ">
            <span> Start A Project</span><span className="element"> <FaArrowRightLong /></span>
            </button>
          </Link>
        </div>
      </div>
      {/* hero image */}
      <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
        <img
          src={heroImage ? heroImage : "/placeholder.png"}
          alt="hero image"
        />
      </div>
    </section>
  );
}
