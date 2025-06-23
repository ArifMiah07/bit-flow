import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-section.webp";

export default function HeroSection() {
  return (
    <section className=" flex flex-col lg:flex-row items-center justify-center w-full min-h-[80vh] bg-[#f8f9ff] text-white">
      {/* hero text */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6 p-4 justify-center ">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center lg:text-left text-black font-bold ">
          We are a digital <br /> and creative <br /> agency
        </h1>
        <p className="text-md md:text-lg lg:text-xl text-center lg:text-left text-gray-600 font-light ">
          We are a digital and creative agency that specializes in creating
          innovative solutions for businesses of all sizes.
        </p>
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-center">
          <Link to={"/project"}>
            <button className=" lg:text-left w-fit bg-[#3e83fe] px-5 py-3">
              Start A Project
            </button>{" "}
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
